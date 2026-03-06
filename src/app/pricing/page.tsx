import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'

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
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Start free and scale as you grow. No hidden fees, no surprises.
            Get everything you need to ship better code.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="-mt-12 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative flex flex-col ${plan.highlight ? 'border-blue-600 ring-2 ring-blue-600' : ''}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-slate-600">{plan.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <span className="text-blue-600 mt-0.5">✓</span>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    className={`w-full ${plan.highlight ? '' : 'variant="outline"'}`}
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

      {/* Feature Comparison */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-4 text-left font-semibold">Feature</th>
                  <th className="py-4 text-center font-semibold">Free</th>
                  <th className="py-4 text-center font-semibold">Pro</th>
                  <th className="py-4 text-center font-semibold">Team</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-4 text-slate-600">Audits per month</td>
                  <td className="py-4 text-center">5</td>
                  <td className="py-4 text-center">50</td>
                  <td className="py-4 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 text-slate-600">Security analysis</td>
                  <td className="py-4 text-center">✓</td>
                  <td className="py-4 text-center">✓</td>
                  <td className="py-4 text-center">✓</td>
                </tr>
                <tr>
                  <td className="py-4 text-slate-600">Performance insights</td>
                  <td className="py-4 text-center">✓</td>
                  <td className="py-4 text-center">✓</td>
                  <td className="py-4 text-center">✓</td>
                </tr>
                <tr>
                  <td className="py-4 text-slate-600">CI/CD integration</td>
                  <td className="py-4 text-center">—</td>
                  <td className="py-4 text-center">✓</td>
                  <td className="py-4 text-center">✓</td>
                </tr>
                <tr>
                  <td className="py-4 text-slate-600">API access</td>
                  <td className="py-4 text-center">—</td>
                  <td className="py-4 text-center">✓</td>
                  <td className="py-4 text-center">✓</td>
                </tr>
                <tr>
                  <td className="py-4 text-slate-600">Team collaboration</td>
                  <td className="py-4 text-center">—</td>
                  <td className="py-4 text-center">—</td>
                  <td className="py-4 text-center">✓</td>
                </tr>
                <tr>
                  <td className="py-4 text-slate-600">SSO integration</td>
                  <td className="py-4 text-center">—</td>
                  <td className="py-4 text-center">—</td>
                  <td className="py-4 text-center">✓</td>
                </tr>
                <tr>
                  <td className="py-4 text-slate-600">Support</td>
                  <td className="py-4 text-center text-sm">Email</td>
                  <td className="py-4 text-center text-sm">Priority</td>
                  <td className="py-4 text-center text-sm">Dedicated</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="mt-2 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Ship Better Code?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Start your free trial today. No credit card required.
          </p>
          <Button asChild size="lg" className="mt-8 bg-blue-600 hover:bg-blue-500">
            <Link href="/signup">Start Free Audit</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
