import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import { stripe, STRIPE_PLANS, createCheckoutSession, createBillingPortalSession } from '@/lib/stripe'
import { getUserById } from '@/lib/db'

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const user = await getUserById(session.user.id)
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  const { plan, action } = await req.json()
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

  try {
    // Ensure customer exists
    let customerId = user.stripe_customer_id
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: session.user.email!,
        name: session.user.name || undefined,
        metadata: { userId: session.user.id },
      })
      customerId = customer.id
    }

    if (action === 'checkout' && plan) {
      const priceId = STRIPE_PLANS[plan as keyof typeof STRIPE_PLANS]?.priceId
      if (!priceId) {
        return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
      }

      const checkoutSession = await createCheckoutSession(
        customerId,
        priceId,
        `${appUrl}/settings/billing?success=true`,
        `${appUrl}/settings/billing?canceled=true`
      )

      return NextResponse.json({ url: checkoutSession.url })
    }

    if (action === 'portal') {
      const portalSession = await createBillingPortalSession(
        customerId,
        `${appUrl}/settings/billing`
      )

      return NextResponse.json({ url: portalSession.url })
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const user = await getUserById(session.user.id)
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json({
    subscription: user.stripe_subscription_id,
    priceId: user.stripe_price_id,
    currentPeriodEnd: user.stripe_current_period_end,
  })
}
