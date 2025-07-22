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

  useEffect(() => {
    // Initialize floating orbs
    const orbColors = [
      'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)',
      'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
    ]

    const initialOrbs: FloatingOrb[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 200 + 100,
      color: orbColors[Math.floor(Math.random() * orbColors.length)],
      speed: Math.random() * 0.5 + 0.2,
      delay: Math.random() * 2
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

    const initialIcons: FloatingIcon[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      icon: iconData[i].icon,
      size: Math.random() * 20 + 15,
      color: iconData[i].color,
      delay: Math.random() * 2
    }))

    // Generate random connection lines only on client
    if (typeof window !== 'undefined') {
      const lines = Array.from({ length: 6 }, () => ({
        x1: Math.random() * window.innerWidth,
        y1: Math.random() * window.innerHeight,
        x2: Math.random() * window.innerWidth,
        y2: Math.random() * window.innerHeight,
      }))
      setConnectionLines(lines)
    }

    setFloatingOrbs(initialOrbs)
    setFloatingIcons(initialIcons)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/50" />
      
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-400/10 via-transparent to-blue-400/10 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-tl from-cyan-400/10 via-transparent to-pink-400/10 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tr from-emerald-400/10 via-transparent to-yellow-400/10 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating orbs */}
      {floatingOrbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-xl"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: orb.color,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 60, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20 + orb.speed * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Floating icons */}
      {floatingIcons.map((iconData) => {
        const IconComponent = iconData.icon
        
        return (
          <motion.div
            key={iconData.id}
            className="absolute"
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
            animate={{ 
              scale: 1, 
              opacity: 0.6,
              rotate: 360,
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: iconData.delay,
            }}
          >
            <IconComponent 
              size={iconData.size} 
              className="drop-shadow-lg"
            />
          </motion.div>
        )
      })}

      {/* Geometric patterns */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-purple-300/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-32 w-24 h-24 border border-blue-300/20 rounded-lg"
        animate={{
          scale: [1, 0.7, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-40 h-40 border border-cyan-300/20"
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        }}
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Connection lines */}
      {connectionLines.length > 0 && (
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
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
              opacity="0.3"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                strokeDasharray: ["0,1000", "1000,0", "0,1000"],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 3,
              }}
            />
          ))}
        </svg>
      )}

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Wave effect at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-50/20 via-transparent to-transparent"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scaleY: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

export default FloatingElements