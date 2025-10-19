'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
// Import icons at the top
import { Lightbulb, Clock, Puzzle } from 'lucide-react'

export default function About() {
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

  return (
    <section 
      ref={ref}
      className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 py-24 font-sans overflow-hidden"
      id="about"
    >
      <div className="container mx-auto px-8 relative z-10 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="section-heading text-black"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.div
              className="section-divider border-t-4 border-blue-500 w-24 mx-auto mt-4"
              variants={itemVariants}
            />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-14 items-center">
            {/* Left Column - Profile Photo */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative">
                {/* Simplified Background Effect */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 rounded-3xl opacity-50"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Main Photo Container */}
                <motion.div
                  className="relative w-72 h-[420px] rounded-3xl overflow-hidden shadow-xl bg-white p-4 border border-gray-200 professional-card"
                  whileHover={{ 
                    scale: 1.02
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    aspectRatio: "4/5"
                  }}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden relative">
                    <Image
                      src="/profilephoto.webp"
                      alt="Sagar Bawankule - AI & Software Developer"
                      fill
                      className="object-cover transition-all duration-500 hover:scale-105"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 via-transparent to-transparent" />
                  </div>
                </motion.div>
                
                {/* Enhanced Professional Badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl px-4 py-2 shadow-lg border border-white/20"
                  initial={{ scale: 0, rotate: 8 }}
                  animate={{ scale: 1, rotate: -3 }}
                  transition={{ delay: 0.6, type: "spring", bounce: 0.4 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 0,
                  }}
                >
                  <div className="flex items-center space-x-1.5">
                    <motion.div 
                      className="w-1.5 h-1.5 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs font-semibold">Available</span>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -left-4 bg-white/80 backdrop-blur-md text-blue-600 rounded-lg px-2 py-1 shadow-md border border-blue-100"
                  initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: -3 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  whileHover={{ scale: 1.05, rotate: 0 }}
                >
                  <span className="text-xs font-medium">🚀 AI Dev</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-10">
              {/* Introduction */}
              <div className="space-y-6">
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-black"
                  variants={itemVariants}
                >
                  Hi, I'm Sagar Bawankule
                </motion.h3>
                
                <motion.p 
                  className="text-lg text-gray-700 leading-relaxed"
                  variants={itemVariants}
                >
                  I'm a passionate AI & Software Developer currently pursuing B.Tech in Artificial Intelligence. 
                  I specialize in building intelligent applications that solve real-world problems.
                </motion.p>

                <motion.p 
                  className="text-base text-gray-500 italic border-l-4 border-blue-500 pl-4"
                  variants={itemVariants}
                >
                  "When I'm not coding, you'll find me exploring the latest AI research papers 
                  or experimenting with new technologies."
                </motion.p>
              </div>

              {/* Key Skills */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="text-xl font-semibold text-black">Core Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Python', 'JavaScript', 'Java', 'React', 'Node.js', 
                    'Flask', 'MySQL', 'PostgreSQL', 'ML', 'AI'
                  ].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-gray-200 text-black rounded-full border border-gray-300 text-sm font-medium shadow-md hover:shadow-lg transition-shadow professional-card"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.05 * index }}
                      whileHover={{ scale: 1.08 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Modern, Personal Soft Skills Highlight */}
              <div className="flex justify-center mt-8">
                <span className="px-8 py-2 rounded-2xl bg-gray-100 text-black font-bold text-lg tracking-wide shadow border border-blue-800 text-center">
                  I excel at solving problems, thinking critically, and managing time—skills that drive my success in tech.
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
