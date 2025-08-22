'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Github, Code2 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "AI Interview Question Generator & Evaluator",
    description: "A full-stack web app built using Flask and Hugging Face models to help users prepare for technical interviews with AI-generated questions and intelligent answer evaluation.",
    technologies: ["Python", "Flask", "Hugging Face", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Sagar-Bawankule/AI-Interview-Question-Generator",
    liveUrl: "https://ai-interview-question-generator-vl2w.onrender.com",
    image: "/AIQuestion.jpg",
    featured: true,
    category: "AI/ML"
  },
  {
    id: 2,
    title: "FarmCareAI",
    description: "An intelligent platform for crop recommendations and plant disease detection using AI. Features crop suggestion system and plant disease detection via image input.",
    technologies: ["React", "TypeScript", "Flask", "Tailwind CSS", "Machine Learning"],
    githubUrl: "https://github.com/Sagar-Bawankule/FarmCareAi",
    liveUrl: "https://github.com/Sagar-Bawankule/FarmCareAi",
    image: "/Farmcare.jpg",
    featured: true,
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Electric Vehicle Adoption Forecasting",
    description: "A machine learning project that predicts EV adoption trends across the U.S. using historical data from 2017–2024 with forecasting using 4 ML models.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Streamlit"],
    githubUrl: "https://github.com/Sagar-Bawankule/Electrical_vehical_prediction",
    liveUrl: "https://github.com/Sagar-Bawankule/Electrical_vehical_prediction",
    image: "/Elretrical_vehical.jpg",
    featured: false,
    category: "Data Science"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern, responsive, and animated portfolio built using Next.js and Tailwind CSS to showcase skills, projects, and background with clean UI and smooth animations.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Sagar-Bawankule/portfolio",
    liveUrl: "https://github.com/Sagar-Bawankule/portfolio",
    image: "/Portfolio.jpg",
    featured: false,
    category: "Web Development"
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'AI/ML', 'Web Development', 'Data Science']
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
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
              My Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing my technical expertise through innovative solutions
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-40 sm:h-48 lg:h-56 bg-gray-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    {project.featured && (
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md shrink-0">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white text-center py-2.5 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors touch-action-manipulation"
                    >
                      <Github size={16} className="inline mr-2" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-auto px-4 py-2.5 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors text-center touch-action-manipulation"
                    >
                      <ExternalLink size={16} className="inline mr-2" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/Sagar-Bawankule"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              <Github size={20} />
              View All Projects on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
