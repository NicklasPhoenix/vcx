import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">VibeCode X-Ray</h1>
        <p className="text-xl mb-8 text-center">
          AI-powered codebase audit tool. Analyze your code for security vulnerabilities, performance issues, and best practices.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
