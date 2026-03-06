import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-muted/50">
      <nav className="bg-background shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <Link href="/dashboard" className="flex items-center font-bold text-xl">
                VCX
              </Link>
              <div className="ml-6 flex space-x-4 items-center">
                <Link
                  href="/dashboard"
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Dashboard
                </Link>
                <Link
                  href="/settings/billing"
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                >
                  Billing
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {session.user?.email}
              </span>
              <form
                action={async () => {
                  'use server'
                  const { signOut } = await import('@/auth')
                  await signOut({ redirectTo: '/' })
                }}
              >
                <Button variant="outline" size="sm">
                  Sign out
                </Button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  )
}
