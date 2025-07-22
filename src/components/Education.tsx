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
      className="py-20 px-6 section-bg-white bg-gray-900"
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
          <h2 className="section-heading text-gray-100">
            Education
          </h2>
          <p className="section-subheading text-gray-300">
            Academic journey from secondary education to specialized AI studies
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5 mb-10"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-800 relative group"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Timeline Line */}
              {index < educationData.length - 1 && (
                <div className="absolute left-5 -bottom-5 w-0.5 h-5 bg-gray-700"></div>
              )}
              
              {/* Icon */}
              <motion.div
                className="absolute -left-2 top-5 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-base">{edu.icon}</span>
              </motion.div>

              <div className="ml-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-2">
                  <div className="lg:flex-1">
                    <h3 className="text-base font-bold text-gray-100 mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-300 font-medium mb-1 text-sm">
                      {edu.degree}
                    </p>
                  </div>
                  <span className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded-full font-medium lg:ml-4">
                    {edu.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-300">Score:</span>
                  <span className="font-bold text-sm text-blue-400">
                    {edu.score}
                  </span>
                  {index === 0 && (
                    <motion.span
                      className="bg-green-900 text-green-300 text-[10px] px-2 py-0.5 rounded-full font-medium"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-lg font-bold text-gray-100 mb-4">
            Academic Highlights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
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
                  duration: 0.3,
                  delay: index * 0.04,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.04,
                  backgroundColor: "rgba(59, 130, 246, 0.15)"
                }}
                className="text-center p-3 rounded-lg bg-gray-800 border border-gray-700 hover:bg-blue-900 hover:border-blue-700 transition-all duration-300 cursor-default"
              >
                <div className="text-xl mb-1">{item.icon}</div>
                <div className="text-base font-bold text-gray-100 mb-1">{item.label}</div>
                <div className="text-xs text-gray-300">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
