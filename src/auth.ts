import NextAuth from 'next-auth'
import { NeonAdapter } from '@auth/neon-adapter'
import Google from 'next-auth/providers/google'
import GitHub from 'next-auth/providers/github'
import Resend from 'next-auth/providers/resend'
import type { NextAuthConfig } from 'next-auth'

const config: NextAuthConfig = {
  adapter: NeonAdapter(process.env.DATABASE_URL!),
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Resend({
      from: 'noreply@vcx.dev',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    signUp: '/signup',
    error: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.stripeCustomerId = user.stripeCustomerId
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.stripeCustomerId = token.stripeCustomerId as string | undefined
      }
      return session
    },
  },
}

export const { handlers, signIn, signOut, auth } = NextAuth(config)
