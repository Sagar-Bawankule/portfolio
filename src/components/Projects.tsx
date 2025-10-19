'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Users, Calendar, Brain, Leaf, Zap, Monitor } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "AI Interview Question Generator & Evaluator",
    description: "A full-stack web app built using Flask and Hugging Face models to help users prepare for technical interviews with AI-generated questions and intelligent answer evaluation.",
    technologies: ["Python", "Flask", "Hugging Face", "javascript", "html", "css", "Sentence Transformers", "Bootstrap",],
    githubUrl: "https://github.com/Sagar-Bawankule/AI-Interview-Question-Generator",
    liveUrl: "https://ai-interview-question-generator-vl2w.onrender.com",
    image: "/AIQuestion.jpg",
    featured: true,
    icon: Brain,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    title: "FarmCareAI",
    description: "An intelligent platform for crop recommendations and plant disease detection using AI. Features crop suggestion system and plant disease detection via image input.",
    technologies: ["React", "TypeScript", "Flask", "Tailwind CSS", "Supabase","Machine Learning","Pandas","Numpy","Scikit-learn"],
    githubUrl: "https://github.com/Sagar-Bawankule/FarmCareAi",
    liveUrl: "https://github.com/Sagar-Bawankule/FarmCareAi",
    image: "/Farmcare.jpg",
    featured: true,
    icon: Leaf,
    color: "from-green-500 to-emerald-500",
    status: "In Progress"
  },
  {
    id: 3,
    title: "Electric Vehicle Adoption Forecasting System",
    description: "A machine learning project that predicts EV adoption trends across the U.S. using historical data from 2017–2024 with forecasting using 4 ML models.",
    technologies: ["Python", "Pandas", "scikit-learn", "Matplotlib", "Seaborn","Machine Learning","Plotly","Streamlit","Joblib"],
    githubUrl: "https://github.com/Sagar-Bawankule/Electrical_vehical_prediction",
    liveUrl: "https://github.com/Sagar-Bawankule/Electrical_vehical_prediction",
    image: "/Elretrical_vehical.jpg",
    featured: true,
    icon: Zap,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 4,
    title: "Sagar Bawankule – Portfolio Website",
    description: "A modern, responsive, and animated portfolio built using Next.js and Tailwind CSS to showcase skills, projects, and background with clean UI and smooth animations.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
    githubUrl: "https://github.com/Sagar-Bawankule/portfolio",
    liveUrl: "https://github.com/Sagar-Bawankule/portfolio",
    image: "/Portfolio.jpg",
    featured: false,
    icon: Monitor,
    color: "from-indigo-500 to-purple-500"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const projectVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
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

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-purple-50/20 to-blue-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-black">
            Featured Projects
          </h2>
          <p className="section-subheading text-gray-700">
            A showcase of my latest work in AI, web development, and software engineering. 
            Each project demonstrates my passion for creating innovative solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch"
        >
          {featuredProjects.map((project) => {
            const IconComponent = project.icon || ExternalLink
            return (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group relative professional-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-800 bg-gray-900 h-full flex flex-col"
              >
                {/* Project Image Placeholder */}
                <div className={`h-48 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden`}>
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-80 z-0"
                    style={{ zIndex: 0 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Featured
                  </div>

                  {/* Status Badge for In Progress projects */}
                  {project.status && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {project.status}
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                </div>

                <div className="p-6 relative z-10 flex flex-col h-full flex-1">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-200 text-black text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex-1 justify-center"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                    
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 flex-1 justify-center"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent"
                  whileHover={{
                    borderColor: "rgba(59, 130, 246, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-black mb-8 text-center">
              More Projects
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group professional-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-800 bg-gray-900 h-full flex flex-col"
                >
                  {/* Project Image Placeholder */}
                  <div className="h-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-center opacity-80 z-0"
                      style={{ zIndex: 0 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-100">{project.title.charAt(0)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col h-full flex-1">
                    <h4 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-200 text-black text-xs rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors duration-200 flex-1 justify-center"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </motion.a>
                      
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 px-3 py-1.5 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors duration-200 flex-1 justify-center"
                      >
                        <ExternalLink size={14} />
                        <span>Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/sagarbawankule"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            <span>View All Projects on GitHub</span>
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
