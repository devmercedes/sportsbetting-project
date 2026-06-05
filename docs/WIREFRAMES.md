# Wireframes — Sports Betting AI SaaS Platform

---

## 1. Landing Page

**Purpose:** Convert visitors to signups via social proof + track record transparency.

```
┌──────────────────────────────────────────────────────────────────────┐
│  LOGO                                    [Log In]  [Start Free →]   │
├──────────────────────────────────────────────────────────────────────┤
│                                                                      │
│         AI-POWERED SPORTS PICKS.                                     │
│         TRANSPARENT. VERIFIABLE. YOURS.                              │
│                                                                      │
│    [Track Record: 64.2% Win Rate | +$3,120 avg ROI | 847 picks]     │
│                                                                      │
│              [  Get Free Picks →  ]  [  View Track Record  ]        │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│  TODAY'S FEATURED PICKS (3 teasers, blurred for Pro)                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                  │
│  │ NFL         │  │ NBA         │  │ MLB         │                  │
│  │ Chiefs -3.5 │  │ ████████    │  │ ████████    │                  │
│  │ ▓▓▓░░ 78%  │  │ [Pro Only] │  │ [Pro Only] │                  │
│  └─────────────┘  └─────────────┘  └─────────────┘                  │
├──────────────────────────────────────────────────────────────────────┤
│  HOW IT WORKS                                                        │
│  [1. AI Analysis] → [2. Consensus Scoring] → [3. You Decide]        │
├──────────────────────────────────────────────────────────────────────┤
│  PRICING                                                             │
│  ┌──────────┐  ┌──────────────────┐  ┌──────────────────┐           │
│  │  FREE    │  │   PRO  $29/mo   │  │   VIP  $79/mo   │           │
│  │ 1 pick/d │  │  All picks      │  │  All picks      │           │
│  │ No logs  │  │  Analytics      │  │  Early access   │           │
│  │          │  │  CSV export     │  │  AI Reasoning   │           │
│  │[Sign Up] │  │  [Start Pro]    │  │  Telegram       │           │
│  └──────────┘  └──────────────────┘  │  [Start VIP]   │           │
│                                      └──────────────────┘           │
├──────────────────────────────────────────────────────────────────────┤
│  ⚠️  For entertainment purposes only. Please bet responsibly. 18+   │
└──────────────────────────────────────────────────────────────────────┘
```

**Key Components:**
- Live track record ticker (pulled from public analytics)
- Pick teaser cards with blur gate for Pro content
- Pricing table with feature comparison
- Responsible gambling footer (persistent)

---

## 2. Onboarding Flow (4 Steps)

### Step 1 — Welcome & Sport Preferences
```
┌────────────────────────────────────────────────┐
│  ● ○ ○ ○   Step 1 of 4                        │
│                                                │
│  Welcome! Which sports do you follow?          │
│                                                │
│  [✓ NFL]  [✓ NBA]  [ MLB]  [ NHL]             │
│  [✓ NCAAF] [ NCAAB] [ Soccer] [ MMA]          │
│                                                │
│              [ Continue → ]                   │
└────────────────────────────────────────────────┘
```

### Step 2 — Risk Tolerance
```
┌────────────────────────────────────────────────┐
│  ○ ● ○ ○   Step 2 of 4                        │
│                                                │
│  How would you describe your approach?         │
│                                                │
│  ○ Conservative  (65%+ confidence only)        │
│  ● Moderate      (55%+ confidence)             │
│  ○ Aggressive    (all picks including edges)   │
│                                                │
│  [ ← Back ]              [ Continue → ]       │
└────────────────────────────────────────────────┘
```

### Step 3 — Notifications
```
┌────────────────────────────────────────────────┐
│  ○ ○ ● ○   Step 3 of 4                        │
│                                                │
│  How should we reach you?                      │
│                                                │
│  [✓] Email alerts for new picks                │
│  [✓] Weekly performance digest                 │
│  [ ] Telegram (VIP only)  [Connect Telegram]   │
│                                                │
│  [ ← Back ]              [ Continue → ]       │
└────────────────────────────────────────────────┘
```

### Step 4 — Ready
```
┌────────────────────────────────────────────────┐
│  ○ ○ ○ ●   Step 4 of 4                        │
│                                                │
│  You're all set! 🎯                            │
│                                                │
│  Today's picks are live.                       │
│  Your confidence filter: Moderate (55%+)       │
│  Sports: NFL, NBA, NCAAF                       │
│                                                │
│        [ View Today's Picks → ]               │
└────────────────────────────────────────────────┘
```

---

## 3. Dashboard (Main View)

**Purpose:** At-a-glance performance + today's picks summary.

```
┌─────────┬────────────────────────────────────────────────────────────┐
│  LOGO   │  Dashboard    Picks    Analytics    Settings               │
│  [Plan] │                                                  [Avatar ▾]│
├─────────┼────────────────────────────────────────────────────────────┤
│         │                                                            │
│  NAV    │  Good morning, Alex.  Today is Tuesday, Oct 15            │
│         │                                                            │
│  📊     │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  Home   │  │ Win Rate │  │  ROI     │  │  Streak  │  │ Picks    │  │
│         │  │  62.4%   │  │ +18.3%   │  │  W5 🔥  │  │ 47 total │  │
│  🎯     │  │  ↑ 2.1%  │  │  ↑ 0.8% │  │          │  │ this mo. │  │
│  Picks  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
│         │                                                            │
│  📈     │  TODAY'S PICKS  ─────────────────────── [View All →]      │
│  Stats  │  ┌──────────────────────────────────────────────────────┐ │
│         │  │ 🏈 Chiefs -3.5 @ -110  ▓▓▓▓▓░░░ 78%  [Log Outcome]  │ │
│  ⚙️     │  │ 🏀 Lakers ML  @ +105  ▓▓▓▓░░░░ 65%  [Log Outcome]  │ │
│  Settings│  │ 🏈 Over 47.5 @ -115  ▓▓▓░░░░░ 58%  [Log Outcome]  │ │
│         │  └──────────────────────────────────────────────────────┘ │
│         │                                                            │
│         │  RECENT PERFORMANCE (30 days) ─────────────────────────   │
│         │  ┌──────────────────────────────────────────────────────┐ │
│         │  │  [Recharts LineChart: Win Rate over time]            │ │
│         │  └──────────────────────────────────────────────────────┘ │
│         │                                                            │
│         │  BY SPORT THIS MONTH                                       │
│         │  NFL ▓▓▓▓▓▓▓░ 68%   NBA ▓▓▓▓░░░░ 55%   MLB ▓▓▓░░░░░ 48%  │
└─────────┴────────────────────────────────────────────────────────────┘
```

---

## 4. Daily Picks Page

**Purpose:** Browse and filter all AI picks for today and upcoming games.

```
┌─────────┬────────────────────────────────────────────────────────────┐
│  NAV    │  Today's Picks                         [Export CSV]        │
│         │                                                            │
│         │  [All Sports ▾]  [All Types ▾]  [55%+ Confidence ▾]      │
│         │  ● Today   ○ Tomorrow   ○ This Week                       │
│         │                                                            │
│         │  ── NFL (3 picks) ─────────────────────────────────────── │
│         │                                                            │
│         │  ┌──────────────────────────────────────────────────────┐ │
│         │  │ 🏈  Chiefs vs Raiders  |  Sun 4:25 PM ET             │ │
│         │  │                                                      │ │
│         │  │ PICK: Kansas City Chiefs -3.5                        │ │
│         │  │ ODDS: -110                                           │ │
│         │  │                                                      │ │
│         │  │ CONFIDENCE   ▓▓▓▓▓▓▓░░░  78%   [HIGH]              │ │
│         │  │ CONSENSUS    Claude ✓  GPT-4o ✓  Both agree         │ │
│         │  │                                                      │ │
│         │  │ [View Reasoning - VIP]    [Log This Pick →]          │ │
│         │  └──────────────────────────────────────────────────────┘ │
│         │                                                            │
│         │  ┌──────────────────────────────────────────────────────┐ │
│         │  │ 🏈  Cowboys vs Giants  |  Sun 1:00 PM ET  🔒 LOCKED  │ │
│         │  │ PICK: Over 42.5  ODDS: -108  CONFIDENCE: 63%         │ │
│         │  │ Result: ████████████ (resolves after game)            │ │
│         │  └──────────────────────────────────────────────────────┘ │
│         │                                                            │
│         │  ── NBA (2 picks) ─────────────────────────────────────── │
│         │  [... more picks ...]                                      │
└─────────┴────────────────────────────────────────────────────────────┘
```

**Confidence Indicator:**
- `▓▓▓▓▓▓▓░░░` 78% — Green badge "HIGH"
- `▓▓▓▓▓░░░░░` 62% — Yellow badge "MODERATE"
- `▓▓▓░░░░░░░` 52% — Orange badge "LOW" (Aggressive tier only)

---

## 5. Activity Logging Screen

**Purpose:** User marks which picks they took and the outcome.

```
┌─────────┬────────────────────────────────────────────────────────────┐
│  NAV    │  Log Activity                                              │
│         │                                                            │
│         │  ← Chiefs -3.5 @ -110  |  NFL  |  Sun Oct 13 4:25 PM     │
│         │  ─────────────────────────────────────────────────────    │
│         │                                                            │
│         │  Did you take this pick?                                   │
│         │  ( ) Yes, I bet this   (●) Yes  ( ) No, I skipped         │
│         │                                                            │
│         │  Stake (optional)                                          │
│         │  ┌──────────────────────┐                                  │
│         │  │ $ 100                │                                  │
│         │  └──────────────────────┘                                  │
│         │                                                            │
│         │  Outcome                          ← only if game finished │
│         │  [ WIN ] [ LOSS ] [ PUSH ] [ VOID ]                       │
│         │                                                            │
│         │  Notes (optional)                                          │
│         │  ┌──────────────────────────────────┐                      │
│         │  │ Got good line at -108 on FanDuel │                      │
│         │  └──────────────────────────────────┘                      │
│         │                                                            │
│         │         [ Cancel ]    [ Save Log Entry → ]                │
└─────────┴────────────────────────────────────────────────────────────┘
```

---

## 6. Performance / Analytics View

**Purpose:** Full historical performance with drill-down by sport, date range, confidence tier.

```
┌─────────┬────────────────────────────────────────────────────────────┐
│  NAV    │  Performance Analytics              [Export CSV]           │
│         │                                                            │
│         │  [Last 30 Days ▾]  [All Sports ▾]  [All Confidence ▾]    │
│         │                                                            │
│         │  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────────┐   │
│         │  │ 62.4%│  │+18.3%│  │  W5  │  │  47  │  │ $+1,830  │   │
│         │  │ W/L  │  │ ROI  │  │Streak│  │Picks │  │  P&L     │   │
│         │  └──────┘  └──────┘  └──────┘  └──────┘  └──────────┘   │
│         │                                                            │
│         │  WIN RATE OVER TIME ─────────────────────────────────     │
│         │  ┌──────────────────────────────────────────────────────┐ │
│         │  │  [Recharts AreaChart: Win% + moving average line]    │ │
│         │  └──────────────────────────────────────────────────────┘ │
│         │                                                            │
│         │  PERFORMANCE BY SPORT ─────────────────────────────────   │
│         │  ┌─────────┬──────┬──────┬──────┬──────┬───────────────┐ │
│         │  │ Sport   │ Wins │ Loss │ Push │  W%  │ ROI           │ │
│         │  ├─────────┼──────┼──────┼──────┼──────┼───────────────┤ │
│         │  │ NFL     │  18  │  9   │  1   │ 66%  │ +24.1%        │ │
│         │  │ NBA     │  11  │  9   │  0   │ 55%  │  +9.8%        │ │
│         │  │ MLB     │   5  │  4   │  0   │ 56%  │ +11.2%        │ │
│         │  └─────────┴──────┴──────┴──────┴──────┴───────────────┘ │
│         │                                                            │
│         │  CONFIDENCE CALIBRATION ───────────────────────────────   │
│         │  ┌──────────────────────────────────────────────────────┐ │
│         │  │  [BarChart: Predicted% vs Actual Win% per tier]      │ │
│         │  │  Shows how well-calibrated our AI picks are          │ │
│         │  └──────────────────────────────────────────────────────┘ │
└─────────┴────────────────────────────────────────────────────────────┘
```

---

## 7. Settings & Subscription Management

```
┌─────────┬────────────────────────────────────────────────────────────┐
│  NAV    │  Settings                                                  │
│         │                                                            │
│         │  ── Account ───────────────────────────────────────────── │
│         │  Name:   Alex Johnson        [Edit]                        │
│         │  Email:  alex@email.com      [Edit]                        │
│         │  Password:  ••••••••         [Change]                      │
│         │                                                            │
│         │  ── Subscription ──────────────────────────────────────── │
│         │  Current Plan:  PRO  $29/mo                                │
│         │  Renewal:  November 15, 2024                               │
│         │  [Manage Billing →]  (opens Stripe Customer Portal)        │
│         │  [Upgrade to VIP]    [Cancel Plan]                         │
│         │                                                            │
│         │  ── Preferences ───────────────────────────────────────── │
│         │  Sports:   NFL ✓  NBA ✓  MLB □  NHL □   [Edit]            │
│         │  Min Confidence:  55%  [────●────────] 80%                │
│         │  Risk Tolerance:  ○ Conservative  ● Moderate  ○ Aggressive │
│         │                                                            │
│         │  ── Notifications ─────────────────────────────────────── │
│         │  Email - New picks:          [ON  ●──]                    │
│         │  Email - Weekly digest:      [ON  ●──]                    │
│         │  Telegram (VIP only):        [OFF ──○]  [Connect]         │
│         │                                                            │
│         │  ── Data & Privacy ────────────────────────────────────── │
│         │  [Download My Data]  [Delete Account]                      │
└─────────┴────────────────────────────────────────────────────────────┘
```

---

## Component Library Reference

| Component | Location | Purpose |
|-----------|----------|---------|
| `PickCard` | `components/picks/PickCard.tsx` | Single pick display with confidence |
| `ConfidenceBar` | `components/picks/ConfidenceBar.tsx` | Visual 0–100 bar with color coding |
| `StatCard` | `components/dashboard/StatCard.tsx` | Single metric display tile |
| `PerformanceChart` | `components/dashboard/PerformanceChart.tsx` | Recharts wrapper |
| `TierBadge` | `components/ui/TierBadge.tsx` | FREE / PRO / VIP badge |
| `SportIcon` | `components/ui/SportIcon.tsx` | NFL/NBA/MLB icon map |
| `LogModal` | `components/picks/LogModal.tsx` | Activity logging dialog |
| `UpgradeGate` | `components/ui/UpgradeGate.tsx` | Blur + upgrade CTA overlay |
| `DisclaimerBanner` | `components/layout/DisclaimerBanner.tsx` | Responsible gambling notice |
