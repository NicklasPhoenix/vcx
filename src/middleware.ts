import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  // Protected routes
  if (nextUrl.pathname.startsWith('/dashboard') || nextUrl.pathname.startsWith('/settings')) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', nextUrl))
    }
  }

  // Redirect logged-in users away from auth pages
  if (isLoggedIn && (nextUrl.pathname === '/login' || nextUrl.pathname === '/signup')) {
    return NextResponse.redirect(new URL('/dashboard', nextUrl))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
