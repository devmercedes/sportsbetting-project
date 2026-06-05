-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Profiles
CREATE TABLE public.profiles (
  id            UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email         TEXT NOT NULL,
  full_name     TEXT,
  avatar_url    TEXT,
  sport_prefs   TEXT[]        DEFAULT '{}',
  risk_tolerance TEXT         DEFAULT 'medium',
  telegram_id   BIGINT,
  created_at    TIMESTAMPTZ   DEFAULT NOW(),
  updated_at    TIMESTAMPTZ   DEFAULT NOW()
);

-- Subscriptions
CREATE TABLE public.subscriptions (
  id                   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id              UUID UNIQUE REFERENCES public.profiles(id) ON DELETE CASCADE,
  stripe_customer_id   TEXT UNIQUE NOT NULL,
  stripe_sub_id        TEXT UNIQUE,
  plan                 TEXT NOT NULL DEFAULT 'free',
  status               TEXT NOT NULL DEFAULT 'active',
  current_period_end   TIMESTAMPTZ,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  created_at           TIMESTAMPTZ DEFAULT NOW(),
  updated_at           TIMESTAMPTZ DEFAULT NOW()
);

-- Picks
CREATE TABLE public.picks (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sport               TEXT NOT NULL,
  event_id            TEXT NOT NULL,
  home_team           TEXT NOT NULL,
  away_team           TEXT NOT NULL,
  pick_type           TEXT NOT NULL,
  pick_value          TEXT NOT NULL,
  odds                INTEGER NOT NULL,
  confidence          SMALLINT NOT NULL CHECK (confidence BETWEEN 1 AND 100),
  tier_required       TEXT NOT NULL DEFAULT 'free',
  model_primary       TEXT NOT NULL,
  model_secondary     TEXT,
  consensus_score     NUMERIC(4,2),
  reasoning           TEXT,
  prompt_hash         TEXT NOT NULL,
  event_start_at      TIMESTAMPTZ NOT NULL,
  lock_at             TIMESTAMPTZ NOT NULL,
  locked              BOOLEAN DEFAULT FALSE,
  result              TEXT DEFAULT 'pending',
  result_resolved_at  TIMESTAMPTZ,
  created_at          TIMESTAMPTZ DEFAULT NOW()
);

-- User pick activity
CREATE TABLE public.user_picks (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  pick_id    UUID REFERENCES public.picks(id),
  stake      NUMERIC(10,2),
  outcome    TEXT,
  notes      TEXT,
  logged_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Analytics snapshots
CREATE TABLE public.analytics_snapshots (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  snapshot_date DATE NOT NULL,
  total_picks   INTEGER DEFAULT 0,
  wins          INTEGER DEFAULT 0,
  losses        INTEGER DEFAULT 0,
  pushes        INTEGER DEFAULT 0,
  win_rate      NUMERIC(5,2),
  roi_percent   NUMERIC(6,2),
  streak        INTEGER DEFAULT 0,
  by_sport      JSONB DEFAULT '{}',
  updated_at    TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, snapshot_date)
);

-- Referrals
CREATE TABLE public.referrals (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_id   UUID REFERENCES public.profiles(id),
  referred_id   UUID REFERENCES public.profiles(id),
  referral_code TEXT UNIQUE NOT NULL,
  credited_at   TIMESTAMPTZ,
  credit_amount NUMERIC(8,2),
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- ─── Row Level Security ───────────────────────────────────────────────────────

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own profile read" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Own profile update" ON public.profiles FOR UPDATE USING (auth.uid() = id);

ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own subscription" ON public.subscriptions USING (auth.uid() = user_id);

ALTER TABLE public.picks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Picks tier access" ON public.picks FOR SELECT USING (
  tier_required = 'free' OR EXISTS (
    SELECT 1 FROM subscriptions s
    WHERE s.user_id = auth.uid() AND s.status = 'active'
    AND (
      (s.plan = 'pro' AND tier_required IN ('free','pro')) OR
      (s.plan = 'vip')
    )
  )
);

ALTER TABLE public.user_picks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own activity" ON public.user_picks USING (auth.uid() = user_id);
CREATE POLICY "Insert own activity" ON public.user_picks FOR INSERT WITH CHECK (auth.uid() = user_id);

ALTER TABLE public.analytics_snapshots ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own analytics" ON public.analytics_snapshots USING (auth.uid() = user_id);

-- ─── Trigger: auto-create profile on signup ───────────────────────────────────
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, NEW.email);
  INSERT INTO public.subscriptions (user_id, stripe_customer_id, plan, status)
  VALUES (NEW.id, 'pending_' || NEW.id, 'free', 'active');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ─── Lock picks 1 hour before game time ──────────────────────────────────────
CREATE OR REPLACE FUNCTION public.lock_expired_picks()
RETURNS void AS $$
BEGIN
  UPDATE public.picks SET locked = TRUE WHERE lock_at <= NOW() AND locked = FALSE;
END;
$$ LANGUAGE plpgsql;
