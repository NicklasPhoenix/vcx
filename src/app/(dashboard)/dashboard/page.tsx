import Link from 'next/link'
import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ArrowRight, FileCode, Shield, Zap } from 'lucide-react'

export default async function DashboardPage() {
  const session = await auth()
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">Dashboard</h1>
          <p className="mt-1 text-zinc-600">
            Welcome back{session?.user?.name ? `, ${session.user.name}` : ''}
          </p>
        </div>
        <Button asChild className="bg-zinc-900 hover:bg-zinc-800">
          <Link href="/dashboard/new">
            New Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-zinc-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-zinc-600">Audits This Month</CardTitle>
              <CardDescription className="mt-1 text-xs text-zinc-500">of 5 included in Free plan</CardDescription>
            </div>
            <FileCode className="h-5 w-5 text-zinc-400" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-zinc-900">0</p>
          </CardContent>
        </Card>
        
        <Card className="border-zinc-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-zinc-600">Current Plan</CardTitle>
              <CardDescription className="mt-1 text-xs text-zinc-500">Upgrade for more audits</CardDescription>
            </div>
            <Shield className="h-5 w-5 text-zinc-400" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-zinc-900">Free</p>
          </CardContent>
        </Card>
        
        <Card className="border-zinc-200">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-zinc-600">Issues Found</CardTitle>
              <CardDescription className="mt-1 text-xs text-zinc-500">Across all audits</CardDescription>
            </div>
            <Zap className="h-5 w-5 text-zinc-400" />
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-zinc-900">0</p>
          </CardContent>
        </Card>
      </div>

      {/* Empty State */}
      <Card className="border-zinc-200">
        <CardHeader>
          <CardTitle>Get started</CardTitle>
          <CardDescription>Run your first codebase audit to see results here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white">
              <FileCode className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-zinc-900">Analyze your first codebase</h3>
              <p className="text-sm text-zinc-600">
                Connect a GitHub repository or upload code to get started.
              </p>
            </div>
            <Button asChild className="bg-zinc-900 hover:bg-zinc-800">
              <Link href="/dashboard/new">Start Audit</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Audits */}
      <Card className="border-zinc-200">
        <CardHeader>
          <CardTitle>Recent Audits</CardTitle>
          <CardDescription>Your completed and in-progress audits will appear here.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-12 text-center">
            <div>
              <FileCode className="mx-auto h-12 w-12 text-zinc-300" />
              <p className="mt-4 text-sm text-zinc-500">No audits yet</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
