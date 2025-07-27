'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Sparkles, Star, Heart, Zap, Target, Circle, Square, Triangle } from 'lucide-react'

interface FloatingOrb {
  id: number
  x: number
  y: number
  size: number
  color: string
  speed: number
  delay: number
}

interface FloatingIcon {
  id: number
  x: number
  y: number
  icon: React.ComponentType<any>
  size: number
  color: string
  delay: number
}

const FloatingElements = () => {
  const [floatingOrbs, setFloatingOrbs] = useState<FloatingOrb[]>([])
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([])
  const [connectionLines, setConnectionLines] = useState<Array<{x1:number,y1:number,x2:number,y2:number}>>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile for performance optimization
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    // Reduce number of elements on mobile for better performance
    const orbCount = isMobile ? 6 : 12
    const iconCount = isMobile ? 4 : 8
    const lineCount = isMobile ? 3 : 6

    // Initialize floating orbs
    const orbColors = [
      'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)',
    ]

    const initialOrbs: FloatingOrb[] = Array.from({ length: orbCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * (isMobile ? 100 : 200) + (isMobile ? 50 : 100),
      color: orbColors[Math.floor(Math.random() * orbColors.length)],
      speed: Math.random() * 0.3 + 0.1, // Reduced speed
      delay: Math.random() * 1 // Reduced delay
    }))

    // Initialize floating icons
    const iconData = [
      { icon: Sparkles, color: '#9333ea' },
      { icon: Star, color: '#3b82f6' },
      { icon: Heart, color: '#ec4899' },
      { icon: Zap, color: '#f59e0b' },
      { icon: Target, color: '#10b981' },
      { icon: Circle, color: '#8b5cf6' },
      { icon: Square, color: '#06b6d4' },
      { icon: Triangle, color: '#f97316' },
    ]

    const initialIcons: FloatingIcon[] = Array.from({ length: iconCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      icon: iconData[i].icon,
      size: Math.random() * (isMobile ? 15 : 20) + (isMobile ? 10 : 15),
      color: iconData[i].color,
      delay: Math.random() * 1
    }))

    // Generate random connection lines only on client
    if (typeof window !== 'undefined') {
      const lines = Array.from({ length: lineCount }, () => ({
        x1: Math.random() * window.innerWidth,
        y1: Math.random() * window.innerHeight,
        x2: Math.random() * window.innerWidth,
        y2: Math.random() * window.innerHeight,
      }))
      setConnectionLines(lines)
    }

    setFloatingOrbs(initialOrbs)
    setFloatingIcons(initialIcons)

    return () => window.removeEventListener('resize', checkMobile)
  }, [isMobile])

  // Optimized animation variants
  const orbVariants = {
    animate: {
      x: [0, 30, -20, 0],
      y: [0, -30, 40, 0],
      scale: [1, 1.1, 0.9, 1],
      opacity: [0.2, 0.4, 0.2],
    }
  }

  const iconVariants = {
    animate: { 
      scale: 1, 
      opacity: 0.5,
      rotate: 360,
      y: [0, -20, 0],
      x: [0, 15, 0],
    }
  }

  const geometricVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
    }
  }

  const waveVariants = {
    animate: {
      opacity: [0.1, 0.2, 0.1],
      scaleY: [1, 1.05, 1],
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30" />
      
      {/* Animated mesh gradient overlay - reduced opacity */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/5 via-transparent to-blue-400/5 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-tl from-cyan-400/5 via-transparent to-pink-400/5 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tr from-emerald-400/5 via-transparent to-yellow-400/5 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating orbs - optimized for performance */}
      {floatingOrbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-xl animate-optimized"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: orb.color,
          }}
          variants={orbVariants}
          animate="animate"
          transition={{
            duration: isMobile ? 15 : 20 + orb.speed * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Floating icons - reduced on mobile */}
      {floatingIcons.map((iconData) => {
        const IconComponent = iconData.icon
        
        return (
          <motion.div
            key={iconData.id}
            className="absolute animate-optimized"
            style={{
              left: iconData.x,
              top: iconData.y,
              color: iconData.color,
            }}
            initial={{ 
              scale: 0, 
              opacity: 0,
              rotate: 0
            }}
            variants={iconVariants}
            animate="animate"
            transition={{
              duration: isMobile ? 6 : 8 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: iconData.delay,
            }}
          >
            <IconComponent 
              size={iconData.size} 
              className="drop-shadow-sm"
            />
          </motion.div>
        )
      })}

      {/* Geometric patterns - simplified */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-purple-300/15 rounded-full"
        variants={geometricVariants}
        animate="animate"
        transition={{
          duration: isMobile ? 10 : 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-32 w-24 h-24 border border-blue-300/15 rounded-lg"
        variants={geometricVariants}
        animate="animate"
        transition={{
          duration: isMobile ? 8 : 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-40 h-40 border border-cyan-300/15"
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        }}
        variants={geometricVariants}
        animate="animate"
        transition={{
          duration: isMobile ? 12 : 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Connection lines - reduced on mobile */}
      {connectionLines.length > 0 && (
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {connectionLines.map((line, i) => (
            <motion.line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              opacity="0.2"
              animate={{
                opacity: [0.2, 0.3, 0.2],
                strokeDasharray: ["0,1000", "1000,0", "0,1000"],
              }}
              transition={{
                duration: isMobile ? 6 : 8 + Math.random() * 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </svg>
      )}

      {/* Subtle glow effects - reduced opacity */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/3 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-400/3 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Dot pattern overlay - reduced opacity */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Wave effect at bottom - simplified */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-50/10 via-transparent to-transparent"
        variants={waveVariants}
        animate="animate"
        transition={{
          duration: isMobile ? 4 : 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

export default FloatingElements