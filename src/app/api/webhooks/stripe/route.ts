import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import type { StripeEvent } from 'stripe'
import { stripe, getSubscription } from '@/lib/stripe'
import { sql } from '@/lib/db'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  const body = await req.text()
  const signature = (await headers()).get('stripe-signature')!

  let event: StripeEvent

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        const customerId = session.customer as string
        const subscriptionId = session.subscription as string
        
        // Get subscription details
        const subscription = await getSubscription(subscriptionId)
        const priceId = subscription.items.data[0]?.price.id
        
        // Update user subscription in database
        await sql`
          UPDATE users 
          SET 
            stripe_customer_id = ${customerId},
            stripe_subscription_id = ${subscriptionId},
            stripe_price_id = ${priceId},
            stripe_current_period_end = ${new Date(subscription.current_period_end * 1000)}
          WHERE stripe_customer_id = ${customerId}
        `
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object
        const customerId = subscription.customer as string
        const priceId = subscription.items.data[0]?.price.id
        
        await sql`
          UPDATE users 
          SET 
            stripe_subscription_id = ${subscription.id},
            stripe_price_id = ${priceId},
            stripe_current_period_end = ${new Date(subscription.current_period_end * 1001)}
          WHERE stripe_customer_id = ${customerId}
        `
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        const customerId = subscription.customer as string
        
        await sql`
          UPDATE users 
          SET 
            stripe_subscription_id = NULL,
            stripe_price_id = NULL,
            stripe_current_period_end = NULL
          WHERE stripe_customer_id = ${customerId}
        `
        break
      }

      case 'invoice.paid': {
        // Invoice paid - subscription is active
        const invoice = event.data.object
        const customerId = invoice.customer as string
        
        console.log(`Invoice paid for customer ${customerId}`)
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object
        const customerId = invoice.customer as string
        
        console.error(`Payment failed for customer ${customerId}`)
        // Could send email notification here
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (err) {
    console.error('Error processing webhook:', err)
    return NextResponse.json({ error: 'Processing failed' }, { status: 500 })
  }
}
