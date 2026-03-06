import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default async function DashboardPage() {
  const session = await auth()
  
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Audits This Month</CardTitle>
            <CardDescription>of 5 included in Free plan</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">0</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>Upgrade for more audits</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">Free</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>API Calls</CardTitle>
            <CardDescription>Not available on Free plan</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">0</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Button>New Audit</Button>
          <Button variant="outline">View Reports</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Audits</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            No audits yet. Start by analyzing your first codebase.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
