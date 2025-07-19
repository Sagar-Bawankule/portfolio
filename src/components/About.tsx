'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

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
      className="py-24 bg-gray-50 relative overflow-hidden min-h-[80vh]"
      id="about"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Minimal Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234F46E5' fill-opacity='0.4'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-blue-600 mx-auto rounded-full"
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
                {/* Background Effects */}
                <motion.div
                  className="absolute -inset-6 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-lg"
                  animate={{
                    y: [0, -8, 0],
                    x: [0, 4, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-2xl blur-lg"
                  animate={{
                    rotate: [0, 90, 180, 270, 360],
                    scale: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Main Photo Container */}
                <motion.div
                  className="relative w-72 h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-white p-4 backdrop-blur-sm border border-white/20"
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 6,
                    rotateX: 4,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    transformStyle: "preserve-3d",
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
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent" />
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      animate={{
                        x: [-100, 300],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 5,
                        ease: "easeInOut"
                      }}
                    />
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
                  className="text-2xl md:text-3xl font-bold text-gray-900"
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
                  className="text-base text-gray-600 italic border-l-4 border-blue-600 pl-4"
                  variants={itemVariants}
                >
                  "When I'm not coding, you'll find me exploring the latest AI research papers 
                  or experimenting with new technologies."
                </motion.p>
              </div>

              {/* Key Skills */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Core Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Python', 'JavaScript', 'Java', 'React', 'Node.js', 
                    'Flask', 'MySQL', 'PostgreSQL', 'ML', 'AI'
                  ].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
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

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-8 pt-6 border-t border-gray-200"
              >
                {[
                  { number: '6+', label: 'Languages' },
                  { number: '10+', label: 'Technologies' },
                  { number: '3+', label: 'Years Experience' },
                ].map(({ number, label }, index) => (
                  <div key={label} className="text-center">
                    <motion.div
                      className="text-2xl md:text-3xl font-bold text-blue-600 mb-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                    >
                      {number}
                    </motion.div>
                    <div className="text-sm text-gray-600 font-medium">{label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
