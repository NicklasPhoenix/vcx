import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'For individual developers getting started',
    features: [
      '5 audits per month',
      'Security vulnerability analysis',
      'Performance insights',
      'Code quality checks',
      'Email support',
    ],
    cta: 'Get Started',
    ctaLink: '/signup',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For professional developers and small teams',
    features: [
      '50 audits per month',
      'Everything in Free',
      'CI/CD integration',
      'Custom audit rules',
      'Priority email support',
      'API access',
    ],
    cta: 'Start Free Trial',
    ctaLink: '/signup?plan=pro',
    highlight: true,
  },
  {
    name: 'Team',
    price: '$99',
    period: '/month',
    description: 'For engineering teams and organizations',
    features: [
      'Unlimited audits',
      'Everything in Pro',
      'Team collaboration',
      'Role-based access',
      'Audit history & trends',
      'Dedicated support',
      'SSO integration',
    ],
    cta: 'Contact Sales',
    ctaLink: '/signup?plan=team',
    highlight: false,
  },
]

const faqs = [
  {
    question: 'What counts as an audit?',
    answer: 'An audit is a complete analysis of a single codebase or repository. Each audit includes security, performance, and quality checks across all files.',
  },
  {
    question: 'Can I switch plans anytime?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we prorate billing accordingly.',
  },
  {
    question: 'What languages are supported?',
    answer: 'We support all major programming languages including JavaScript, TypeScript, Python, Go, Rust, Java, C#, and more.',
  },
  {
    question: 'Is my code stored securely?',
    answer: 'Your code is analyzed in isolated environments and never stored permanently. We use enterprise-grade encryption and follow SOC 2 compliance standards.',
  },
  {
    question: 'How does CI/CD integration work?',
    answer: 'Pro and Team plans include our CLI tool and GitHub Actions integration. Run audits automatically on every PR or push.',
  },
  {
    question: 'What happens when I exceed my audit limit?',
    answer: 'We notify you when you approach your limit. On Free, you can wait for the next month or upgrade. On paid plans, additional audits are billed at a small overage rate.',
  },
]

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero */}
      <section className="bg-zinc-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
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
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-zinc-900">
                    {plan.price}
                    <span className="text-lg font-normal text-zinc-500">{plan.period}</span>
                  </p>
                  <ul className="mt-8 space-y-4 text-sm text-zinc-600">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    className="w-full"
                    variant={plan.highlight ? 'default' : 'outline'}
                  >
                    <Link href={plan.ctaLink}>{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 text-center">
            Frequently asked questions
          </h2>
          <div className="mt-12 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-zinc-200 pb-6">
                <h3 className="text-lg font-semibold text-zinc-900">{faq.question}</h3>
                <p className="mt-3 text-zinc-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            Start your free audit today. No credit card required.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200">
              <Link href="/signup">Start free audit</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-zinc-400 hover:text-white">
              <Link href="/contact">Contact sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
