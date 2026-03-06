import Link from 'next/link'

const endpoints = [
  { method: 'POST', path: '/api/audit', description: 'Submit a codebase for analysis', auth: 'Required' },
  { method: 'GET', path: '/api/audit/{id}', description: 'Get audit results by ID', auth: 'Required' },
  { method: 'GET', path: '/api/subscription', description: 'Get current subscription status', auth: 'Required' },
]

export default function DocsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Documentation</h1>
          <p className="mt-4 text-lg text-slate-600">Get started with the VibeCode X-Ray API.</p>
          
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">Quick Start</h2>
              
              <div className="space-y-6">
                <section className="p-6 border border-slate-200 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">1. Get Your API Key</h3>
                  <p className="text-slate-600 text-sm">Navigate to Settings → API Keys in your dashboard.</p>
                </section>
                
                <section className="p-6 border border-slate-200 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">2. Submit an Audit</h3>
                  <div className="mt-3 bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-sm text-green-400">curl -X POST https://api.vcx.dev/audit -H &quot;Authorization: Bearer YOUR_API_KEY&quot;</code>
                  </div>
                </section>
              </div>
              
              <h2 className="text-2xl font-semibold text-slate-900 mt-12 mb-6">API Endpoints</h2>
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-4 font-medium text-slate-900">Method</th>
                      <th className="text-left p-4 font-medium text-slate-900">Endpoint</th>
                      <th className="text-left p-4 font-medium text-slate-900">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {endpoints.map((ep) => (
                      <tr key={ep.path}>
                        <td className="p-4"><span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700">{ep.method}</span></td>
                        <td className="p-4 font-mono text-slate-900">{ep.path}</td>
                        <td className="p-4 text-slate-600">{ep.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <aside className="space-y-6">
              <div className="p-6 bg-slate-900 rounded-lg text-white">
                <h3 className="font-semibold mb-2">CLI Tool</h3>
                <code className="block bg-slate-800 rounded p-3 text-sm text-green-400">npm install -g @vcx/cli</code>
              </div>
            </aside>
          </div>
          
          <div className="mt-12">
            <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
