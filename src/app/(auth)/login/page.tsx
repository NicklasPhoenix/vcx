import { auth, signIn } from '@/auth'
import { redirect } from 'next/navigation'

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
          <p className="mt-2 text-gray-600">VibeCode X-Ray</p>
        </div>

        <form
          action={async () => {
            'use server'
            await signIn('google', { redirectTo: '/dashboard' })
          }}
        >
          <button
            type="submit"
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Continue with Google
          </button>
        </form>

        <form
          action={async () => {
            'use server'
            await signIn('github', { redirectTo: '/dashboard' })
          }}
        >
          <button
            type="submit"
            className="w-full rounded-md border border-gray-300 bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-gray-800"
          >
            Continue with GitHub
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or continue with email</span>
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
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm"
            required
          />
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700"
          >
            Send magic link
          </button>
        </form>
      </div>
    </div>
  )
}
