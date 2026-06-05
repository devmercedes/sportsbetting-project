# Sports Betting AI SaaS — Project Roadmap

> Phased delivery plan for a production-ready AI-powered sports betting picks platform.

---

## Phase 0 — Foundation (Weeks 1–2)

**Goal:** Runnable skeleton with auth, billing, and database schema in place.

### Milestones
- [ ] Next.js 15 project bootstrapped with TypeScript + Tailwind
- [ ] Supabase project created; all migrations applied
- [ ] Supabase Auth configured (email/password + magic link)
- [ ] Row Level Security (RLS) policies on all tables
- [ ] Stripe products created: Free / Pro ($29/mo) / VIP ($79/mo)
- [ ] Stripe webhook endpoint live (`/api/webhooks/stripe`)
- [ ] Subscription entitlement logic (middleware + server-side checks)
- [ ] Basic layout: shell, nav, sidebar, protected routes
- [ ] CI/CD pipeline (GitHub Actions → Vercel)
- [ ] Environment variable management documented

### Key Deliverables
| Item | Owner | Effort |
|------|-------|--------|
| DB schema + migrations | Backend | 3d |
| Auth flows (login/register/reset) | Frontend | 2d |
| Stripe integration + webhooks | Backend | 2d |
| Protected route middleware | Backend | 1d |
| Layout shell + nav | Frontend | 2d |

### Dependencies
- Supabase project provisioned
- Stripe account with products configured
- Vercel project linked to repo

---

## Phase 1 — Core MVP (Weeks 3–5)

**Goal:** Users can view daily AI-generated picks with confidence scores.

### Milestones
- [ ] AI orchestration layer (Claude primary, OpenAI fallback)
- [ ] Daily picks generation pipeline (cron job via Supabase Edge Functions)
- [ ] Multi-model consensus scoring algorithm
- [ ] Confidence score display (0–100 with visual indicator)
- [ ] Picks listing page with filtering (sport, date, confidence tier)
- [ ] Individual pick detail page
- [ ] Free tier: 1 pick/day preview; Pro: full access; VIP: early access + reasoning
- [ ] Basic activity logging (user marks pick outcome)
- [ ] Telegram bot delivery for VIP subscribers

### Key Deliverables
| Item | Owner | Effort |
|------|-------|--------|
| AI orchestration service | Backend | 4d |
| Picks generation cron | Backend | 2d |
| Consensus scoring logic | Backend | 2d |
| Picks UI (list + detail) | Frontend | 3d |
| Activity logging UI | Frontend | 2d |
| Telegram bot integration | Backend | 2d |

### AI Orchestration Notes
- Primary: Claude 3.5 Sonnet (reasoning + analysis)
- Secondary: GPT-4o (cross-validation)
- Consensus: weighted average with disagreement penalty
- Context window: sport-specific system prompts + recent form data
- Fallback: graceful degradation if one model unavailable

### Dependencies
- Phase 0 complete
- Anthropic + OpenAI API keys
- Sports data API subscription (e.g., The Odds API, SportsData.io)

---

## Phase 2 — Analytics & Trust Layer (Weeks 6–7)

**Goal:** Users trust the platform because performance data is transparent and verifiable.

### Milestones
- [ ] Automated outcome resolution (cron checks results vs. logged picks)
- [ ] Performance analytics dashboard (win rate, ROI, streak, record by sport)
- [ ] Historical pick archive with filter/search
- [ ] Confidence calibration display (predicted vs. actual win rate per tier)
- [ ] Public track record page (shareable, no auth required)
- [ ] Pick reasoning transparency (VIP tier shows model reasoning chain)
- [ ] Export data as CSV (user-owned data principle)
- [ ] Admin panel: override pick outcomes, audit logs

### Key Deliverables
| Item | Owner | Effort |
|------|-------|--------|
| Outcome resolution cron | Backend | 2d |
| Analytics aggregation queries | Backend | 2d |
| Performance dashboard UI | Frontend | 3d |
| Public track record page | Frontend | 2d |
| Data export endpoint | Backend | 1d |
| Admin panel | Backend + Frontend | 3d |

### Trust & Transparency Notes
- Never retroactively alter picks after event start
- Lock picks 1 hour before game time (immutable)
- Store model version + prompt hash with each pick
- Display confidence calibration chart (trust signal)

### Dependencies
- Phase 1 complete
- Sports results data feed configured

---

## Phase 3 — Monetization & Growth (Weeks 8–9)

**Goal:** Subscription tiers enforced, referral program live, conversion optimized.

### Milestones
- [ ] Usage limits enforced per tier (daily pick quotas, feature gates)
- [ ] Upgrade/downgrade flows with proration
- [ ] Referral program (unique links, credit system)
- [ ] Onboarding flow (4-step wizard: sport preferences, risk tolerance, notifications)
- [ ] Email notifications (pick alerts, weekly performance digest)
- [ ] Landing page with social proof + track record teaser
- [ ] Affiliate dashboard (for VIP referrers)
- [ ] Cancellation flow with retention offer

### Key Deliverables
| Item | Owner | Effort |
|------|-------|--------|
| Tier enforcement middleware | Backend | 2d |
| Referral system | Backend + Frontend | 3d |
| Onboarding wizard | Frontend | 2d |
| Email integration (Resend/SendGrid) | Backend | 2d |
| Landing page | Frontend | 3d |

### Dependencies
- Phase 2 complete
- Email provider account (Resend recommended)

---

## Phase 4 — Scale & Operations (Weeks 10+, Ongoing)

**Goal:** Platform is observable, resilient, and can handle 10k+ users.

### Milestones
- [ ] Multi-model router (dynamic model selection based on sport/confidence)
- [ ] Prompt versioning and A/B testing framework
- [ ] Pick accuracy evals pipeline (automated weekly)
- [ ] Rate limiting on all API routes (Upstash Redis)
- [ ] Error monitoring (Sentry)
- [ ] Performance monitoring (Vercel Analytics + custom metrics)
- [ ] Database connection pooling (PgBouncer via Supabase)
- [ ] Background job queue (Inngest or Trigger.dev)
- [ ] Multi-sport expansion framework
- [ ] Mobile app (React Native / Expo) — optional

### Key Deliverables
| Item | Owner | Effort |
|------|-------|--------|
| Multi-model router | Backend | 3d |
| Eval pipeline | Backend | 3d |
| Rate limiting | Backend | 2d |
| Monitoring setup | DevOps | 2d |
| Job queue integration | Backend | 2d |

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Sports data API outage | Medium | High | Cache last-known data; fallback API |
| AI model rate limits | Medium | High | Multi-model routing; request queuing |
| Stripe webhook failures | Low | High | Idempotent handlers; retry queue |
| Context drift in AI picks | Medium | Medium | Pinned prompt versions; regular evals |
| Regulatory compliance (gambling laws) | High | Critical | Legal review; geo-blocking; disclaimers |

---

## Legal & Compliance Checklist
- [ ] Terms of Service (entertainment/informational use only)
- [ ] Responsible gambling disclaimers on every pick
- [ ] Age verification (18+) on registration
- [ ] Geo-blocking for restricted jurisdictions
- [ ] Data privacy policy (GDPR/CCPA compliant)
- [ ] No guaranteed returns claims in marketing
