import { auth, signIn } from '@/auth'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default async function LoginPage() {
  const session = await auth()
  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign in to VCX</h1>
          <p className="mt-2 text-muted-foreground">VibeCode X-Ray</p>
        </div>

        <form
          action={async () => {
            'use server'
            await signIn('google', { redirectTo: '/dashboard' })
          }}
        >
          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>
        </form>

        <form
          action={async () => {
            'use server'
            await signIn('github', { redirectTo: '/dashboard' })
          }}
        >
          <Button className="w-full bg-gray-900 hover:bg-gray-800">
            Continue with GitHub
          </Button>
        </form>

        <div className="relative">
          <Separator />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-background px-2 text-sm text-muted-foreground">Or continue with email</span>
          </div>
        </div>

        <form
          action={async (formData: FormData) => {
            'use server'
            await signIn('resend', { 
              email: formData.get('email'),
              redirectTo: '/dashboard' 
            })
          }}
          className="space-y-4"
        >
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send magic link
          </Button>
        </form>
      </div>
    </div>
  )
}
