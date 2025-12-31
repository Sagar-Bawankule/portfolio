'use client'

import { motion } from 'framer-motion'
import { Calendar, Award, Briefcase, ArrowUpRight, Sparkles } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

const internships = [
  {
    id: 1,
    title: "AI & Data Analytics Intern",
    company: "AICTE × Shell India × Edunet",
    program: "Skills4Future Program",
    duration: "July - August 2025",
    type: "Virtual Internship",
    focus: ["Artificial Intelligence", "Data Analytics", "Green Skills"],
    studentId: "STU6145a5519ddcb1631954257",
    description: "Focused on AI and Data Analytics with emphasis on sustainable Green Skills as part of the collaborative Skills4Future initiative.",
    status: "Completed",
    gradient: "from-blue-500 via-cyan-500 to-teal-500"
  },
  {
    id: 2,
    title: "Web Development Intern",
    company: "HEAL BHARAT × CODELEVATE",
    duration: "February 2025",
    type: "Intensive Program",
    focus: ["Frontend Development", "Backend APIs", "Full Stack"],
    achievement: "Best Achievement Award",
    certificateId: "9N43DMJ1KX",
    studentId: "RT230094",
    description: "One-month intensive web development program recognized with the Best Achievement Award for outstanding performance.",
    status: "Top Performer",
    gradient: "from-purple-500 via-pink-500 to-rose-500"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function Internships() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      id="internships"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Internships
          </h2>
          <p className="section-subheading">
            Professional experience through strategic internship programs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              variants={cardVariants}
              className="group relative"
            >
              <div className="professional-card rounded-2xl overflow-hidden">
                <div className={`h-1 bg-gradient-to-r ${internship.gradient}`} />

                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${internship.gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Briefcase className="w-7 h-7 text-white" />
                      </motion.div>

                      <div>
                        <h3 className={`text-xl font-bold transition-colors duration-300 ${isDark
                            ? 'text-white group-hover:text-blue-400'
                            : 'text-gray-900 group-hover:text-blue-600'
                          }`}>
                          {internship.title}
                        </h3>
                        <p className={isDark ? 'text-slate-400 font-medium mt-1' : 'text-gray-600 font-medium mt-1'}>
                          {internship.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {internship.achievement && (
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border ${isDark
                            ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                            : 'bg-amber-50 text-amber-600 border-amber-200'
                          }`}>
                          <Award className="w-4 h-4" />
                          {internship.status}
                        </span>
                      )}
                      {!internship.achievement && (
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border ${isDark
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                            : 'bg-emerald-50 text-emerald-600 border-emerald-200'
                          }`}>
                          <Sparkles className="w-4 h-4" />
                          {internship.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className={`leading-relaxed mb-6 text-base ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                    {internship.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {internship.focus.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border ${isDark
                            ? 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border-white/10 hover:border-white/20'
                            : 'bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-700 border-gray-200 hover:border-blue-200'
                          }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t ${isDark ? 'border-white/10' : 'border-gray-200'
                    }`}>
                    <div className={`flex flex-wrap items-center gap-4 text-sm ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">{internship.duration}</span>
                      </div>
                      <span className={`hidden sm:block w-1 h-1 rounded-full ${isDark ? 'bg-slate-600' : 'bg-gray-300'}`} />
                      <span>{internship.type}</span>
                      {internship.program && (
                        <>
                          <span className={`hidden sm:block w-1 h-1 rounded-full ${isDark ? 'bg-slate-600' : 'bg-gray-300'}`} />
                          <span className="text-blue-500 font-medium">{internship.program}</span>
                        </>
                      )}
                    </div>

                    <motion.div
                      className="flex items-center gap-2 text-blue-500 font-medium text-sm cursor-pointer group/link"
                      whileHover={{ x: 4 }}
                    >
                      <span>View Certificate</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {index < internships.length - 1 && (
                <div className="hidden lg:flex justify-center py-4">
                  <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500/50 to-purple-500/50 rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
