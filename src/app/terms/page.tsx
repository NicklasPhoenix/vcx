import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Terms of Service</h1>
          <p className="mt-4 text-lg text-slate-600">Last updated: March 2026</p>
          
          <div className="mt-12 space-y-8 text-slate-600">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Acceptance of Terms</h2>
              <p>By accessing VibeCode X-Ray (&quot;VCX&quot;), you agree to these Terms of Service. If you disagree, please do not use our service.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Service Description</h2>
              <p>VCX provides AI-powered codebase analysis including security vulnerability detection, performance insights, and code quality recommendations.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">3. User Responsibilities</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>You own all code you submit for analysis</li>
                <li>You are responsible for ensuring you have the right to analyze submitted code</li>
                <li>You will not use the service for malicious purposes</li>
                <li>You will maintain the security of your account credentials</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Payment Terms</h2>
              <p>Subscriptions are billed monthly or annually in advance. You may cancel at any time. Refunds are provided at our discretion.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Limitation of Liability</h2>
              <p>VCX is provided &quot;as is&quot;. We are not liable for any damages arising from use of the service. Our analysis is for informational purposes and should not be considered professional security advice.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Contact</h2>
              <p>For questions: <span className="text-blue-600">legal@vcx.dev</span></p>
            </section>
          </div>
          
          <div className="mt-12">
            <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
