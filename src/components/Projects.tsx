'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Brain, Leaf, Zap, Monitor, ArrowUpRight, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from '@/context/ThemeContext'

interface Project {
  _id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  featured: boolean
  status?: string
  icon?: string
  color?: string
}

const iconMap: Record<string, any> = {
  Brain,
  Leaf,
  Zap,
  Monitor,
}

const gradients = [
  "from-blue-500 via-indigo-500 to-purple-500",
  "from-cyan-500 via-teal-500 to-emerald-500",
  "from-purple-500 via-pink-500 to-rose-500",
  "from-orange-500 via-amber-500 to-yellow-500"
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

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()
        if (data.success) {
          setProjects(data.data)
        }
      } catch (err) {
        console.error('Error fetching projects:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  if (loading) {
    return (
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="animate-pulse">
            <div className={`h-10 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded w-64 mx-auto mb-4`}></div>
            <div className={`h-6 ${isDark ? 'bg-white/10' : 'bg-gray-200'} rounded w-96 mx-auto mb-12`}></div>
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className={`h-80 ${isDark ? 'bg-white/5' : 'bg-gray-100'} rounded-2xl`}></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Featured Projects
          </h2>
          <p className="section-subheading">
            A showcase of my latest work in AI, web development, and software engineering
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {featuredProjects.map((project, index) => {
            const IconComponent = project.icon ? (iconMap[project.icon] || ExternalLink) : ExternalLink
            const gradient = gradients[index % gradients.length]

            return (
              <motion.div
                key={project._id}
                variants={cardVariants}
                className="group"
              >
                <div className="professional-card rounded-2xl overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${gradient}`} />

                  <div className="grid lg:grid-cols-5 gap-0">
                    <div className={`lg:col-span-2 relative h-64 lg:h-full min-h-[250px] overflow-hidden ${isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'
                      }`}>
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                          <IconComponent className="w-16 h-16 text-white/80" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full text-xs font-semibold shadow-lg">
                          <Sparkles className="w-3 h-3" />
                          Featured
                        </span>
                        {project.status && (
                          <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-full text-xs font-semibold shadow-lg">
                            {project.status}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-3 p-8 flex flex-col">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
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
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      <p className={`leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 border ${isDark
                                ? 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border-white/10 hover:border-white/20'
                                : 'bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-700 border-gray-200 hover:border-blue-200'
                              }`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <div className="flex gap-3 mt-auto">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 border group/btn ${isDark
                                ? 'bg-white/10 hover:bg-white/20 text-white border-white/10 hover:border-white/20'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-200 hover:border-gray-300'
                              }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Github className="w-5 h-5" />
                            View Code
                            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </motion.a>
                        )}
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl group/btn btn-glow"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                            Live Demo
                            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h3 className={`text-2xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              More Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => {
                const gradient = gradients[(index + featuredProjects.length) % gradients.length]
                return (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="group"
                  >
                    <div className="professional-card rounded-2xl overflow-hidden h-full flex flex-col">
                      <div className={`h-1 bg-gradient-to-r ${gradient}`} />

                      <div className="p-6 flex flex-col h-full">
                        <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isDark
                            ? 'text-white group-hover:text-blue-400'
                            : 'text-gray-900 group-hover:text-blue-600'
                          }`}>
                          {project.title}
                        </h4>

                        <p className={`text-sm mb-4 line-clamp-2 flex-grow ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className={`px-2.5 py-1 text-xs rounded-lg font-medium border ${isDark
                                  ? 'bg-white/5 text-slate-400 border-white/10'
                                  : 'bg-gray-50 text-gray-600 border-gray-200'
                                }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-2 mt-auto">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1.5 px-4 py-2 text-sm rounded-xl font-medium transition-colors flex-1 justify-center border ${isDark
                                  ? 'bg-white/10 hover:bg-white/20 text-white border-white/10'
                                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-200'
                                }`}
                            >
                              <Github className="w-4 h-4" />
                              Code
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm rounded-xl font-medium transition-colors flex-1 justify-center"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Sagar-Bawankule"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn btn-glow btn-shine"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
