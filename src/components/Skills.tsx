'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Brain, Wrench, Cloud, Shield, Zap, Globe } from 'lucide-react'

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    description: "Core languages I use for development",
    skills: [
      { name: "Python", icon: "🐍", color: "from-blue-500 to-blue-600" },
      { name: "Java", icon: "☕", color: "from-red-500 to-red-600" },
      { name: "C++", icon: "⚙️", color: "from-purple-500 to-purple-600" },
      { name: "C", icon: "🔧", color: "from-gray-600 to-gray-700" },
      { name: "JavaScript", icon: "⚡", color: "from-yellow-500 to-yellow-600" },
    ]
  },
  {
    title: "Web Development",
    icon: Globe,
    description: "Modern web technologies and frameworks",
    skills: [
      { name: "React", icon: "⚛️", color: "from-cyan-500 to-cyan-600" },
      { name: "HTML", icon: "🌐", color: "from-orange-500 to-orange-600" },
      { name: "CSS", icon: "🎨", color: "from-pink-500 to-pink-600" },
      { name: "Tailwind CSS", icon: "🎯", color: "from-teal-500 to-teal-600" },
      { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-600" },
      { name: "Flask", icon: "🔥", color: "from-red-400 to-red-500" },
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    description: "Artificial intelligence and data science",
    skills: [
      { name: "PyTorch", icon: "🔥", color: "from-orange-500 to-orange-600" },
      { name: "Scikit-learn", icon: "📊", color: "from-blue-500 to-blue-600" },
      { name: "Computer Vision", icon: "👁️", color: "from-violet-500 to-violet-600" },
      { name: "Natural Language Processing", icon: "💬", color: "from-rose-500 to-rose-600" },
      { name: "Data Analysis", icon: "📈", color: "from-teal-500 to-teal-600" },
    ]
  },
  {
    title: "Database & Cloud",
    icon: Cloud,
    description: "Data storage and cloud infrastructure",
    skills: [
      { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-600" },
      { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-blue-600" },
      { name: "Firebase", icon: "🔥", color: "from-orange-400 to-orange-500" },
      { name: "AWS", icon: "☁️", color: "from-yellow-500 to-yellow-600" },
    ]
  },
  {
    title: "Tools & DevOps",
    icon: Shield,
    description: "Development tools and practices",
    skills: [
      { name: "Git", icon: "📝", color: "from-gray-700 to-gray-800" },
      { name: "GitHub", icon: "🐙", color: "from-gray-800 to-gray-900" },
      { name: "Linux", icon: "🐧", color: "from-yellow-500 to-yellow-600" },
      { name: "VS Code", icon: "💻", color: "from-blue-500 to-blue-600" },
      { name: "Testing", icon: "🧪", color: "from-green-500 to-green-600" },
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const categoryVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
}

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 section-bg-white bg-white font-sans">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading text-gray-900">
            Technical Skills
          </h2>
          <p className="section-subheading text-gray-600">
            Comprehensive expertise across modern technologies, frameworks, and tools. 
            Continuously learning and adapting to new technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            
            return (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                whileHover={{ 
                  y: -3,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden professional-card"
              >
                {/* Modern gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Animated border - simplified */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-transparent"
                  whileHover={{
                    borderColor: "rgba(59, 130, 246, 0.2)",
                    transition: { duration: 0.2 }
                  }}
                />
                
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div 
                      className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
                      whileHover={{ rotate: 3 }}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {category.title}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3,
                          delay: categoryIndex * 0.05 + skillIndex * 0.03
                        }}
                        whileHover={{ scale: 1.02 }}
                        className="group/skill relative"
                      >
                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 shadow-sm hover:shadow-md">
                          <div className={`w-6 h-6 rounded-md bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                            {skill.icon}
                          </div>
                          <span className="font-medium text-gray-700 group-hover/skill:text-blue-700 transition-colors duration-200 text-xs">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Learning Section - simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 professional-card relative overflow-hidden">
            {/* Background decoration - simplified */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-pink-400/10 to-blue-400/10 rounded-full blur-lg" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-6 h-6 text-blue-600" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900">
                  Currently Learning
                </h3>
              </div>
              <p className="text-gray-600 mb-6 text-sm">
                Always expanding my skill set with the latest technologies
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Rust', 'Go', 'Kubernetes', 'GraphQL', 'Web3', 'Blockchain',
                  'Three.js', 'WebGL', 'Elixir', 'Kotlin', 'Swift', 'Flutter'
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, y: -1 }}
                    className="px-3 py-1.5 bg-white text-blue-700 rounded-full text-xs font-semibold border border-blue-200 shadow-sm hover:shadow-md transition-all duration-200 hover:bg-blue-50"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
