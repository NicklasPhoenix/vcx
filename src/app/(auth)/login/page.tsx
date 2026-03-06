import Link from 'next/link'
import { auth, signIn } from '@/auth'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Github, Google } from 'lucide-react'

export default async function LoginPage() {
  const session = await auth()
  if (session) {
    redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-zinc-900">
            VibeCode X-Ray
          </Link>
        </div>
      </header>

      {/* Login Form */}
      <main className="flex flex-1 items-center justify-center bg-zinc-50 py-12">
        <div className="w-full max-w-md space-y-8 px-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-zinc-900">Sign in to your account</h1>
            <p className="mt-2 text-sm text-zinc-600">
              Or{' '}
              <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                create a new account
              </Link>
            </p>
          </div>

          <div className="space-y-4">
            <form
              action={async () => {
                'use server'
                await signIn('google', { redirectTo: '/dashboard' })
              }}
            >
              <Button variant="outline" className="w-full">
                <Google className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>
            </form>

            <form
              action={async () => {
                'use server'
                await signIn('github', { redirectTo: '/dashboard' })
              }}
            >
              <Button variant="outline" className="w-full">
                <Github className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Button>
            </form>
          </div>

          <div className="relative">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-zinc-50 px-2 text-sm text-zinc-500">Or continue with email</span>
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
              <Label htmlFor="email">Email address</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full bg-zinc-900 hover:bg-zinc-800">
              Send magic link
            </Button>
          </form>

          <p className="text-center text-xs text-zinc-500">
            By continuing, you agree to our{' '}
            <Link href="/terms" className="underline hover:text-zinc-700">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="underline hover:text-zinc-700">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  )
}
