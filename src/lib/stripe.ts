import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
})

export const STRIPE_PLANS = {
  free: {
    name: 'Free',
    priceId: process.env.STRIPE_FREE_PRICE_ID!,
    features: ['5 audits/month', 'Basic reports', 'Email support'],
  },
  pro: {
    name: 'Pro',
    priceId: process.env.STRIPE_PRO_PRICE_ID!,
    features: ['100 audits/month', 'Advanced reports', 'Priority support', 'API access'],
  },
  enterprise: {
    name: 'Enterprise',
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID!,
    features: ['Unlimited audits', 'Custom reports', 'Dedicated support', 'API access', 'SSO'],
  },
} as const

export type PlanName = keyof typeof STRIPE_PLANS

export async function createStripeCustomer(email: string, name?: string) {
  return stripe.customers.create({
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
  return stripe.checkout.sessions.create({
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
  return stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  })
}

export async function getSubscription(subscriptionId: string) {
  return stripe.subscriptions.retrieve(subscriptionId)
}
