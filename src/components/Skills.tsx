'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Database, Brain, Globe } from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "JavaScript/TypeScript", level: 88 },
      { name: "HTML5/CSS3", level: 92 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { name: "Python/Flask", level: 88 },
      { name: "Node.js", level: 82 },
      { name: "Java", level: 78 },
      { name: "REST APIs", level: 85 }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Data Science", level: 82 },
      { name: "PyTorch", level: 78 },
      { name: "Computer Vision", level: 75 }
    ]
  },
  {
    title: "Database & Cloud",
    icon: Globe,
    skills: [
      { name: "MySQL/PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "AWS/Cloud", level: 70 },
      { name: "Git/GitHub", level: 90 }
    ]
  }
]

const tools = [
  "VS Code", "Git/GitHub", "Figma", "Postman", "Docker", "Linux", "Firebase", "Vercel"
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-white">
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
              My Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </motion.div>

          {/* Skills Categories */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 sm:mb-12"
            variants={containerVariants}
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white">
                    <category.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills with Progress Bars */}
                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium text-sm sm:text-base">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 text-xs sm:text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                        <motion.div
                          className="bg-blue-600 h-1.5 sm:h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            delay: 0.2 * skillIndex + 0.3 * categoryIndex, 
                            duration: 1, 
                            ease: "easeOut" 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              Tools & Technologies
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              Development tools and platforms I work with regularly
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-gray-100 px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-full text-gray-700 font-medium text-xs sm:text-sm lg:text-base hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 sm:mt-12 lg:mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 bg-blue-50 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 border border-blue-100 max-w-full">
              <Brain className="text-blue-600 flex-shrink-0" size={20} />
              <div className="text-center sm:text-left">
                <p className="text-gray-900 font-semibold text-sm sm:text-base">Continuously Learning</p>
                <p className="text-gray-600 text-xs sm:text-sm">Always expanding my technical expertise and staying updated with industry trends</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
