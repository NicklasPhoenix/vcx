# VCX Setup Instructions — Complete Checklist

**Goal:** Make VCX testable (working login + real Stripe billing)

---

## 1. Google OAuth (Required for Google Sign-In)

**Where:** https://console.cloud.google.com/apis/credentials

**Steps:**
1. Create new project (or select existing)
2. Go to **APIs & Services** → **Credentials**
3. Click **Create Credentials** → **OAuth client ID**
4. Application type: **Web application**
5. Name: `VCX Production`
6. **Authorized redirect URIs:**
   - `https://vcx.dev/api/auth/callback/google` (production)
   - `https://vcx-c74qu8zzc-nicklasphoenixs-projects.vercel.app/api/auth/callback/google` (preview)
   - `http://localhost:3000/api/auth/callback/google` (local dev)
7. Click **Create**

**Copy these values:**
- **Client ID** → looks like `123456789-abc123def456.apps.googleusercontent.com`
- **Client Secret** → looks like `GOCSPX-abc123def456`

---

## 2. GitHub OAuth (Required for GitHub Sign-In)

**Where:** https://github.com/settings/developers

**Steps:**
1. Go to **Settings** → **Developer settings** → **OAuth Apps**
2. Click **New OAuth App**
3. **Application name:** `VCX`
4. **Homepage URL:** `https://vcx.dev`
5. **Authorization callback URL:** `https://vcx.dev/api/auth/callback/github`
6. Click **Register application**

**Copy these values:**
- **Client ID** → looks like `Iv1.abc123def456`
- Click **Generate a new client secret** → copy the secret (looks like `abc123def456...`)

---

## 3. Resend (Required for Magic Link / Email Sign-In)

**Where:** https://resend.com/api-keys

**Steps:**
1. Sign in to Resend
2. Go to **API Keys**
3. Click **Create API Key**
4. Name: `VCX Production`
5. Copy the key

**Copy this value:**
- **API Key** → looks like `re_abc123def456...`

**Also configure domain (optional but recommended):**
1. Go to **Domains** → **Add Domain**
2. Domain: `vcx.dev`
3. Add DNS records as shown (TXT + CNAME)
4. Update `from` address in `/src/auth.ts` to use your verified domain

---

## 4. Stripe (Required for Billing)

**Where:** https://dashboard.stripe.com/test/apikeys (test mode) or live mode when ready

### 4a. API Keys

**Steps:**
1. Go to **Developers** → **API keys**
2. Copy **Publishable key** and **Secret key**

**Copy these values:**
- **Publishable Key** → `pk_test_...` or `pk_live_...`
- **Secret Key** → `sk_test_...` or `sk_live_...`

### 4b. Products + Prices

**Steps:**
1. Go to **Products** → **Add product**
2. Create three products:

| Product Name | Price ID Variable | Price | Interval |
|--------------|-------------------|-------|----------|
| Free | `STRIPE_FREE_PRICE_ID` | $0 | monthly |
| Pro | `STRIPE_PRO_PRICE_ID` | $19 | monthly |
| Enterprise | `STRIPE_ENTERPRISE_PRICE_ID` | $99 | monthly |

3. For each product:
   - Click **Add price**
   - Set recurring monthly
   - Copy the **Price ID** (looks like `price_abc123`)

**Copy these values:**
- **Free Price ID** → `price_...`
- **Pro Price ID** → `price_...`
- **Enterprise Price ID** → `price_...`

### 4c. Webhook Secret

**Steps:**
1. Go to **Developers** → **Webhooks** → **Add endpoint**
2. **Endpoint URL:** `https://vcx.dev/api/stripe/webhook`
3. **Events to listen:**
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
4. Click **Add endpoint**
5. Click the endpoint → **Reveal secret**

**Copy this value:**
- **Webhook Secret** → `whsec_...`

---

## 5. Inngest (Required for Background Jobs)

**Where:** https://app.inngest.com

**Steps:**
1. Sign in to Inngest
2. Go to **Settings** → **API Keys**
3. Copy **Event Key** and **Signing Key**

**Copy these values:**
- **Event Key** → looks like `abc123...`
- **Signing Key** → looks like `sk_abc123...`

---

## 6. Neon (Database) — Already Configured

Database is already set up. No action needed unless you want to change it.

**Current:** `DATABASE_URL` is already in Vercel

---

## Summary: What to Provide

After completing the steps above, provide these **12 values**:

| Variable | Value From | Example Format |
|----------|------------|----------------|
| `AUTH_GOOGLE_ID` | Google OAuth | `123456789-abc...apps.googleusercontent.com` |
| `AUTH_GOOGLE_SECRET` | Google OAuth | `GOCSPX-abc123...` |
| `AUTH_GITHUB_ID` | GitHub OAuth | `Iv1.abc123...` |
| `AUTH_GITHUB_SECRET` | GitHub OAuth | `abc123def456...` |
| `AUTH_RESEND_KEY` | Resend | `re_abc123...` |
| `STRIPE_PUBLISHABLE_KEY` | Stripe API Keys | `pk_test_...` |
| `STRIPE_SECRET_KEY` | Stripe API Keys | `sk_test_...` |
| `STRIPE_FREE_PRICE_ID` | Stripe Product | `price_abc123` |
| `STRIPE_PRO_PRICE_ID` | Stripe Product | `price_def456` |
| `STRIPE_ENTERPRISE_PRICE_ID` | Stripe Product | `price_ghi789` |
| `STRIPE_WEBHOOK_SECRET` | Stripe Webhook | `whsec_...` |
| `INNGEST_EVENT_KEY` | Inngest | `abc123...` |
| `INNGEST_SIGNING_KEY` | Inngest | `sk_abc123...` |

---

## How to Provide

**Option A: Paste here** — I'll update Vercel env vars directly

**Option B: Update Vercel yourself**
```bash
cd /root/projects/vcx
vercel env add AUTH_GOOGLE_ID <value> --scope nicklasphoenixs-projects
# ... repeat for each variable
```

---

## After Credentials Are Set

I will:
1. Build landing page (hero, features, pricing)
2. Test login flow
3. Test Stripe checkout
4. Verify everything works end-to-end
