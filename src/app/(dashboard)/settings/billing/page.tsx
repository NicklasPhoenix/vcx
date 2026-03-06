import { auth } from '@/auth'
import { getUserById } from '@/lib/db'
import { STRIPE_PLANS } from '@/lib/stripe'

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
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Manage Subscription</h2>
          <p className="mt-2 text-gray-500">
            You have an active subscription. Manage your billing details, update payment method, or cancel.
          </p>
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
            <button
              type="submit"
              className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Manage Billing
            </button>
          </form>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="rounded-lg border bg-blue-50 p-4">
            <p className="text-sm text-blue-700">
              You're currently on the Free plan. Upgrade to get more audits and premium features.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(STRIPE_PLANS).map(([key, plan]) => (
              <div
                key={key}
                className={`rounded-lg border bg-white p-6 shadow-sm ${
                  key === 'pro' ? 'border-blue-500 ring-2 ring-blue-500' : ''
                }`}
              >
                <h3 className="text-lg font-semibold capitalize">{plan.name}</h3>
                <p className="mt-2 text-3xl font-bold">
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
                    <button
                      type="submit"
                      className={`mt-6 w-full rounded-md px-4 py-2 text-sm font-medium ${
                        key === 'pro'
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {key === 'enterprise' ? 'Contact Sales' : 'Subscribe'}
                    </button>
                  </form>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
