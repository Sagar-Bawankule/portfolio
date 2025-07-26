'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from 'lucide-react'

const experienceData = [
  {
    id: 1,
    type: "Education",
    title: "B.Tech in Artificial Intelligence",
    institution: "G H Raisoni College of Engineering",
    location: "Nagpur, Maharashtra",
    duration: "2022 - 2026",
    description: "Currently pursuing my undergraduate degree with focus on AI, machine learning, and software engineering.",
    gpa: "8.5/10",
    highlights: ["AI/ML Fundamentals", "Data Structures & Algorithms", "Software Engineering", "Database Management"],
    icon: GraduationCap,
    color: "bg-white"
  },
  {
    id: 2,
    type: "Education",
    title: "Higher Secondary Education",
    institution: "Maharashtra State Board",
    location: "Nagpur, Maharashtra",
    duration: "2020 - 2022",
    description: "Completed higher secondary education with focus on science and mathematics.",
    gpa: "85%",
    highlights: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    icon: BookOpen,
    color: "bg-red-600"
  },
  {
    id: 3,
    type: "Certifications",
    title: "Professional Certifications",
    institution: "Various Platforms",
    location: "Online",
    duration: "2023 - 2024",
    description: "Earned multiple certifications in AI, cloud computing, and software development.",
    gpa: "6+",
    highlights: ["AWS Technical Essentials", "AI For All Program", "Advanced Software Engineering", "Database Management"],
    icon: Award,
    color: "bg-white"
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        {/* Magazine Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-black"></div>
            <span className="text-sm font-light tracking-widest text-gray-600">EXPERIENCE</span>
            <div className="w-16 h-px bg-black"></div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            JOURNEY
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My academic and professional journey in technology and AI
          </p>
        </motion.div>

        <div className="space-y-16">
          {experienceData.map((experience, index) => {
            const IconComponent = experience.icon
            
            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Magazine-style layout */}
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