import { auth } from '@/auth'
import { getUserById } from '@/lib/db'
import { STRIPE_PLANS } from '@/lib/stripe'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default async function BillingPage() {
  const session = await auth()
  if (!session?.user?.id) {
    return null
  }

  const user = await getUserById(session.user.id)
  const hasSubscription = !!user?.stripe_subscription_id

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Billing</h1>
      
      {hasSubscription ? (
        <Card>
          <CardHeader>
            <CardTitle>Manage Subscription</CardTitle>
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
              <Button>Manage Billing</Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          <Card className="border-primary bg-primary/5">
            <CardContent className="pt-6">
              <p className="text-sm text-primary">
                You're currently on the Free plan. Upgrade to get more audits and premium features.
              </p>
            </CardContent>
          </Card>
          
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(STRIPE_PLANS).map(([key, plan]) => (
              <Card
                key={key}
                className={key === 'pro' ? 'border-primary ring-2 ring-primary' : ''}
              >
                <CardHeader>
                  <CardTitle className="capitalize">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {key === 'enterprise' ? 'Custom' : key === 'free' ? '$0' : '$29'}
                    {key !== 'enterprise' && key !== 'free' && <span className="text-sm font-normal">/mo</span>}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <svg className="mr-2 h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {key !== 'free' && (
                    <form
                      action={async () => {
                        'use server'
                        const { redirect } = await import('next/navigation')
                        const response = await fetch(
                          `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/subscription`,
                          {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ action: 'checkout', plan: key }),
                            cache: 'no-store',
                          }
                        )
                        const { url } = await response.json()
                        redirect(url)
                      }}
                    >
                      <Button 
                        className="mt-6 w-full" 
                        variant={key === 'pro' ? 'default' : 'outline'}
                      >
                        {key === 'enterprise' ? 'Contact Sales' : 'Subscribe'}
                      </Button>
                    </form>
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
