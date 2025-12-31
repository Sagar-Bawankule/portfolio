'use client'

import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from '@/context/ThemeContext'

interface Certification {
  _id: string
  title: string
  issuer: string
  date: string
  skills: string[]
  description: string
  certificateUrl: string
}

const gradients = [
  "from-blue-500 via-indigo-500 to-purple-500",
  "from-cyan-500 via-teal-500 to-emerald-500",
  "from-purple-500 via-pink-500 to-rose-500",
  "from-orange-500 via-amber-500 to-yellow-500",
  "from-emerald-500 via-green-500 to-teal-500",
  "from-rose-500 via-red-500 to-orange-500",
  "from-indigo-500 via-blue-500 to-cyan-500",
  "from-pink-500 via-purple-500 to-indigo-500",
  "from-teal-500 via-cyan-500 to-blue-500"
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const Certifications = () => {
  const [certifications, setCertifications] = useState<Certification[]>([])
  const [loading, setLoading] = useState(true)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const response = await fetch('/api/certifications')
        const data = await response.json()
        if (data.success) {
          setCertifications(data.data)
        }
      } catch (err) {
        console.error('Error fetching certifications:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchCertifications()
  }, [])

  if (loading) {
    return (
      <section id="certifications" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="animate-pulse">
            <div className={`h-10 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded w-64 mx-auto mb-4`}></div>
            <div className={`h-6 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded w-96 mx-auto mb-12`}></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className={`h-64 ${isDark ? 'bg-white/5' : 'bg-gray-100'} rounded-2xl`}></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            My Certifications
          </h2>
          <p className="section-subheading">
            Professional credentials and training that demonstrate my expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => {
            const gradient = gradients[index % gradients.length]
            return (
              <motion.div
                key={cert._id}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="professional-card rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className={`h-1 bg-gradient-to-r ${gradient}`} />

                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-4">
                      <motion.div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Award className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-base font-bold transition-colors duration-300 line-clamp-2 ${isDark
                          ? 'text-white group-hover:text-blue-400'
                          : 'text-gray-900 group-hover:text-blue-600'
                          }`}>
                          {cert.title}
                        </h3>
                      </div>
                    </div>

                    <div className={`flex items-center gap-2 text-sm mb-3 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                      <span className={`font-medium ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>{cert.issuer}</span>
                      <span className={`w-1 h-1 rounded-full ${isDark ? 'bg-slate-600' : 'bg-gray-300'}`} />
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {cert.date}
                      </span>
                    </div>

                    <p className={`text-sm mb-4 line-clamp-2 flex-grow ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors duration-200 border ${isDark
                            ? 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border-white/10'
                            : 'bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-700 border-gray-200'
                            }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {cert.certificateUrl && cert.certificateUrl !== '#' ? (
                      <motion.a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn btn-glow"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Certificate
                        <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </motion.a>
                    ) : (
                      <button
                        className={`mt-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl cursor-not-allowed border ${isDark
                          ? 'bg-white/5 text-slate-500 border-white/10'
                          : 'bg-gray-100 text-gray-400 border-gray-200'
                          }`}
                        disabled
                      >
                        <ExternalLink className="w-4 h-4" />
                        Certificate Pending
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
