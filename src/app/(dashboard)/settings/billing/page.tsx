import Link from 'next/link'
import { auth } from '@/auth'
import { getUserById } from '@/lib/db'
import { STRIPE_PLANS } from '@/lib/stripe'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

export default async function BillingPage() {
  const session = await auth()
  if (!session?.user?.id) {
    return null
  }

  const user = await getUserById(session.user.id)
  const hasSubscription = !!user?.stripe_subscription_id

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">Billing</h1>
        <p className="mt-1 text-zinc-600">Manage your subscription and billing details.</p>
      </div>
      
      {hasSubscription ? (
        <Card className="border-zinc-200">
          <CardHeader>
            <CardTitle>Active Subscription</CardTitle>
            <CardDescription>
              You have an active subscription. Manage your billing details, update payment method, or cancel.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              action={async () => {
                'use server'
                const { redirect } = await import('next/navigation')
                const response = await fetch(
                  `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/subscription`,
                  {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'portal' }),
                    cache: 'no-store',
                  }
                )
                const { url } = await response.json()
                redirect(url)
              }}
            >
              <Button className="bg-zinc-900 hover:bg-zinc-800">Manage Billing</Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card className="border-zinc-200 bg-zinc-50">
            <CardContent className="pt-6">
              <p className="text-sm text-zinc-600">
                You're currently on the Free plan.{' '}
                <Link href="/pricing" className="font-medium text-blue-600 hover:text-blue-500">
                  Upgrade to get more audits and premium features.
                </Link>
              </p>
            </CardContent>
          </Card>
          
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(STRIPE_PLANS).map(([key, plan]) => (
              <Card
                key={key}
                className={`border-zinc-200 ${key === 'pro' ? 'border-zinc-900 ring-1 ring-zinc-900' : ''}`}
              >
                <CardHeader>
                  <CardTitle className="capitalize">{plan.name}</CardTitle>
                  <CardDescription>
                    {key === 'enterprise' ? 'Custom pricing' : key === 'free' ? '$0/mo' : '$29/mo'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {key !== 'free' && (
                    <Button 
                      asChild 
                      className="w-full mt-6"
                      variant={key === 'pro' ? 'default' : 'outline'}
                    >
                      <Link href="/pricing">
                        {key === 'pro' ? 'Upgrade to Pro' : 'Contact Sales'}
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
