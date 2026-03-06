import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
          <p className="mt-4 text-lg text-slate-600">Last updated: March 2026</p>
          
          <div className="mt-12 space-y-8 text-slate-600">
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Introduction</h2>
              <p>VibeCode X-Ray (&quot;VCX&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI-powered codebase audit service.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Information We Collect</h2>
              <p className="mb-2"><strong>Account Information:</strong> Email, name (optional), OAuth provider data (GitHub, Google).</p>
              <p className="mb-2"><strong>Code Analysis Data:</strong> Your code is analyzed in isolated environments. We do NOT permanently store your source code.</p>
              <p><strong>Usage Data:</strong> Pages visited, browser info, IP address (country level).</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Provide and improve our code analysis services</li>
                <li>Process payments and manage subscriptions</li>
                <li>Send important service updates</li>
                <li>Respond to support requests</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Data Security</h2>
              <p>We implement encryption, access controls, and security audits. Code analysis runs in isolated environments destroyed after processing.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Contact</h2>
              <p>For privacy questions: <span className="text-blue-600">privacy@vcx.dev</span></p>
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
