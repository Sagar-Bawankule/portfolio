'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
          {/* Left Content - Magazine Style */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Magazine Header */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-16 h-px bg-white"></div>
                <span className="text-sm font-light tracking-widest text-gray-400">PORTFOLIO 2024</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-6xl lg:text-8xl font-bold leading-none"
              >
                SAGAR
                <br />
                <span className="text-gray-400">BAWANKULE</span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl lg:text-3xl font-light text-gray-300">
                AI & Software Developer
              </h2>
              <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                Building intelligent solutions that bridge the gap between cutting-edge technology and real-world applications.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold">3+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-8"
            >
              <button
                onClick={scrollToNext}
                className="px-8 py-4 bg-white text-black font-semibold hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2"
              >
                <span>EXPLORE WORK</span>
                <ArrowDown className="w-4 h-4" />
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white text-white font-semibold hover:bg-white hover:text-black transition-all duration-200 flex items-center gap-2"
              >
                <span>RESUME</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image with Magazine Layout */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src="/profilephoto.jpg"
                  alt="Sagar Bawankule"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
              
              {/* Magazine-style overlay elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white text-black p-4">
                <div className="text-xs font-bold tracking-wider">AI DEVELOPER</div>
                <div className="text-2xl font-bold mt-1">2024</div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-red-600 text-white p-3">
                <div className="text-xs font-bold">FEATURED</div>
                <div className="text-sm">PROJECTS</div>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center gap-6 mt-12"
            >
              <a
                href="https://github.com/Sagar-Bawankule"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-black hover:bg-gray-200 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sagar-bawankule-856a79264/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white text-black hover:bg-gray-200 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:sagarbawankule334@gmail.com"
                className="p-3 bg-white text-black hover:bg-gray-200 transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={scrollToNext}
          className="p-4 border border-white/20 hover:border-white transition-colors duration-200"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  )
}
