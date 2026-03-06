import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Shield, Zap, Code, GitGraph, Package, CheckCircle2, ArrowRight, ChevronRight } from 'lucide-react'

const features = [
  {
    title: 'Security Analysis',
    description: 'Detect vulnerabilities, insecure dependencies, and potential attack vectors before they become problems.',
    icon: Shield,
  },
  {
    title: 'Performance Insights',
    description: 'Identify bottlenecks, memory leaks, and optimization opportunities in your codebase.',
    icon: Zap,
  },
  {
    title: 'Code Quality',
    description: 'Enforce best practices, detect code smells, and maintain consistent standards across your team.',
    icon: Code,
  },
  {
    title: 'Architecture Review',
    description: 'Get AI-powered recommendations for better structure, modularity, and scalability.',
    icon: GitGraph,
  },
  {
    title: 'Dependency Audit',
    description: 'Track outdated packages, license compliance, and security advisories across your stack.',
    icon: Package,
  },
  {
    title: 'CI/CD Integration',
    description: 'Automate audits in your pipeline. Catch issues before they reach production.',
    icon: CheckCircle2,
  },
]

const benefits = [
  { stat: '10x', label: 'Faster code reviews' },
  { stat: '85%', label: 'Bug reduction' },
  { stat: '2h', label: 'Saved per audit' },
  { stat: '100%', label: 'Automated' },
]

const steps = [
  {
    num: '01',
    title: 'Connect Your Repo',
    description: 'Link your GitHub repository or upload a codebase. We support all major languages and frameworks.',
  },
  {
    num: '02',
    title: 'AI Analysis',
    description: 'Our AI scans your code for security, performance, and quality issues across your entire codebase.',
  },
  {
    num: '03',
    title: 'Actionable Report',
    description: 'Receive a detailed report with prioritized fixes, code suggestions, and improvement tracking.',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-zinc-400 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Now in public beta
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Ship code with
              <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                complete confidence
              </span>
            </h1>
            <p className="mt-8 text-xl text-zinc-400 max-w-2xl mx-auto">
              AI-powered codebase audits that find security vulnerabilities, 
              performance issues, and architectural problems before they reach production.
            </p>
            <div className="mt-12 flex items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200">
                <Link href="/signup">
                  Start Free Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-zinc-400 hover:text-white hover:bg-zinc-900">
                <Link href="#how-it-works">
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              No credit card required · 5 free audits per month
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="border-b border-zinc-200 bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.label} className="text-center">
                <p className="text-5xl font-bold text-zinc-900 tracking-tight">{benefit.stat}</p>
                <p className="mt-3 text-sm font-medium text-zinc-600 uppercase tracking-wide">{benefit.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900">
              Comprehensive code analysis
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Six dimensions of analysis to ensure your codebase is secure, performant, and maintainable.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-zinc-200 hover:border-zinc-300 transition-colors">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-zinc-900 mb-3" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zinc-600 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900">
              How it works
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              From repository to report in three simple steps.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-12 md:grid-cols-3">
              {steps.map((step, i) => (
                <div key={step.num} className="relative">
                  {i < steps.length - 1 && (
                    <div className="absolute top-8 left-8 w-full h-px bg-zinc-200 hidden md:block" />
                  )}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-lg bg-zinc-900 text-2xl font-bold text-white">
                    {step.num}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-zinc-900">{step.title}</h3>
                  <p className="mt-3 text-zinc-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              Start free, upgrade when you need more.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-zinc-200">
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>For individual developers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-zinc-900">$0<span className="text-lg font-normal text-zinc-500">/mo</span></p>
                  <ul className="mt-8 space-y-4 text-sm text-zinc-600">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      5 audits per month
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      Security analysis
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      Performance insights
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      Email support
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="mt-8 w-full border-zinc-300">
                    <Link href="/signup">Get started</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-zinc-900 ring-1 ring-zinc-900 relative">
                <div className="absolute -top-3 left-6 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </div>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For professional developers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-zinc-900">$29<span className="text-lg font-normal text-zinc-500">/mo</span></p>
                  <ul className="mt-8 space-y-4 text-sm text-zinc-600">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      50 audits per month
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      All Free features
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      CI/CD integration
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      Priority support
                    </li>
                  </ul>
                  <Button asChild className="mt-8 w-full bg-zinc-900 hover:bg-zinc-800">
                    <Link href="/signup">Start free trial</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-zinc-200">
                <CardHeader>
                  <CardTitle>Team</CardTitle>
                  <CardDescription>For engineering teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-zinc-900">$99<span className="text-lg font-normal text-zinc-500">/mo</span></p>
                  <ul className="mt-8 space-y-4 text-sm text-zinc-600">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      Unlimited audits
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      All Pro features
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      Team collaboration
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      Dedicated support
                    </li>
                  </ul>
                  <Button asChild variant="outline" className="mt-8 w-full border-zinc-300">
                    <Link href="/signup">Contact sales</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-zinc-950 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to ship better code?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">
            Join developers who trust VibeCode X-Ray to keep their codebases healthy.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-zinc-950 hover:bg-zinc-200">
              <Link href="/signup">Start your free audit</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="text-zinc-400 hover:text-white">
              <Link href="/pricing">View all pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-zinc-500">
              © 2026 VibeCode X-Ray. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-zinc-500">
              <Link href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-zinc-900 transition-colors">Terms</Link>
              <Link href="https://github.com/NicklasPhoenix/vcx" className="hover:text-zinc-900 transition-colors">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
