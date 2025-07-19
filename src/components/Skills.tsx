'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Brain, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { name: "Python", level: 90, color: "from-blue-500 to-blue-600" },
      { name: "JavaScript/TypeScript", level: 85, color: "from-yellow-500 to-yellow-600" },
      { name: "Java", level: 80, color: "from-red-500 to-red-600" },
      { name: "C++", level: 75, color: "from-purple-500 to-purple-600" },
      { name: "SQL", level: 85, color: "from-green-500 to-green-600" },
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: Wrench,
    skills: [
      { name: "React/Next.js", level: 88, color: "from-cyan-500 to-cyan-600" },
      { name: "Node.js", level: 82, color: "from-green-500 to-green-600" },
      { name: "TensorFlow", level: 78, color: "from-orange-500 to-orange-600" },
      { name: "Django/Flask", level: 80, color: "from-emerald-500 to-emerald-600" },
      { name: "Express.js", level: 75, color: "from-gray-500 to-gray-600" },
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 85, color: "from-pink-500 to-pink-600" },
      { name: "Deep Learning", level: 80, color: "from-indigo-500 to-indigo-600" },
      { name: "Computer Vision", level: 75, color: "from-violet-500 to-violet-600" },
      { name: "NLP", level: 70, color: "from-rose-500 to-rose-600" },
      { name: "Data Analysis", level: 88, color: "from-teal-500 to-teal-600" },
    ]
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 80, color: "from-green-500 to-green-600" },
      { name: "PostgreSQL", level: 75, color: "from-blue-500 to-blue-600" },
      { name: "Git/GitHub", level: 90, color: "from-gray-700 to-gray-800" },
      { name: "Docker", level: 70, color: "from-blue-400 to-blue-500" },
      { name: "AWS", level: 65, color: "from-orange-400 to-orange-500" },
    ]
  }
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

const categoryVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const skillVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: { 
    width: "100%", 
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: 0.2
    }
  }
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive expertise across modern technologies and frameworks
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            
            return (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.1 
                      }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-gray-600">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            ease: "easeOut",
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.2
                          }}
                        />
                        
                        {/* Animated glow effect */}
                        <motion.div
                          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full opacity-50 blur-sm`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            ease: "easeOut",
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.2
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Additional Expertise
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Agile/Scrum", "CI/CD", "REST APIs", "GraphQL", "Microservices",
              "Cloud Computing", "DevOps", "Unit Testing", "System Design",
              "Problem Solving", "Team Leadership", "Technical Writing"
            ].map((skill, index) => (
              <motion.span
                key={skill}
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
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
