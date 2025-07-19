'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useIsClient } from '@/hooks/useIsClient'

export default function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<any[]>([])
  const isClient = useIsClient()

  // Generate particles only on client side to avoid hydration mismatch
  useEffect(() => {
    if (isClient) {
      const generateParticles = () => {
        return Array(20).fill(0).map((_, i) => ({
          id: i,
          size: Math.random() * 8 + 3,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * 5 + 8,
          delay: Math.random() * 3,
        }))
      }

      setParticles(generateParticles())
    }
  }, [isClient])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Don't render particles until mounted on client
  if (!isClient) {
    return <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" />
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-blue-400/60 to-purple-500/60 backdrop-blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            rotate: [0, 360],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Mouse Following Elements */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`mouse-${i}`}
          className="absolute w-2 h-2 rounded-full bg-blue-300/80"
          animate={{
            x: mousePosition.x - 100 + i * 30,
            y: mousePosition.y - 50 + i * 15,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 15,
            delay: i * 0.08
          }}
        />
      ))}

      {/* Large Gradient Blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/40 to-purple-600/40 rounded-full mix-blend-screen blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full mix-blend-screen blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          rotate: [360, 180, 0],
          x: [0, -30, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Animated SVG Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-60">
        <motion.path
          d="M0,150 Q200,100 400,150 T800,150"
          stroke="url(#grad1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>

      {/* Geometric Decorations */}
      <motion.div
        className="absolute bottom-8 left-8 w-20 h-20 opacity-40"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <svg viewBox="0 0 100 100" className="text-blue-400">
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="251"
            initial={{ strokeDashoffset: 251 }}
            animate={{ strokeDashoffset: [251, 0, 251] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.polygon
            points="50,20 70,60 30,60"
            fill="currentColor"
            opacity="0.4"
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ transformOrigin: "50px 50px" }}
          />
        </svg>
      </motion.div>

      {/* Corner Accent */}
      <motion.div
        className="absolute top-8 right-8 w-12 h-12 opacity-40"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 0.4, rotate: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-full h-full border-2 border-purple-300 rounded rotate-45 relative">
          <motion.div
            className="absolute inset-1 bg-gradient-to-br from-blue-400 to-purple-400 rounded-sm"
            animate={{
              scale: [0.8, 1.1, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}