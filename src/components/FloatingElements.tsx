'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const FloatingElements = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Return minimal elements on mobile for better performance
  if (isMobile) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Very minimal background decoration for mobile */}
        <div className="absolute top-20 right-6 w-12 h-12 bg-blue-500/8 rounded-full blur-lg" />
        <div className="absolute bottom-20 left-6 w-16 h-16 bg-purple-500/8 rounded-full blur-lg" />
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-indigo-500/6 rounded-full blur-md" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Colorful animated floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-8 h-8 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-16 w-6 h-6 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full"
        animate={{
          y: [0, 20, 0],
          x: [0, -12, 0],
          opacity: [0.5, 0.9, 0.5],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-gradient-to-r from-emerald-500/35 to-teal-500/35 rounded-full"
        animate={{
          y: [0, -15, 0],
          x: [0, 20, 0],
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <motion.div
        className="absolute top-2/3 left-20 w-4 h-4 bg-gradient-to-r from-yellow-500/40 to-orange-500/40 rounded-full"
        animate={{
          y: [0, 18, 0],
          x: [0, -8, 0],
          opacity: [0.6, 1, 0.6],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      {/* Colorful geometric shapes */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-lg"
        style={{
          borderImage: 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(99, 102, 241, 0.3)) 1',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-8 h-8 border-2 border-purple-400/40 rounded-full"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.25, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Flowing colorful lines */}
      <motion.svg
        className="absolute top-1/4 left-1/4 w-32 h-32 opacity-20"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <motion.path
          d="M10,30 Q30,10 50,30 Q70,50 90,30"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
      
      {/* Additional colorful accent dots */}
      <motion.div
        className="absolute top-40 right-40 w-2 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-40 w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.9, 0.5],
          rotate: [0, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  )
}

export default FloatingElements
