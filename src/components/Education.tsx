'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const educationData = [
    {
      institution: "G.H. Raisoni College of Engineering (GHRCE), Nagpur",
      period: "Sep 2023 – May 2026",
      degree: "B.Tech in Artificial Intelligence (Pursuing)",
      score: "Current CGPA 8.63",
      icon: "🎓"
    },
    {
      institution: "Government Polytechnic, Sakoli",
      period: "Nov 2021 – May 2023",
      degree: "Diploma in Computer Technology",
      score: "81.20%",
      icon: "💻"
    },
    {
      institution: "Govind Jr College Palandur",
      period: "July 2018 - March 2020",
      degree: "Higher Secondary Certificate (HSC) - Science",
      score: "62.62%",
      icon: "🔬"
    },
    {
      institution: "Shri Pagaji Vidyalay Kolari",
      period: "June 2017 - March 2018",
      degree: "Secondary School Certificate (SSC)",
      score: "78.60%",
      icon: "📚"
    }
  ]

  return (
    <section 
      ref={ref}
      className="py-20 px-6 section-bg-light bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      id="education"
    >

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-gray-900">
            Education
          </h2>
          <p className="section-subheading text-gray-600">
            Academic journey from secondary education to specialized AI studies
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 mb-10"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative group professional-card"
              whileHover={{ 
                scale: 1.02,
                y: -2
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Timeline Line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-6 -bottom-6 w-0.5 h-6 bg-gradient-to-b from-blue-400 to-purple-400"></div>
              )}
              
              {/* Icon */}
              <motion.div
                className="absolute -left-3 top-6 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-lg">{edu.icon}</span>
              </motion.div>

              <div className="ml-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                  <div className="lg:flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-700 font-medium mb-2 text-sm">
                      {edu.degree}
                    </p>
                  </div>
                  <span className="text-xs text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full font-medium lg:ml-4 border border-blue-100">
                    {edu.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 font-medium">Score:</span>
                  <span className="font-bold text-lg text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                    {edu.score}
                  </span>
                  {index === 0 && (
                    <motion.span
                      className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium border border-green-200"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      Current
                    </motion.span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              My educational journey reflects a commitment to continuous learning and adaptation to emerging technologies. 
              From foundational computer science to specialized AI studies, each step has built upon the previous, 
              creating a strong foundation for innovation and problem-solving.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
