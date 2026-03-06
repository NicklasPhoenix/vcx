import Stripe from 'stripe'

// Lazy-initialize Stripe to avoid build-time errors when env vars are missing
let stripeInstance: Stripe | null = null

export function getStripeClient(): Stripe {
  if (!stripeInstance) {
    const secretKey = process.env.STRIPE_SECRET_KEY
    if (!secretKey) {
      throw new Error('STRIPE_SECRET_KEY environment variable is not set')
    }
    stripeInstance = new Stripe(secretKey, {
      apiVersion: '2025-02-24.acacia',
    })
  }
  return stripeInstance
}

// For backward compatibility - lazy Stripe access
export const stripe = {
  get customers() { return getStripeClient().customers },
  get checkout() { return getStripeClient().checkout },
  get billingPortal() { return getStripeClient().billingPortal },
  get subscriptions() { return getStripeClient().subscriptions },
  get webhooks() { return getStripeClient().webhooks },
}

// Stripe price IDs (set these in your Vercel environment)
export const STRIPE_PLANS = {
  free: {
    name: 'Free',
    priceId: process.env.STRIPE_FREE_PRICE_ID || 'price_free',
    features: ['5 audits/month', 'Basic reports', 'Email support'],
  },
  pro: {
    name: 'Pro',
    priceId: process.env.STRIPE_PRO_PRICE_ID || 'price_pro',
    features: ['100 audits/month', 'Advanced reports', 'Priority support', 'API access'],
  },
  enterprise: {
    name: 'Enterprise',
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID || 'price_enterprise',
    features: ['Unlimited audits', 'Custom reports', 'Dedicated support', 'API access', 'SSO'],
  },
} as const

export type PlanName = keyof typeof STRIPE_PLANS

export async function createStripeCustomer(email: string, name?: string) {
  return getStripeClient().customers.create({
    email,
    name,
    metadata: {
      source: 'vcx',
    },
  })
}

export async function createCheckoutSession(
  customerId: string,
  priceId: string,
  successUrl: string,
  cancelUrl: string
) {
  return getStripeClient().checkout.sessions.create({
    customer: customerId,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
  })
}

export async function createBillingPortalSession(customerId: string, returnUrl: string) {
  return getStripeClient().billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  })
}

export async function getSubscription(subscriptionId: string) {
  return getStripeClient().subscriptions.retrieve(subscriptionId)
}
