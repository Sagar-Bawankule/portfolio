'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Code2, MapPin, Calendar } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              My About
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate AI developer and full-stack engineer creating innovative solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start order-1 lg:order-1">
              <div className="relative">
                <div className="w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/profilephoto.webp"
                    alt="Sagar Bawankule - AI & Software Developer"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
                  />
                </div>
                
                {/* Status Badge */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-green-500 text-white rounded-lg sm:rounded-xl px-2 py-1 sm:px-4 sm:py-2 shadow-lg">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6 order-2 lg:order-2">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Hi, I'm <span className="text-blue-600">Sagar Bawankule</span>
                </h3>
                
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                  I'm a passionate AI & Software Developer currently pursuing B.Tech in Artificial Intelligence. 
                  I specialize in building intelligent applications that solve real-world problems using cutting-edge technologies.
                </p>

                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border-l-4 border-blue-600">
                  <p className="text-sm sm:text-base text-gray-700 italic">
                    "When I'm not coding, you'll find me exploring the latest AI research papers 
                    or experimenting with new technologies that push the boundaries of what's possible."
                  </p>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Code2 className="text-blue-600" size={16} />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-gray-900">Specialization</p>
                      <p className="text-xs sm:text-sm text-gray-600">AI & Software Development</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-3 sm:p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <MapPin className="text-green-600" size={16} />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-gray-900">Location</p>
                      <p className="text-sm text-gray-600">Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Core Technologies</h4>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {[
                    'Python', 'JavaScript', 'Java', 'React', 'Node.js', 
                    'Flask', 'MySQL', 'PostgreSQL', 'Machine Learning', 'AI'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Values */}
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-gray-700 font-medium text-center">
                  I excel at <span className="text-blue-600 font-semibold">problem-solving</span>, 
                  <span className="text-blue-600 font-semibold"> critical thinking</span>, and 
                  <span className="text-blue-600 font-semibold"> time management</span>—core skills that drive my success in technology.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
