'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'

interface AboutData {
  name: string
  title: string
  introduction: string
  quote: string
  coreTechnologies: string[]
  profileImage: string
}

const defaultAboutData: AboutData = {
  name: "Sagar Vinod Bawankule",
  title: "AI & Software Developer",
  introduction: "I am a passionate AI and Software Developer currently pursuing B.Tech in Artificial Intelligence at G.H. Raisoni College of Engineering, Nagpur. With a strong foundation in computer technology and a keen interest in cutting-edge technologies, I specialize in building intelligent applications and full-stack web solutions.",
  quote: "Building the future with AI, one line of code at a time.",
  coreTechnologies: ["Python", "Machine Learning", "Deep Learning", "React", "Next.js", "Node.js", "TypeScript", "MongoDB"],
  profileImage: "/profilephoto.webp"
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export default function About() {
  const [aboutData, setAboutData] = useState<AboutData>(defaultAboutData)
  const [loading, setLoading] = useState(true)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch('/api/about')
        const data = await response.json()
        if (data.success && data.data) {
          setAboutData(data.data)
        }
      } catch (err) {
        console.error('Error fetching about:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchAbout()
  }, [])

  if (loading) {
    return (
      <section className="py-24 relative" id="about">
        <div className="container mx-auto px-8 py-24">
          <div className="max-w-5xl mx-auto animate-pulse">
            <div className={`h-10 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded w-48 mx-auto mb-8`}></div>
            <div className="grid lg:grid-cols-5 gap-14 items-center">
              <div className="lg:col-span-2 flex justify-center">
                <div className={`w-72 h-[420px] ${isDark ? 'bg-white/5' : 'bg-gray-100'} rounded-3xl`}></div>
              </div>
              <div className="lg:col-span-3 space-y-6">
                <div className={`h-8 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded w-64`}></div>
                <div className={`h-24 ${isDark ? 'bg-white/5' : 'bg-gray-100'} rounded`}></div>
                <div className={`h-16 ${isDark ? 'bg-white/5' : 'bg-gray-100'} rounded`}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className="relative py-24 overflow-hidden"
      id="about"
    >
      <div className="container mx-auto px-8 relative z-10 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="section-heading"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.div
              className="section-divider mx-auto mt-4"
              variants={itemVariants}
            />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-14 items-center">
            {/* Left Column - Profile Photo */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative">
                {/* Background Effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl opacity-50 blur-xl"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Main Photo Container */}
                <motion.div
                  className="relative w-72 h-[420px] rounded-3xl overflow-hidden shadow-2xl professional-card p-4"
                  whileHover={{
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    aspectRatio: "4/5"
                  }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <Image
                      src={aboutData.profileImage || "/profilephoto.webp"}
                      alt={`${aboutData.name} - ${aboutData.title}`}
                      fill
                      className="object-cover transition-all duration-500 hover:scale-105"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* Professional Badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl px-4 py-2 shadow-lg border border-white/20"
                  initial={{ scale: 0, rotate: 8 }}
                  animate={{ scale: 1, rotate: -3 }}
                  transition={{ delay: 0.6, type: "spring", bounce: 0.4 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 0,
                  }}
                >
                  <div className="flex items-center space-x-1.5">
                    <motion.div
                      className="w-1.5 h-1.5 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs font-semibold">Available</span>
                  </div>
                </motion.div>

                {/* Floating Element */}
                <motion.div
                  className={`absolute -top-4 -left-4 backdrop-blur-md rounded-lg px-2 py-1 shadow-md border text-xs font-medium ${isDark
                      ? 'bg-white/10 border-white/10 text-blue-400'
                      : 'bg-white border-gray-200 text-blue-600'
                    }`}
                  initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: -3 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                >
                  🚀 {aboutData.title}
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-10">
              {/* Introduction */}
              <div className="space-y-6">
                <motion.h3
                  className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
                  variants={itemVariants}
                >
                  Hi, I'm {aboutData.name}
                </motion.h3>

                <motion.p
                  className={`text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}
                  variants={itemVariants}
                >
                  {aboutData.introduction}
                </motion.p>

                <motion.p
                  className={`text-base italic border-l-4 border-blue-500 pl-4 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}
                  variants={itemVariants}
                >
                  "{aboutData.quote}"
                </motion.p>
              </div>

              {/* Key Skills */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Core Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {aboutData.coreTechnologies.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className={`px-4 py-2 rounded-full border text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 ${isDark
                          ? 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                          : 'bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200'
                        }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * index }}
                      whileHover={{ scale: 1.08 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Soft Skills Highlight */}
              <div className="flex justify-center mt-8">
                <span className={`px-8 py-3 rounded-2xl professional-card font-medium text-base tracking-wide shadow-lg text-center ${isDark
                    ? 'text-slate-300 border-blue-500/30'
                    : 'text-gray-600 border-blue-200'
                  }`}>
                  I excel at solving problems, thinking critically, and managing time—skills that drive my success in tech.
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
