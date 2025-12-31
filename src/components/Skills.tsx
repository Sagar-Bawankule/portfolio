'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Brain, Wrench, Cloud, Shield, Zap, Globe, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from '@/context/ThemeContext'

interface Skill {
  name: string
  icon: string
  color: string
}

interface SkillCategory {
  _id: string
  title: string
  icon: string
  description: string
  skills: Skill[]
}

const iconMap: Record<string, any> = {
  Code2,
  Database,
  Brain,
  Wrench,
  Cloud,
  Shield,
  Zap,
  Globe
}

const gradientMap: Record<string, string> = {
  "Programming Languages": "from-blue-500 via-indigo-500 to-purple-500",
  "Web Development": "from-cyan-500 via-teal-500 to-emerald-500",
  "AI & Machine Learning": "from-purple-500 via-pink-500 to-rose-500",
  "Database & Cloud": "from-orange-500 via-amber-500 to-yellow-500",
  "Tools & DevOps": "from-slate-500 via-gray-500 to-zinc-500"
}

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

const Skills = () => {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([])
  const [loading, setLoading] = useState(true)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/api/skills')
        const data = await response.json()
        if (data.success) {
          setSkillCategories(data.data)
        }
      } catch (err) {
        console.error('Error fetching skills:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  if (loading) {
    return (
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="animate-pulse">
            <div className={`h-10 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded w-64 mx-auto mb-4`}></div>
            <div className={`h-6 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded w-96 mx-auto mb-12`}></div>
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className={`h-48 ${isDark ? 'bg-white/5' : 'bg-gray-100'} rounded-2xl`}></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Technical Skills
          </h2>
          <p className="section-subheading">
            Comprehensive expertise across modern technologies, frameworks, and tools
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon] || Code2
            const gradient = gradientMap[category.title] || "from-blue-500 via-cyan-500 to-teal-500"

            return (
              <motion.div
                key={category._id}
                variants={cardVariants}
                className="group"
              >
                <div className="professional-card rounded-2xl overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${gradient}`} />

                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div
                        className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className={`text-xl font-bold transition-colors duration-300 ${isDark
                            ? 'text-white group-hover:text-blue-400'
                            : 'text-gray-900 group-hover:text-blue-600'
                          }`}>
                          {category.title}
                        </h3>
                        <p className={isDark ? 'text-slate-400 text-sm mt-1' : 'text-gray-600 text-sm mt-1'}>
                          {category.description}
                        </p>
                      </div>

                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border ${isDark
                          ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                          : 'bg-blue-50 text-blue-600 border-blue-200'
                        }`}>
                        {category.skills.length} skills
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="group/skill"
                        >
                          <div className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-300 cursor-default ${isDark
                              ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-blue-500/30'
                              : 'bg-gray-50 hover:bg-blue-50 border-gray-200 hover:border-blue-300'
                            }`}>
                            <span className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-sm shadow-sm`}>
                              {skill.icon}
                            </span>
                            <span className={`font-medium transition-colors duration-200 ${isDark
                                ? 'text-slate-300 group-hover/skill:text-white'
                                : 'text-gray-700 group-hover/skill:text-blue-700'
                              }`}>
                              {skill.name}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="professional-card rounded-2xl overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    Currently Learning
                  </h3>
                  <p className={isDark ? 'text-slate-400 text-sm mt-1' : 'text-gray-600 text-sm mt-1'}>
                    Always expanding my expertise with cutting-edge technologies
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Rust', icon: '🦀' },
                  { name: 'Go', icon: '🔷' },
                  { name: 'Kubernetes', icon: '☸️' },
                  { name: 'GraphQL', icon: '◈' },
                  { name: 'Web3', icon: '🌐' },
                  { name: 'Blockchain', icon: '⛓️' },
                  { name: 'Three.js', icon: '🎮' },
                  { name: 'WebGL', icon: '🖼️' }
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group/skill"
                  >
                    <div className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-300 cursor-default ${isDark
                        ? 'bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/20 hover:border-emerald-500/40'
                        : 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200 hover:border-emerald-300'
                      }`}>
                      <span className="text-lg">{skill.icon}</span>
                      <span className={isDark ? 'font-medium text-emerald-400' : 'font-medium text-emerald-700'}>
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
