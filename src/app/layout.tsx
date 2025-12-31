import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <ThemeProvider>
          {/* Background Elements Container */}
          <div className="theme-background">
            <div className="mesh-gradient" />
            <div className="grid-pattern" />
            <div className="noise-overlay" />
            <div className="gradient-orb gradient-orb-1" />
            <div className="gradient-orb gradient-orb-2" />
            <div className="gradient-orb gradient-orb-3" />
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
