'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Brain, Leaf, Zap, Monitor, ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "AI Interview Question Generator",
    description: "A full-stack web app that generates technical interview questions using AI and evaluates answers intelligently.",
    technologies: ["Python", "Flask", "Hugging Face", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/Sagar-Bawankule/AI-Interview-Question-Generator",
    liveUrl: "https://ai-interview-question-generator-vl2w.onrender.com",
    image: "/AIQuestion.jpg",
    featured: true,
    icon: Brain,
    color: "bg-white",
    year: "2024"
  },
  {
    id: 2,
    title: "FarmCareAI",
    description: "Intelligent platform for crop recommendations and plant disease detection using AI and machine learning.",
    technologies: ["React", "TypeScript", "Flask", "Tailwind CSS", "Supabase", "ML"],
    githubUrl: "https://github.com/Sagar-Bawankule/FarmCareAi",
    liveUrl: "https://github.com/Sagar-Bawankule/FarmCareAi",
    image: "/Farmcare.jpg",
    featured: true,
    icon: Leaf,
    color: "bg-red-600",
    year: "2024",
    status: "In Progress"
  },
  {
    id: 3,
    title: "EV Adoption Forecasting",
    description: "Machine learning project predicting EV adoption trends across the U.S. using historical data analysis.",
    technologies: ["Python", "Pandas", "scikit-learn", "Matplotlib", "Streamlit"],
    githubUrl: "https://github.com/Sagar-Bawankule/Electrical_vehical_prediction",
    liveUrl: "https://github.com/Sagar-Bawankule/Electrical_vehical_prediction",
    image: "/Elretrical_vehical.jpg",
    featured: true,
    icon: Zap,
    color: "bg-white",
    year: "2024"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio built with Next.js and Tailwind CSS showcasing skills and projects.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Sagar-Bawankule/portfolio",
    liveUrl: "https://github.com/Sagar-Bawankule/portfolio",
    image: "/Portfolio.jpg",
    featured: false,
    icon: Monitor,
    color: "bg-white",
    year: "2024"
  }
]

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-32 px-6 bg-black text-white">
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
            <div className="w-16 h-px bg-white"></div>
            <span className="text-sm font-light tracking-widest text-gray-400">PROJECTS</span>
            <div className="w-16 h-px bg-white"></div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            FEATURED WORK
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my latest work in AI, web development, and software engineering
          </p>
        </motion.div>

        {/* Featured Projects - Magazine Layout */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => {
            const IconComponent = project.icon
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  {/* Left - Project Info */}
                  <div className="lg:col-span-6 space-y-8">
                    {/* Project Header */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${project.color} p-3 flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <div className="text-sm font-bold tracking-wider text-gray-400">
                            {project.year}
                          </div>
                          {project.status && (
                            <div className="text-xs text-red-400 font-medium">
                              {project.status}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <h3 className="text-4xl font-bold leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold">Technologies Used</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-white/10 text-white text-sm border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2"
                      >
                        <Github size={16} />
                        <span>VIEW CODE</span>
                      </a>
                      
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-200 flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        <span>LIVE DEMO</span>
                      </a>
                    </div>
                  </div>

                  {/* Right - Project Image */}
                  <div className="lg:col-span-6">
                    <div className="relative">
                      <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </div>
                      
                      {/* Magazine-style overlay elements */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-white text-black p-3">
                        <div className="text-xs font-bold">FEATURED</div>
                      </div>
                      
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-red-600 text-white p-2">
                        <div className="text-xs font-bold">AI</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting line */}
                {index < featuredProjects.length - 1 && (
                  <div className="hidden lg:block absolute left-6 top-full w-px h-20 bg-white/20 mt-10"></div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">OTHER PROJECTS</h3>
              <div className="w-16 h-px bg-white mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => {
                const IconComponent = project.icon
                
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-200"
                  >
                    {/* Project Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-10 h-10 ${project.color} p-2 flex items-center justify-center`}>
                        <IconComponent className="w-5 h-5 text-black" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{project.title}</h4>
                        <div className="text-sm text-gray-400">{project.year}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 text-white text-xs border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-white/10 text-white text-xs border border-white/20">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 text-sm"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                      
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 text-sm"
                      >
                        <ExternalLink size={14} />
                        <span>Demo</span>
                      </a>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/Sagar-Bawankule"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-white hover:text-gray-300 transition-colors duration-200 group"
          >
            <span className="text-lg font-semibold">VIEW ALL PROJECTS ON GITHUB</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
