# Project Structure

```
sports-betting-saas/
├── .github/
│   └── workflows/
│       └── ci.yml                    # GitHub Actions CI/CD
├── docs/
│   ├── ARCHITECTURE.md               # Full technical architecture
│   ├── ROADMAP.md                    # 4-phase delivery roadmap
│   ├── WIREFRAMES.md                 # Screen wireframes
│   └── PROJECT_STRUCTURE.md          # This file
├── src/
│   ├── app/                          # Next.js 15 App Router
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Root redirect to /dashboard
│   │   ├── auth/
│   │   │   ├── login/page.tsx        # Login page
│   │   │   └── register/page.tsx     # Registration page
│   │   ├── dashboard/
│   │   │   ├── layout.tsx            # Dashboard shell
│   │   │   └── page.tsx              # Dashboard home
│   │   ├── picks/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx              # Daily picks listing
│   │   ├── scanner/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx              # Bet Slip Scanner
│   │   ├── analytics/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx              # Performance analytics
│   │   ├── my-bets/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx              # Bet history
│   │   ├── roi-tracker/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx              # ROI tracker
│   │   ├── statistics/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx              # Statistics
│   │   ├── bet-builder/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx              # AI Bet Builder hub
│   │   ├── telegram/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx              # Telegram alerts
│   │   ├── settings/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx              # Settings
│   │   └── api/
│   │       ├── picks/
│   │       │   ├── route.ts          # GET picks
│   │       │   └── generate/route.ts # POST generate pick
│   │       ├── stripe/
│   │       │   └── checkout/route.ts # Create checkout session
│   │       └── webhooks/
│   │           └── stripe/route.ts   # Stripe webhook handler
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx           # Main sidebar nav
│   │   │   └── Topbar.tsx            # Top navigation bar
│   │   ├── dashboard/
│   │   │   ├── StatCard.tsx          # KPI metric card
│   │   │   ├── PerformanceChart.tsx  # Win rate area chart
│   │   │   └── SportBreakdown.tsx    # Sport-level win rates
│   │   ├── picks/
│   │   │   ├── PickCard.tsx          # Individual pick display
│   │   │   └── ConfidenceBar.tsx     # Visual confidence indicator
│   │   └── scanner/
│   │       ├── BetSlipScanner.tsx    # Upload zone
│   │       ├── BetSlipResult.tsx     # Scan results panel
│   │       ├── BetAlternatives.tsx   # Better alternatives panel
│   │       ├── AIDailyBuilder.tsx    # Builder tier cards
│   │       └── RecentHistory.tsx     # Recent generated bets
│   ├── lib/
│   │   ├── ai/
│   │   │   └── orchestrator.ts       # Multi-model AI engine
│   │   ├── stripe/
│   │   │   └── index.ts              # Stripe utilities
│   │   ├── supabase/
│   │   │   ├── client.ts             # Browser Supabase client
│   │   │   └── server.ts             # Server Supabase client
│   │   └── utils/
│   │       └── index.ts              # Shared utilities
│   ├── hooks/
│   │   ├── useUser.ts                # Auth state hook
│   │   └── useSubscription.ts        # Subscription data hook
│   ├── types/
│   │   └── index.ts                  # TypeScript types
│   ├── middleware.ts                  # Auth + tier enforcement
│   └── styles/
│       └── globals.css               # Global styles
├── supabase/
│   └── migrations/
│       └── 001_initial_schema.sql    # Full DB schema + RLS
├── stripe/
│   └── setup-products.sh             # One-time Stripe setup script
├── .env.example                      # Environment variable template
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```
