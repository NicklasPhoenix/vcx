import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">VibeCode X-Ray</h1>
        <p className="text-xl mb-8 text-center">
          AI-powered codebase audit tool. Analyze your code for security vulnerabilities, performance issues, and best practices.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="rounded-md border border-gray-300 px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </main>
  )
}
