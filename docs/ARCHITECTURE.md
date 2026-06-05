# Architecture — Sports Betting AI SaaS Platform

---

## Tech Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | Next.js 15 (App Router) | Server Components reduce client JS; built-in API routes |
| **Language** | TypeScript (strict) | Type safety across full stack |
| **Styling** | Tailwind CSS + Radix UI | Rapid, accessible component development |
| **Database** | Supabase (PostgreSQL) | RLS for multi-tenant security; realtime subscriptions |
| **Auth** | Supabase Auth | SSO, magic links, JWT; integrates with RLS |
| **Billing** | Stripe | Industry-standard; webhooks + customer portal |
| **AI Primary** | Anthropic Claude 3.5 Sonnet | Best reasoning for sports analysis |
| **AI Secondary** | OpenAI GPT-4o | Cross-validation; consensus scoring |
| **Sports Data** | The Odds API + SportsData.io | Odds, schedules, live scores, results |
| **Job Queue** | Inngest | Reliable background jobs; retries; cron |
| **Caching** | Upstash Redis | Rate limiting; session caching; pick locks |
| **Notifications** | Telegram Bot API + Resend | Push delivery for VIP; email digests |
| **Monitoring** | Sentry + Vercel Analytics | Error tracking; performance |
| **Deployment** | Vercel | Edge network; preview deployments |

---

## System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      CLIENT                             │
│   Next.js App (Server Components + Client Islands)      │
└──────────────┬──────────────────────────────────────────┘
               │
┌──────────────▼──────────────────────────────────────────┐
│                   NEXT.JS SERVER                        │
│  ┌─────────────┐  ┌─────────────┐  ┌────────────────┐  │
│  │ Server      │  │ API Routes  │  │  Middleware     │  │
│  │ Actions     │  │ /api/*      │  │  (auth + tier) │  │
│  └──────┬──────┘  └──────┬──────┘  └────────────────┘  │
└─────────┼────────────────┼────────────────────────────-─┘
          │                │
          ▼                ▼
┌─────────────────┐  ┌──────────────────────────────────┐
│   Supabase      │  │         Inngest Job Queue         │
│  ┌───────────┐  │  │  ┌────────────┐  ┌────────────┐  │
│  │ PostgreSQL│  │  │  │ Daily Pick │  │ Outcome    │  │
│  │ + RLS     │  │  │  │ Generator  │  │ Resolver   │  │
│  ├───────────┤  │  │  └─────┬──────┘  └────────────┘  │
│  │ Auth      │  │  └────────┼─────────────────────────-┘
│  ├───────────┤  │           │
│  │ Storage   │  │  ┌────────▼───────────────────────┐
│  └───────────┘  │  │      AI Orchestration Layer    │
└─────────────────┘  │  ┌──────────┐  ┌────────────┐  │
                     │  │ Claude   │  │ GPT-4o     │  │
┌─────────────────┐  │  │ Primary  │  │ Secondary  │  │
│     Stripe      │  │  └──────────┘  └────────────┘  │
│  Subscriptions  │  │  ┌────────────────────────────┐ │
│  Webhooks       │  │  │   Consensus Engine         │ │
│  Customer Portal│  │  └────────────────────────────┘ │
└─────────────────┘  └───────────────────────────────--┘
                                    │
                     ┌──────────────▼──────────────────┐
                     │       Sports Data APIs          │
                     │  The Odds API | SportsData.io   │
                     └─────────────────────────────────┘
```

---

## Database Schema

### Core Tables

```sql
-- Users (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id            UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email         TEXT NOT NULL,
  full_name     TEXT,
  avatar_url    TEXT,
  sport_prefs   TEXT[]        DEFAULT '{}',   -- ['NFL', 'NBA', 'MLB']
  risk_tolerance TEXT         DEFAULT 'medium', -- low | medium | high
  telegram_id   BIGINT,
  created_at    TIMESTAMPTZ   DEFAULT NOW(),
  updated_at    TIMESTAMPTZ   DEFAULT NOW()
);

-- Subscriptions
CREATE TABLE public.subscriptions (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  stripe_customer_id  TEXT UNIQUE NOT NULL,
  stripe_sub_id       TEXT UNIQUE,
  plan                TEXT NOT NULL DEFAULT 'free', -- free | pro | vip
  status              TEXT NOT NULL DEFAULT 'active', -- active | canceled | past_due | trialing
  current_period_end  TIMESTAMPTZ,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  created_at          TIMESTAMPTZ DEFAULT NOW(),
  updated_at          TIMESTAMPTZ DEFAULT NOW()
);

-- Picks (AI-generated, immutable after lock_time)
CREATE TABLE public.picks (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sport           TEXT NOT NULL,              -- NFL | NBA | MLB | NHL | NCAAF | NCAAB | Soccer
  event_id        TEXT NOT NULL,              -- External event identifier
  home_team       TEXT NOT NULL,
  away_team       TEXT NOT NULL,
  pick_type       TEXT NOT NULL,              -- spread | moneyline | total | prop
  pick_value      TEXT NOT NULL,              -- e.g. "Chiefs -3.5" or "Over 47.5"
  odds            INTEGER NOT NULL,           -- American odds e.g. -110
  confidence      SMALLINT NOT NULL CHECK (confidence BETWEEN 1 AND 100),
  tier_required   TEXT NOT NULL DEFAULT 'free', -- free | pro | vip
  
  -- AI Metadata
  model_primary   TEXT NOT NULL,              -- claude-3-5-sonnet-20241022
  model_secondary TEXT,                       -- gpt-4o
  consensus_score NUMERIC(4,2),              -- Agreement 0-1
  reasoning       TEXT,                       -- VIP-only reasoning chain
  prompt_hash     TEXT NOT NULL,              -- SHA256 of prompt used
  
  -- State
  event_start_at  TIMESTAMPTZ NOT NULL,
  lock_at         TIMESTAMPTZ NOT NULL,       -- Usually 1hr before event_start_at
  locked          BOOLEAN DEFAULT FALSE,
  result          TEXT,                       -- win | loss | push | void | pending
  result_resolved_at TIMESTAMPTZ,
  
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- User Pick Activity (logging)
CREATE TABLE public.user_picks (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  pick_id     UUID REFERENCES public.picks(id),
  stake       NUMERIC(10,2),                  -- Optional: amount staked
  outcome     TEXT,                           -- win | loss | push | void | skipped
  notes       TEXT,
  logged_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Analytics Snapshots (pre-computed)
CREATE TABLE public.analytics_snapshots (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  snapshot_date   DATE NOT NULL,
  total_picks     INTEGER DEFAULT 0,
  wins            INTEGER DEFAULT 0,
  losses          INTEGER DEFAULT 0,
  pushes          INTEGER DEFAULT 0,
  win_rate        NUMERIC(5,2),
  roi_percent     NUMERIC(6,2),
  streak          INTEGER DEFAULT 0,
  by_sport        JSONB DEFAULT '{}',
  updated_at      TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, snapshot_date)
);

-- Referrals
CREATE TABLE public.referrals (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  referrer_id     UUID REFERENCES public.profiles(id),
  referred_id     UUID REFERENCES public.profiles(id),
  referral_code   TEXT UNIQUE NOT NULL,
  credited_at     TIMESTAMPTZ,
  credit_amount   NUMERIC(8,2),
  created_at      TIMESTAMPTZ DEFAULT NOW()
);
```

### Row Level Security Policies

```sql
-- profiles: users can only read/update their own
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own profile" ON public.profiles
  USING (auth.uid() = id);

-- picks: visible based on tier
ALTER TABLE public.picks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Free picks visible to all" ON public.picks
  FOR SELECT USING (tier_required = 'free' OR EXISTS (
    SELECT 1 FROM subscriptions s
    WHERE s.user_id = auth.uid()
    AND s.status = 'active'
    AND (
      (s.plan = 'pro' AND tier_required IN ('free', 'pro')) OR
      (s.plan = 'vip')
    )
  ));

-- user_picks: own records only
ALTER TABLE public.user_picks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own activity" ON public.user_picks
  USING (auth.uid() = user_id);
```

---

## AI Integration Strategy

### Pick Generation Pipeline

```
Sports Data API
      │
      ▼
┌─────────────────────────────────────┐
│  Context Builder                    │
│  - Recent team form (last 10 games) │
│  - Head-to-head record              │
│  - Injury reports                   │
│  - Current odds + line movement     │
│  - Weather (outdoor sports)         │
│  - Home/away splits                 │
└──────────────────┬──────────────────┘
                   │
       ┌───────────┴───────────┐
       ▼                       ▼
  Claude 3.5 Sonnet       GPT-4o
  (Primary Analysis)    (Cross-validation)
       │                       │
       ▼                       ▼
  Pick + Confidence       Pick + Confidence
  Score + Reasoning       Score + Reasoning
       │                       │
       └───────────┬───────────┘
                   ▼
          Consensus Engine
          ┌─────────────────────────────┐
          │ If both agree:              │
          │   confidence = avg * 1.1    │
          │ If they disagree:           │
          │   confidence = avg * 0.75   │
          │   flag for human review     │
          └─────────────────────────────┘
                   │
                   ▼
            Stored in DB
            (immutable after lock_at)
```

### Prompt Architecture

```typescript
// src/lib/ai/prompts.ts
export const SPORT_SYSTEM_PROMPTS = {
  NFL: `You are an expert NFL analyst with 20 years of experience...`,
  NBA: `You are an expert NBA analyst specializing in...`,
  // etc.
};

// Each pick generation includes:
// 1. Sport-specific system prompt
// 2. Current date/time context
// 3. Event data (teams, odds, stats)
// 4. Structured output format (JSON)
// 5. Confidence calibration instructions
```

### Confidence Score Calibration

- **80–100**: Strong consensus, both models agree, high data quality
- **65–79**: Good confidence, minor model divergence
- **50–64**: Moderate, shown to Pro+ users with caveats
- **Below 50**: Not published (internal threshold)

---

## Authentication & Authorization

```
User Request
     │
     ▼
Next.js Middleware
┌────────────────────────────────┐
│ 1. Check Supabase session JWT  │
│ 2. If expired → redirect login │
│ 3. Check subscription tier     │
│ 4. Set x-user-tier header      │
└───────────────┬────────────────┘
                │
     ┌──────────▼──────────┐
     │  Route Protection   │
     │  /picks → pro+      │
     │  /analytics → free+ │
     │  /admin → admin role│
     └─────────────────────┘
```

---

## Billing & Subscription Logic

### Stripe Integration Flow

```
User clicks "Upgrade"
        │
        ▼
Server Action: createCheckoutSession()
        │
        ▼
Stripe Checkout (hosted)
        │
     Success
        │
        ▼
Stripe Webhook → /api/webhooks/stripe
  checkout.session.completed
        │
        ▼
Update subscriptions table
        │
        ▼
User sees Pro/VIP features
```

### Webhook Events Handled

| Event | Action |
|-------|--------|
| `checkout.session.completed` | Activate subscription |
| `customer.subscription.updated` | Update plan/status |
| `customer.subscription.deleted` | Downgrade to free |
| `invoice.payment_failed` | Set status to past_due |
| `invoice.payment_succeeded` | Reset period_end |

### Idempotency

All webhook handlers check for existing records before writing. Use `stripe_sub_id` as idempotency key.

---

## Security Considerations

1. **Pick Immutability**: Once `locked = TRUE`, no updates allowed via RLS policy
2. **API Rate Limiting**: Upstash Redis sliding window on all AI endpoints
3. **Input Validation**: Zod schemas on all API route inputs
4. **SQL Injection**: Supabase client uses parameterized queries; no raw SQL in user paths
5. **Secrets**: All API keys in environment variables; never in client bundles
6. **CSRF**: Next.js Server Actions have built-in CSRF protection
7. **Content Security Policy**: Strict CSP headers in next.config
8. **Responsible Gambling**: Age gate at registration; disclaimers on every pick

---

## Common Pitfalls & How We Avoid Them

| Pitfall | Mitigation |
|---------|-----------|
| Context drift in AI | Pin prompt versions; hash stored with each pick |
| Retroactive pick editing | RLS + `locked` field; audit log |
| Billing race conditions | Idempotent webhook handlers; Stripe event dedup |
| Model rate limits | Queue-based generation; fallback routing |
| Cold start latency | Pre-generate daily picks via cron (not on-demand) |
| Trust erosion | Public track record page; confidence calibration chart |
