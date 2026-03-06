import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Navbar } from '@/components/navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VibeCode X-Ray - AI-Powered Codebase Audits',
  description: 'Analyze your code for security vulnerabilities, performance issues, and best practices. AI-powered codebase audits in minutes.',
  keywords: ['code audit', 'security analysis', 'code quality', 'AI', 'developer tools'],
  openGraph: {
    title: 'VibeCode X-Ray - AI-Powered Codebase Audits',
    description: 'Analyze your code for security vulnerabilities, performance issues, and best practices.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
