import Link from 'next/link'

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Get started with VCX</h1>
          <p className="mt-2 text-gray-600">VibeCode X-Ray - AI-powered codebase audits</p>
        </div>

        <div className="rounded-lg border border-gray-200 p-6 space-y-4">
          <h2 className="text-lg font-semibold">Choose your plan</h2>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded border border-gray-200">
              <div>
                <p className="font-medium">Free</p>
                <p className="text-sm text-gray-500">5 audits/month</p>
              </div>
              <span className="text-lg font-bold">$0</span>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded border border-blue-500 bg-blue-50">
              <div>
                <p className="font-medium">Pro</p>
                <p className="text-sm text-gray-500">100 audits/month + API access</p>
              </div>
              <span className="text-lg font-bold">$29/mo</span>
            </div>
            
            <div className="flex items-center justify-between p-3 rounded border border-gray-200">
              <div>
                <p className="font-medium">Enterprise</p>
                <p className="text-sm text-gray-500">Unlimited + SSO</p>
              </div>
              <span className="text-lg font-bold">Custom</span>
            </div>
          </div>
        </div>

        <Link
          href="/login"
          className="block w-full rounded-md bg-blue-600 px-4 py-3 text-center text-sm font-medium text-white hover:bg-blue-700"
        >
          Create account
        </Link>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
