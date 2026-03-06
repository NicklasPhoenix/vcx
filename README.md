# VibeCode X-Ray

AI-powered codebase audit tool. Analyze your code for security vulnerabilities, performance issues, and best practices.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Authentication:** NextAuth.js v5
- **Database:** Neon (serverless PostgreSQL)
- **Billing:** Stripe
- **Jobs:** Inngest
- **Styling:** Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (Neon recommended)
- Stripe account

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/NicklasPhoenix/vcx.git
   cd vcx
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

4. Set up the database:
   ```bash
   # Run the SQL migration in your Neon database
   psql $DATABASE_URL < prisma/migrations/001_initial.sql
   ```

5. Configure your `.env` file with:
   - `DATABASE_URL` - Neon PostgreSQL connection string
   - `AUTH_SECRET` - Random string for NextAuth
   - OAuth provider credentials (Google, GitHub)
   - Stripe API keys

6. Run the development server:
   ```bash
   npm run dev
   ```

## Features

- **Authentication:** Google, GitHub, and magic link (email)
- **Billing:** Subscription management with Stripe
- **Dashboard:** Audit overview and quick actions
- **Async Jobs:** Background processing with Inngest

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/NicklasPhoenix/vcx)

Make sure to set all environment variables in your Vercel project settings.

## License

MIT

## Project Status

This PR sets up the foundational infrastructure for VCX. The main branch contains the initial implementation.

### VCX-3 Implementation Status
- [x] NextAuth v5 with multiple providers
- [x] Stripe subscription billing
- [x] Neon database integration
- [x] Inngest job queue
- [ ] OAuth app configuration (requires secrets)
- [ ] Stripe product/price setup (requires Stripe dashboard)
- [ ] Production deployment
