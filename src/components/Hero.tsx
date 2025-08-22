'use client'

import { Download, Mail, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative pt-20 hero-dark"
      id="home"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-slate-200 text-sm font-medium">Available for work</span>
              </div>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  Hi, I'm{' '}
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-black">
                  Sagar Bawankule
                </span>
              </h1>
            </div>

            <div>
              <p className="text-xl sm:text-2xl text-slate-300 mb-8 leading-relaxed font-light">
                Full Stack Developer & UI/UX Designer crafting digital experiences
                that blend innovation with functionality.
              </p>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-3">
                  <Download className="w-5 h-5" />
                  Download Resume
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="group bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 hover:border-white/30 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-3">
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </button>
              </div>
            </div>

            <div>
              <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
                <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-slate-300 text-sm font-medium">
                  React
                </span>
                <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-slate-300 text-sm font-medium">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-slate-300 text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-slate-300 text-sm font-medium">
                  Node.js
                </span>
                <span className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-slate-300 text-sm font-medium">
                  MongoDB
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl"></div>
                
                <div className="absolute inset-4 rounded-2xl overflow-hidden">
                  <Image
                    src="/profilephoto.webp"
                    alt="Sagar Bawankule"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
