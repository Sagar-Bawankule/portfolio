'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Download, Mail, ArrowRight, Sparkles, Code, Brain, Zap, Target } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Mouse tracking for interactive effects - disabled on mobile
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 700 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Check if mobile for performance optimization
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Only add mouse tracking on desktop
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window
        
        setMousePosition({ x: clientX, y: clientY })
        mouseX.set(clientX - innerWidth / 2)
        mouseY.set(clientY - innerHeight / 2)
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', checkMobile)
      }
    }

    return () => window.removeEventListener('resize', checkMobile)
  }, [mouseX, mouseY, isMobile])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: isMobile ? 0.1 : 0.3,
        staggerChildren: isMobile ? 0.1 : 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.4 : 0.6,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: isMobile ? 2 : 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  // Reduced particles for better performance
  const particles = Array.from({ length: isMobile ? 8 : 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2,
    speed: Math.random() * 1.5 + 0.5,
    delay: Math.random() * 1
  }))

  // Floating tech icons - reduced on mobile
  const techIcons = [
    { Icon: Code, color: '#3b82f6', x: '10%', y: '20%' },
    { Icon: Brain, color: '#8b5cf6', x: '85%', y: '15%' },
    { Icon: Zap, color: '#f59e0b', x: '15%', y: '80%' },
    { Icon: Target, color: '#10b981', x: '80%', y: '75%' },
    { Icon: Sparkles, color: '#ec4899', x: '50%', y: '10%' },
  ].slice(0, isMobile ? 3 : 5)

  // Interactive connection lines - generate coordinates on client only
  const [lineCoords, setLineCoords] = useState<Array<{x1:number,y1:number,x2:number,y2:number}>>([])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const coords = Array.from({ length: isMobile ? 4 : 8 }, () => ({
        x1: Math.random() * window.innerWidth,
        y1: Math.random() * window.innerHeight,
        x2: Math.random() * window.innerWidth,
        y2: Math.random() * window.innerHeight,
      }))
      setLineCoords(coords)
    }
  }, [isMobile])

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 hero-section bg-gradient-to-br from-white via-cyan-100 to-blue-200"
      id="home"
      onMouseEnter={() => !isMobile && setIsHovering(true)}
      onMouseLeave={() => !isMobile && setIsHovering(false)}
    >
      {/* Enhanced interactive background */}
      <div className="absolute inset-0">
        
        {/* Interactive mesh gradient - disabled on mobile */}
        {!isMobile && (
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1), transparent 40%)`
            }}
            animate={{
              background: isHovering 
                ? `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 50%)`
                : `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.1), transparent 40%)`
            }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Animated geometric shapes - simplified */}
        <motion.div 
          className="absolute top-1/4 -left-12 w-24 h-24 bg-gradient-to-br from-blue-400/15 to-purple-400/15 rounded-full blur-xl"
          animate={{ 
            rotate: 360,
            scale: isHovering && !isMobile ? [1, 1.1, 1] : 1
          }}
          transition={{ 
            rotate: { duration: isMobile ? 15 : 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div 
          className="absolute top-3/4 -right-16 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.1, 1], 
            rotate: -360,
            x: isHovering && !isMobile ? [0, 5, 0] : 0
          }}
          transition={{ 
            duration: isMobile ? 12 : 15, 
            repeat: Infinity, 
            ease: "easeInOut",
            x: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-gradient-to-br from-indigo-400/15 to-blue-400/15 rounded-full blur-lg"
          animate={{ 
            y: [-3, 3, -3], 
            x: [-2, 2, -2],
            rotate: isHovering && !isMobile ? 90 : 0
          }}
          transition={{ 
            duration: isMobile ? 6 : 8, 
            repeat: Infinity, 
            ease: "easeInOut",
            rotate: { duration: 4, ease: "easeInOut" }
          }}
        />

        {/* Interactive floating particles - reduced on mobile */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: isHovering && !isMobile ? [1, 1.3, 1] : [1, 1.1, 1],
            }}
            transition={{
              duration: particle.speed,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}

        {/* Floating tech icons - reduced on mobile */}
        {techIcons.map((iconData, index) => {
          const IconComponent = iconData.Icon
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: iconData.x,
                top: iconData.y,
                color: iconData.color,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 0.5,
                y: [0, -12, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: isMobile ? 4 + index : 6 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              whileHover={{ 
                scale: 1.2, 
                opacity: 0.8,
                filter: "drop-shadow(0 0 8px currentColor)"
              }}
            >
              <IconComponent size={isMobile ? 16 + index : 20 + index * 2} />
            </motion.div>
          )
        })}

        {/* Interactive connection lines - reduced on mobile */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {lineCoords.map((coord, i) => (
            <motion.line
              key={i}
              x1={coord.x1}
              y1={coord.y1}
              x2={coord.x2}
              y2={coord.y2}
              stroke="url(#heroGradient)"
              strokeWidth="1"
              opacity="0.15"
              animate={{
                opacity: [0.15, 0.3, 0.15],
                strokeDasharray: ["0,1000", "1000,0", "0,1000"],
              }}
              transition={{
                duration: isMobile ? 8 + Math.random() * 3 : 10 + Math.random() * 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </svg>

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        {/* Interactive mouse trail effect - disabled on mobile */}
        {!isMobile && (
          <motion.div
            className="absolute w-6 h-6 rounded-full pointer-events-none"
            style={{
              left: mouseXSpring,
              top: mouseYSpring,
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
              filter: 'blur(6px)',
            }}
            animate={{
              scale: isHovering ? [1, 1.3, 1] : [1, 1.1, 1],
              opacity: isHovering ? [0.4, 0.8, 0.4] : [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {/* Animated wave effect - simplified */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-50/20 via-transparent to-transparent"
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scaleY: [1, 1.05, 1],
          }}
          transition={{
            duration: isMobile ? 3 : 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto"
        >
          {/* Left Column - Enhanced Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 rounded-full mb-6 border border-blue-300/30 shadow-sm">
                <motion.div 
                  className="w-2 h-2 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-medium text-blue-700">Available for opportunities</span>
                <Sparkles className="w-4 h-4 text-blue-600" />
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                <span className="text-gray-900">Hi, I'm </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient-text font-bold" style={{ WebkitTextFillColor: 'initial' }}>
                  Sagar
                </span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-8">
                AI & Software Developer
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-700 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Building intelligent solutions that make a difference. Passionate about AI, machine learning, and creating impactful software that transforms ideas into reality.
              </p>
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden btn-gradient-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Download className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">View Resume</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              
              <motion.a
                href="#contact"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group relative inline-flex items-center justify-center gap-3 bg-gray-200 border-2 border-cyan-700 text-cyan-900 px-8 py-4 rounded-full font-semibold shadow-md hover:shadow-xl hover:border-cyan-400 hover:text-cyan-700 transition-all duration-300"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Enhanced Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <motion.div
              className="relative mt-4 sm:mt-6 lg:mt-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Enhanced animated gradient ring */}
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full opacity-15 blur-lg"
                animate={{ 
                  rotate: 360,
                  scale: isHovering && !isMobile ? [1, 1.05, 1] : 1
                }}
                transition={{ 
                  rotate: { duration: isMobile ? 15 : 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              {/* Main image container - circular */}
              <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/80 backdrop-blur-sm">
                <Image
                  src="/profilephoto.webp"
                  alt="Sagar Bawankule"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  priority
                  sizes="(max-width: 475px) 256px, (max-width: 640px) 288px, (max-width: 768px) 320px, 384px"
                />
                
                {/* Enhanced hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/15 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </div>
              
              {/* Enhanced floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center"
                variants={floatingVariants}
                animate="animate"
                whileHover={{ scale: 1.1, rotate: 90 }}
              >
                <Sparkles className="w-4 h-4 text-blue-900" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full shadow-lg"
                animate={{
                  y: [3, -3, 3],
                  scale: [1, 1.1, 1],
                  rotate: isHovering && !isMobile ? 180 : 0,
                }}
                transition={{
                  duration: isMobile ? 2 : 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                  rotate: { duration: 2, ease: "linear" }
                }}
              />

              {/* Professional badge */}
              <motion.div
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-gray-900 rounded-full px-3 py-1 shadow-lg border border-white/20"
                initial={{ scale: 0, rotate: 8 }}
                animate={{ scale: 1, rotate: -3 }}
                transition={{ delay: 0.8, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
              >
                <div className="flex items-center space-x-1">
                  <motion.div 
                    className="w-1.5 h-1.5 bg-blue-900 rounded-full"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs font-semibold">AI Dev</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
