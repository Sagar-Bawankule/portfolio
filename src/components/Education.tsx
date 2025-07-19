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
      className="py-20 px-6 bg-white"
      id="education"
    >

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic journey from secondary education to specialized AI studies
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 mb-16"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative group"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Timeline Line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-8 -bottom-8 w-0.5 h-8 bg-gray-300"></div>
              )}
              
              {/* Icon */}
              <motion.div
                className="absolute -left-4 top-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xl">{edu.icon}</span>
              </motion.div>

              <div className="ml-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="lg:flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-700 font-medium mb-3">
                      {edu.degree}
                    </p>
                  </div>
                  <span className="text-sm text-gray-600 bg-gray-200 px-4 py-2 rounded-full font-medium lg:ml-4">
                    {edu.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-600">Score:</span>
                  <span className="font-bold text-lg text-blue-600">
                    {edu.score}
                  </span>
                  {index === 0 && (
                    <motion.span
                      className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium"
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

        {/* Academic Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Academic Highlights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏆", label: "High Achiever", desc: "Consistent Performance" },
              { icon: "🤖", label: "AI Specialist", desc: "Current Focus" },
              { icon: "💻", label: "Tech Background", desc: "Computer Technology" },
              { icon: "📈", label: "Growing", desc: "Continuous Learning" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.1)"
                }}
                className="text-center p-6 rounded-lg bg-gray-100 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 cursor-default"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-lg font-bold text-gray-900 mb-2">{item.label}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
