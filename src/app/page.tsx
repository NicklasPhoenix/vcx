import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const features = [
  {
    title: 'Security Analysis',
    description: 'Detect vulnerabilities, insecure dependencies, and potential attack vectors before they become problems.',
    icon: '🔒',
  },
  {
    title: 'Performance Insights',
    description: 'Identify bottlenecks, memory leaks, and optimization opportunities in your codebase.',
    icon: '⚡',
  },
  {
    title: 'Code Quality',
    description: 'Enforce best practices, detect code smells, and maintain consistent standards across your team.',
    icon: '✨',
  },
  {
    title: 'Architecture Review',
    description: 'Get AI-powered recommendations for better structure, modularity, and scalability.',
    icon: '🏗️',
  },
  {
    title: 'Dependency Audit',
    description: 'Track outdated packages, license compliance, and security advisories across your stack.',
    icon: '📦',
  },
  {
    title: 'CI/CD Integration',
    description: 'Automate audits in your pipeline. Catch issues before they reach production.',
    icon: '🔄',
  },
]

const benefits = [
  {
    stat: '10x',
    label: 'Faster code reviews',
  },
  {
    stat: '85%',
    label: 'Bug reduction',
  },
  {
    stat: '2h',
    label: 'Saved per audit',
  },
  {
    stat: '100%',
    label: 'Automated',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              AI-Powered Codebase Audits
              <span className="block text-blue-400">in Minutes, Not Days</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              VibeCode X-Ray analyzes your entire codebase for security vulnerabilities, 
              performance issues, and best practices. Get actionable insights powered by AI.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500">
                <Link href="/signup">Start Free Audit</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-700">
                <Link href="#features">See How It Works</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              No credit card required • 5 free audits/month
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-slate-100 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="text-center">
                <p className="text-4xl font-bold text-blue-600">{benefit.stat}</p>
                <p className="mt-1 text-sm text-slate-600">{benefit.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need to Ship Better Code
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive analysis across security, performance, and quality dimensions.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="relative overflow-hidden">
                <CardHeader>
                  <div className="mb-2 text-3xl">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Three simple steps to a healthier codebase.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  1
                </div>
                <h3 className="mt-4 text-lg font-semibold">Connect Your Repo</h3>
                <p className="mt-2 text-slate-600">
                  Link your GitHub repository or upload a codebase. We support all major languages.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  2
                </div>
                <h3 className="mt-4 text-lg font-semibold">AI Analysis</h3>
                <p className="mt-2 text-slate-600">
                  Our AI scans your code for security, performance, and quality issues.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  3
                </div>
                <h3 className="mt-4 text-lg font-semibold">Get Actionable Report</h3>
                <p className="mt-2 text-slate-600">
                  Receive a detailed report with prioritized fixes and code suggestions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Start free, scale as you grow.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>For individual developers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$0<span className="text-lg font-normal text-slate-600">/mo</span></p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    <li>✓ 5 audits/month</li>
                    <li>✓ Security analysis</li>
                    <li>✓ Performance insights</li>
                    <li>✓ Email support</li>
                  </ul>
                  <Button asChild variant="outline" className="mt-6 w-full">
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-blue-600 ring-1 ring-blue-600">
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For professional developers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$29<span className="text-lg font-normal text-slate-600">/mo</span></p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    <li>✓ 50 audits/month</li>
                    <li>✓ All Free features</li>
                    <li>✓ CI/CD integration</li>
                    <li>✓ Priority support</li>
                  </ul>
                  <Button asChild className="mt-6 w-full">
                    <Link href="/signup">Start Free Trial</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Team</CardTitle>
                  <CardDescription>For engineering teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$99<span className="text-lg font-normal text-slate-600">/mo</span></p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    <li>✓ Unlimited audits</li>
                    <li>✓ All Pro features</li>
                    <li>✓ Team collaboration</li>
                    <li>✓ Dedicated support</li>
                  </ul>
                  <Button asChild variant="outline" className="mt-6 w-full">
                    <Link href="/signup">Contact Sales</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Ship Better Code?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Join developers who trust VibeCode X-Ray to keep their codebases healthy.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500">
              <Link href="/signup">Start Your Free Audit</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-700">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-600">
              © 2026 VibeCode X-Ray. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-600">
              <Link href="/privacy" className="hover:text-slate-900">Privacy</Link>
              <Link href="/terms" className="hover:text-slate-900">Terms</Link>
              <Link href="https://github.com/NicklasPhoenix/vcx" className="hover:text-slate-900">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
