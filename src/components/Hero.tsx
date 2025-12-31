'use client'

import { Download, Mail, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTheme } from '@/context/ThemeContext'

interface HeroData {
  name: string
  tagline: string
  description: string
  resumeUrl: string
  skills: string[]
  profileImage: string
}

export default function Hero() {
  const [heroData, setHeroData] = useState<HeroData | null>(null)
  const [loading, setLoading] = useState(true)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await fetch('/api/hero')
        const data = await response.json()
        if (data.success && data.data) {
          setHeroData(data.data)
        }
      } catch (err) {
        console.error('Error fetching hero:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchHero()
  }, [])

  const displayData = heroData || {
    name: "Sagar Bawankule",
    tagline: "Full Stack Developer & UI/UX Designer crafting digital experiences that blend innovation with functionality.",
    description: "Available for work",
    resumeUrl: "/resume.pdf",
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    profileImage: "/profilephoto.webp"
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center relative pt-20"
      id="home"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border ${isDark
                  ? 'bg-white/10 backdrop-blur-md border-white/20'
                  : 'bg-blue-50 border-blue-200'
                }`}>
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className={isDark ? 'text-slate-200 text-sm font-medium' : 'text-gray-600 text-sm font-medium'}>
                  {displayData.description}
                </span>
              </div>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className={`bg-clip-text text-transparent ${isDark
                    ? 'bg-gradient-to-r from-white via-slate-100 to-slate-300'
                    : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600'
                  }`}>
                  Hi, I'm{' '}
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-black">
                  {displayData.name}
                </span>
              </h1>
            </div>

            <div>
              <p className={`text-xl sm:text-2xl mb-8 leading-relaxed font-light ${isDark ? 'text-slate-300' : 'text-gray-600'
                }`}>
                {displayData.tagline}
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={displayData.resumeUrl || "/resume.pdf"}
                  download
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-3 btn-glow"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#contact"
                  className={`group px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-3 border ${isDark
                      ? 'bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-white/20 hover:border-white/30'
                      : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-200 hover:border-gray-300'
                    }`}
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </a>
              </div>
            </div>

            <div>
              <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
                {displayData.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 backdrop-blur-sm border rounded-full text-sm font-medium ${isDark
                        ? 'bg-white/5 border-white/10 text-slate-300'
                        : 'bg-white/80 border-gray-200 text-gray-600'
                      }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Modern Circular Photo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              {/* Subtle glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full blur-2xl opacity-25 group-hover:opacity-35 transition duration-500"></div>

              {/* Main circular container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Gradient border ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1">
                  <div className={`w-full h-full rounded-full ${isDark ? 'bg-slate-950' : 'bg-white'}`}></div>
                </div>

                {/* Photo */}
                <div className={`absolute inset-3 rounded-full overflow-hidden ring-2 ${isDark ? 'ring-white/10' : 'ring-gray-200'}`}>
                  <Image
                    src={displayData.profileImage || "/profilephoto.webp"}
                    alt={displayData.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />

                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                </div>

                {/* Corner accent orbs */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-xl"></div>
                <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${isDark ? 'border-white/20' : 'border-gray-300'
          }`}>
          <div className={`w-1 h-3 rounded-full mt-2 ${isDark ? 'bg-white/40' : 'bg-gray-400'}`}></div>
        </div>
      </div>
    </section>
  )
}
