import { auth } from '@/auth'

export default async function DashboardPage() {
  const session = await auth()
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Audits This Month</h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">0</p>
          <p className="mt-1 text-sm text-gray-500">of 5 included in Free plan</p>
        </div>
        
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Current Plan</h3>
          <p className="mt-2 text-3xl font-bold">Free</p>
          <p className="mt-1 text-sm text-gray-500">Upgrade for more audits</p>
        </div>
        
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">API Calls</h3>
          <p className="mt-2 text-3xl font-bold">0</p>
          <p className="mt-1 text-sm text-gray-500">Not available on Free plan</p>
        </div>
      </div>
      
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <div className="mt-4 flex gap-4">
          <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            New Audit
          </button>
          <button className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50">
            View Reports
          </button>
        </div>
      </div>
      
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">Recent Audits</h2>
        <p className="mt-4 text-gray-500">
          No audits yet. Start by analyzing your first codebase.
        </p>
      </div>
    </div>
  )
}
