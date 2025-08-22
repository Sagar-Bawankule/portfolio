import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sagar Vinod Bawankule - AI & Software Developer',
  description: 'Student developer showcasing skills, projects, and certifications. Building real-world AI solutions like FarmCareAI.',
  keywords: 'AI Developer, Software Developer, Student, FarmCareAI, Portfolio, Projects',
  authors: [{ name: 'Sagar Vinod Bawankule' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
