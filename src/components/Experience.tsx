'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Experience {
  _id: string
  type: string
  title: string
  institution: string
  location: string
  duration: string
  description: string
  gpa: string
  highlights: string[]
  icon: string
  color: string
}

const iconMap: Record<string, any> = {
  GraduationCap,
  BookOpen,
  Award,
  Users
}

export default function Experience() {
  const [experienceData, setExperienceData] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch('/api/experience')
        const data = await response.json()
        if (data.success) {
          setExperienceData(data.data)
        }
      } catch (err) {
        console.error('Error fetching experience:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchExperience()
  }, [])

  if (loading) {
    return (
      <section id="experience" className="py-16 sm:py-20 lg:py-24 section-bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-96 mx-auto mb-12"></div>
            <div className="space-y-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-48 bg-gray-200 rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 section-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            My Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic and professional journey in technology and AI
          </p>
        </motion.div>

        <div className="space-y-16">
          {experienceData.map((experience, index) => {
            const IconComponent = iconMap[experience.icon] || GraduationCap

            return (
              <motion.div
                key={experience._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  {/* Left - Icon and Type */}
                  <div className="lg:col-span-2">
                    <div className="flex flex-col items-center lg:items-start space-y-4">
                      <div className={`w-16 h-16 ${experience.color} p-4 flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-black" />
                      </div>
                      <div className="text-center lg:text-left">
                        <div className="text-sm font-bold tracking-wider text-gray-600">
                          {experience.type.toUpperCase()}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {experience.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center - Main Content */}
                  <div className="lg:col-span-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">
                          {experience.title}
                        </h3>
                        <p className="text-xl text-gray-600 mb-2">
                          {experience.institution}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.duration}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-lg text-gray-700 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Highlights */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {experience.highlights.map((highlight, highlightIndex) => (
                          <div
                            key={highlightIndex}
                            className="bg-gray-100 px-3 py-2 text-sm font-medium text-gray-800"
                          >
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right - Score */}
                  <div className="lg:col-span-2">
                    <div className="text-center lg:text-right">
                      <div className="text-4xl font-bold mb-1">
                        {experience.gpa}
                      </div>
                      <div className="text-sm text-gray-500">
                        {experience.type === "Education" ? "GPA/Score" : "Certifications"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting line */}
                {index < experienceData.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-24 w-px h-16 bg-gray-300"></div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-black text-white p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">CONTINUOUS LEARNING</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              I believe in staying updated with the latest technologies and industry best practices.
              My journey is marked by continuous learning and skill development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "AI & Machine Learning",
                "Cloud Computing",
                "Web Development",
                "Database Management",
                "Software Engineering"
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white/10 text-white text-sm font-medium border border-white/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}