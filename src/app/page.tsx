'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'
import LoadingScreen from '@/components/LoadingScreen'
import { useIsClient } from '@/hooks/useIsClient'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Reduced loading duration for better UX
    const timer = setTimeout(() => setIsLoading(false), 1500) // Reduced from 3 seconds to 1.5 seconds
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <main className="min-h-screen">
      <FloatingElements />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
