'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const educationData = [
  {
    institution: "G.H. Raisoni College of Engineering (GHRCE), Nagpur",
    period: "Sep 2023 – May 2026",
    degree: "B.Tech in Artificial Intelligence (Pursuing)",
    score: "Current CGPA 8.63",
    icon: GraduationCap,
    status: "Current",
    gradient: "from-blue-500 via-indigo-500 to-purple-500"
  },
  {
    institution: "Government Polytechnic, Sakoli",
    period: "Nov 2021 – May 2023",
    degree: "Diploma in Computer Technology",
    score: "81.20%",
    icon: BookOpen,
    gradient: "from-cyan-500 via-teal-500 to-emerald-500"
  },
  {
    institution: "Govind Jr College Palandur",
    period: "July 2018 - March 2020",
    degree: "Higher Secondary Certificate (HSC) - Science",
    score: "62.62%",
    icon: BookOpen,
    gradient: "from-purple-500 via-pink-500 to-rose-500"
  },
  {
    institution: "Shri Pagaji Vidyalay Kolari",
    period: "June 2017 - March 2018",
    degree: "Secondary School Certificate (SSC)",
    score: "78.60%",
    icon: BookOpen,
    gradient: "from-orange-500 via-amber-500 to-yellow-500"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Education() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      id="education"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Education
          </h2>
          <p className="section-subheading">
            Academic journey from secondary education to specialized AI studies
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group"
              >
                {/* Main Card */}
                <div className="professional-card rounded-2xl overflow-hidden">
                  {/* Gradient Top Border */}
                  <div className={`h-1 bg-gradient-to-r ${edu.gradient}`} />

                  <div className="p-8">
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        {/* Icon Container */}
                        <motion.div
                          className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <IconComponent className="w-7 h-7 text-white" />
                        </motion.div>

                        <div>
                          <h3 className={`text-xl font-bold transition-colors duration-300 ${isDark
                              ? 'text-white group-hover:text-blue-400'
                              : 'text-gray-900 group-hover:text-blue-600'
                            }`}>
                            {edu.institution}
                          </h3>
                          <p className={isDark ? 'text-slate-400 font-medium mt-1' : 'text-gray-600 font-medium mt-1'}>
                            {edu.degree}
                          </p>
                        </div>
                      </div>

                      {/* Status & Period Badges */}
                      <div className="flex items-center gap-2 flex-wrap">
                        {edu.status && (
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border ${isDark
                              ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                              : 'bg-emerald-50 text-emerald-600 border-emerald-200'
                            }`}>
                            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                            {edu.status}
                          </span>
                        )}
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border ${isDark
                            ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                            : 'bg-blue-50 text-blue-600 border-blue-200'
                          }`}>
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    {/* Score Section */}
                    <div className={`flex items-center gap-3 pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-500" />
                        <span className={isDark ? 'text-slate-400 font-medium' : 'text-gray-600 font-medium'}>Score:</span>
                      </div>
                      <motion.span
                        className={`px-4 py-2 bg-gradient-to-r ${edu.gradient} text-white rounded-lg font-bold shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {edu.score}
                      </motion.span>
                    </div>
                  </div>
                </div>

                {/* Connection Line between cards */}
                {index < educationData.length - 1 && (
                  <div className="hidden lg:flex justify-center py-2">
                    <div className="w-0.5 h-6 bg-gradient-to-b from-blue-500/50 to-purple-500/50 rounded-full" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
