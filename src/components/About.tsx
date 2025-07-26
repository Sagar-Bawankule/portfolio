'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle, Code, Brain, Zap, ArrowRight } from 'lucide-react'

export default function About() {
  const highlights = [
    "Full-stack development with modern technologies",
    "AI/ML model development and deployment",
    "Cloud infrastructure and DevOps practices",
    "Problem-solving and analytical thinking"
  ]

  const skills = [
    { icon: Code, title: "Software Development", desc: "Building scalable applications with clean architecture" },
    { icon: Brain, title: "AI & Machine Learning", desc: "Developing intelligent solutions for real-world problems" },
    { icon: Zap, title: "Performance Optimization", desc: "Creating fast, efficient, and user-friendly applications" }
  ]

  return (
    <section id="about" className="py-32 px-6 bg-black">
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
            <span className="text-sm font-light tracking-widest text-gray-400">ABOUT</span>
            <div className="w-16 h-px bg-white"></div>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6">
            THE STORY
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A passionate developer focused on creating intelligent solutions that make a real impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Content - Magazine Style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-12"
          >
            {/* Main Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">WHO I AM</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a dedicated AI & Software Developer with a passion for building innovative solutions 
                  that bridge the gap between cutting-edge technology and practical applications. My journey 
                  in software development has been driven by curiosity and a desire to solve complex problems.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Currently pursuing my education while working on real-world projects, I specialize in 
                  full-stack development, machine learning, and creating intelligent systems that can 
                  adapt and learn from data.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-6">
                <h4 className="text-2xl font-bold">WHAT I BRING</h4>
                <div className="grid gap-4">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200 group"
              >
                <span className="text-lg font-semibold">VIEW MY WORK</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-12"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative w-80 h-96 overflow-hidden">
                  <Image
                    src="/profilephoto.jpg"
                    alt="Sagar Bawankule"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 320px, 384px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                
                {/* Magazine-style accent elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-600"></div>
              </div>
            </div>

            {/* Skills Cards */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-center">EXPERTISE</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={skill.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors duration-200"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white text-black">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h5 className="font-semibold text-white mb-2">{skill.title}</h5>
                          <p className="text-sm text-gray-400">{skill.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
