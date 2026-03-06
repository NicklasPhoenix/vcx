import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    audits: '5 audits',
    features: ['Security analysis', 'Performance insights', 'Email support'],
    cta: 'Get started',
    ctaLink: '/login?plan=free',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    audits: '50 audits',
    features: ['Everything in Free', 'CI/CD integration', 'Priority support', 'API access'],
    cta: 'Start free trial',
    ctaLink: '/login?plan=pro',
    highlight: true,
  },
  {
    name: 'Team',
    price: '$99',
    period: '/month',
    audits: 'Unlimited',
    features: ['Everything in Pro', 'Team collaboration', 'SSO integration', 'Dedicated support'],
    cta: 'Contact sales',
    ctaLink: '/login?plan=team',
    highlight: false,
  },
]

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-zinc-900">
            VibeCode X-Ray
          </Link>
          <p className="text-sm text-zinc-600">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-zinc-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Choose your plan</h1>
          <p className="mt-4 text-lg text-zinc-400">
            Start free, upgrade when you need more.
          </p>
        </div>
      </section>

      {/* Plans */}
      <main className="flex-1 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative ${
                  plan.highlight 
                    ? 'border-zinc-900 ring-1 ring-zinc-900' 
                    : 'border-zinc-200'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-6 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
                    Most popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-zinc-900">{plan.price}</span>
                    <span className="text-lg text-zinc-500">{plan.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm font-medium text-zinc-900">{plan.audits} per month</div>
                  <ul className="space-y-3 text-sm text-zinc-600">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className="w-full"
                    variant={plan.highlight ? 'default' : 'outline'}
                  >
                    <Link href={plan.ctaLink}>{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <p className="text-sm text-zinc-500">Trusted by developers at</p>
            <div className="mt-6 flex items-center justify-center gap-8 text-zinc-400">
              <span className="text-lg font-semibold">Vercel</span>
              <span className="text-lg font-semibold">GitHub</span>
              <span className="text-lg font-semibold">Stripe</span>
              <span className="text-lg font-semibold">Linear</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-zinc-500">
          <p>No credit card required · 5 free audits per month · Cancel anytime</p>
        </div>
      </footer>
    </div>
  )
}
