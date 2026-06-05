# Sports Betting AI SaaS Platform

> AI-powered daily picks platform with multi-model consensus, confidence scoring, performance analytics, and tiered subscriptions.

⚠️ **For entertainment purposes only. Please bet responsibly. 18+.**

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local
# Fill in all values in .env.local

# 3. Start Supabase locally
npx supabase start

# 4. Run migrations
npx supabase db push

# 5. Set up Stripe products (one-time)
bash stripe/setup-products.sh

# 6. Start development server
npm run dev

# 7. In a separate terminal, forward Stripe webhooks
npm run stripe:listen
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 15, TypeScript, Tailwind CSS |
| Database | Supabase (PostgreSQL + RLS) |
| Auth | Supabase Auth |
| Billing | Stripe |
| AI Primary | Anthropic Claude 3.5 Sonnet |
| AI Secondary | OpenAI GPT-4o |
| Sports Data | The Odds API |
| Notifications | Telegram Bot API + Resend |
| Deployment | Vercel |

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── auth/             # Login, register pages
│   ├── dashboard/        # Main dashboard
│   ├── picks/            # Daily picks listing
│   ├── analytics/        # Performance analytics
│   ├── settings/         # Account & subscription
│   └── api/              # API routes
│       ├── webhooks/     # Stripe webhooks
│       └── picks/        # Pick generation
├── components/           # Reusable UI components
│   ├── ui/               # Base components
│   ├── dashboard/        # Dashboard-specific
│   ├── picks/            # Pick cards, logging
│   └── layout/           # Nav, shell
├── lib/                  # Business logic
│   ├── ai/               # AI orchestration
│   ├── stripe/           # Billing utilities
│   ├── supabase/         # DB clients
│   └── utils/            # Helpers
└── types/                # TypeScript definitions
```

## Documentation

- [Roadmap](docs/ROADMAP.md) — Phased delivery plan
- [Architecture](docs/ARCHITECTURE.md) — Technical design
- [Wireframes](docs/WIREFRAMES.md) — Screen layouts

## Legal

This platform provides AI-generated analysis for informational and entertainment purposes only. It does not guarantee outcomes or encourage gambling. Users are responsible for compliance with local laws regarding sports betting.
