import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Get started with VCX</h1>
          <p className="mt-2 text-muted-foreground">VibeCode X-Ray - AI-powered codebase audits</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Choose your plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded border border-border">
              <div>
                <p className="font-medium">Free</p>
                <p className="text-sm text-muted-foreground">5 audits/month</p>
              </div>
              <span className="text-lg font-bold">$0</span>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded border border-primary bg-primary/5">
              <div>
                <p className="font-medium">Pro</p>
                <p className="text-sm text-muted-foreground">100 audits/month + API access</p>
              </div>
              <span className="text-lg font-bold">$29/mo</span>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded border border-border">
              <div>
                <p className="font-medium">Enterprise</p>
                <p className="text-sm text-muted-foreground">Unlimited + SSO</p>
              </div>
              <span className="text-lg font-bold">Custom</span>
            </div>
          </CardContent>
        </Card>

        <Button asChild className="w-full">
          <Link href="/login">Create account</Link>
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
