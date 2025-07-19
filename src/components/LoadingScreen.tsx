'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useIsClient } from '@/hooks/useIsClient'

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState('Initializing')
  const isClient = useIsClient()

  const loadingSteps = [
    'Initializing',
    'Loading components',
    'Setting up workspace',
    'Preparing portfolio',
    'Almost ready'
  ]

  // Initialize particles only on client side to avoid hydration mismatch
  const [particles, setParticles] = useState<Array<{x: number, y: number, delay: number, duration: number}>>([])

  useEffect(() => {
    // Generate particles on client side only
    if (isClient) {
      const generateParticles = () => {
        return Array(20).fill(0).map(() => ({
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 2 + Math.random() * 2
        }))
      }

      setParticles(generateParticles())
    }
  }, [isClient])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1.5
        
        // Update loading text based on progress
        if (newProgress >= 20 && newProgress < 40) {
          setLoadingText(loadingSteps[1])
        } else if (newProgress >= 40 && newProgress < 60) {
          setLoadingText(loadingSteps[2])
        } else if (newProgress >= 60 && newProgress < 80) {
          setLoadingText(loadingSteps[3])
        } else if (newProgress >= 80) {
          setLoadingText(loadingSteps[4])
        }

        if (newProgress >= 100) {
          clearInterval(interval)
          return 100
        }
        return newProgress
      })
    }, 40)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 z-50 flex items-center justify-center"
      exit={{ 
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)"
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Particles */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [-10, -30, -10],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      )}

      <div className="text-center relative z-10 px-4">
        {/* Animated Logo/Name */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Animated Circle Background */}
          <motion.div
            className="relative inline-block"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 mb-4">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SB
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Sagar Bawankule
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-500 mt-2 text-sm md:text-base"
          >
            AI & Software Developer
          </motion.p>
        </motion.div>

        {/* Enhanced Progress Bar */}
        <div className="w-full max-w-xs md:max-w-sm mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">{loadingText}</span>
            <span className="text-sm font-mono text-gray-500">{Math.round(progress)}%</span>
          </div>
          
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-full relative"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Enhanced Animated Dots */}
        <div className="flex justify-center space-x-3 mt-8">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Inspirational Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            delay: 1 
          }}
          className="text-gray-400 text-xs md:text-sm mt-6 max-w-xs mx-auto"
        >
          "Building the future, one line of code at a time"
        </motion.p>
      </div>
    </motion.div>
  )
}
