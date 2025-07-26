'use client'

import { motion } from 'framer-motion'
import { Code, Brain, Database, Cloud, Zap, Monitor, ArrowRight } from 'lucide-react'

const skillCategories = [
  {
    id: 1,
    name: "Programming Languages",
    icon: Code,
    color: "bg-white",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "TypeScript", level: 75 },
      { name: "C++", level: 70 }
    ]
  },
  {
    id: 2,
    name: "AI & Machine Learning",
    icon: Brain,
    color: "bg-red-600",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Scikit-learn", level: 90 },
      { name: "OpenCV", level: 75 },
      { name: "NLP", level: 80 }
    ]
  },
  {
    id: 3,
    name: "Web Development",
    icon: Monitor,
    color: "bg-white",
    skills: [
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "Flask", level: 85 },
      { name: "Tailwind CSS", level: 90 }
    ]
  },
  {
    id: 4,
    name: "Database & Cloud",
    icon: Database,
    color: "bg-white",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "AWS", level: 75 },
      { name: "Supabase", level: 80 }
    ]
  },
  {
    id: 5,
    name: "DevOps & Tools",
    icon: Cloud,
    color: "bg-white",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "Linux", level: 80 },
      { name: "VS Code", level: 95 }
    ]
  },
  {
    id: 6,
    name: "Performance & Optimization",
    icon: Zap,
    color: "bg-white",
    skills: [
      { name: "Algorithm Design", level: 85 },
      { name: "Data Structures", level: 90 },
      { name: "System Design", level: 75 },
      { name: "Performance Tuning", level: 80 },
      { name: "Code Optimization", level: 85 }
    ]
  }
]

const additionalTools = [
  "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Streamlit",
  "Hugging Face", "Transformers", "FastAPI", "Django", "Express.js",
  "Redux", "GraphQL", "REST APIs", "JWT", "OAuth", "WebSockets",
  "Redis", "Elasticsearch", "Kubernetes", "Jenkins", "GitHub Actions"
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-white text-black">
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
            <span className="text-sm font-light tracking-widest text-gray-600">SKILLS</span>
            <div className="w-16 h-px bg-black"></div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            EXPERTISE
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black text-white p-8 hover:bg-gray-900 transition-colors duration-200"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 ${category.color} p-3 flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>

                {/* Skills with Progress Bars */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/20 h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className="h-full bg-white"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">ADDITIONAL TOOLS & TECHNOLOGIES</h3>
            <div className="w-16 h-px bg-black mx-auto mb-8"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="px-4 py-2 bg-gray-100 text-black text-sm font-medium border border-gray-300 hover:bg-gray-200 transition-colors duration-200"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

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
              I'm constantly expanding my skill set and staying updated with the latest technologies 
              and industry best practices to deliver cutting-edge solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Currently Learning: Advanced ML", 
                "Next: Cloud Architecture",
                "Future: Blockchain & Web3"
              ].map((item, index) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-white/10 text-white text-sm font-medium border border-white/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
