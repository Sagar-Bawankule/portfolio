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
    // Generate particles on client side only - reduced count for performance
    if (isClient) {
      const generateParticles = () => {
        return Array(12).fill(0).map(() => ({ // Reduced from 20 to 12
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 1.5, // Reduced delay
          duration: 1.5 + Math.random() * 1.5 // Reduced duration
        }))
      }

      setParticles(generateParticles())
    }
  }, [isClient])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2 // Faster progress (was 1.5)
        
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
    }, 30) // Faster interval (was 40)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 z-50 flex items-center justify-center"
      exit={{ 
        opacity: 0,
        scale: 0.9, // Reduced scale effect
        filter: "blur(5px)" // Reduced blur
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }} // Faster exit
    >
      {/* Background Particles - simplified */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-400/15 rounded-full" // Smaller particles, less opacity
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
              animate={{
                y: [-8, -20, -8], // Reduced movement
                opacity: [0.15, 0.6, 0.15], // Reduced opacity
                scale: [1, 1.3, 1], // Reduced scale
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
          initial={{ scale: 0.8, opacity: 0, y: 15 }} // Reduced initial scale and movement
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }} // Faster animation
          className="mb-6" // Reduced margin
        >
          {/* Animated Circle Background */}
          <motion.div
            className="relative inline-block"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }} // Faster rotation
          >
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 mb-3"> {/* Smaller size */}
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> {/* Smaller text */}
                  SB
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ y: 15, opacity: 0 }} // Reduced movement
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }} // Faster animation
            className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" // Smaller text
          >
            Sagar Bawankule
          </motion.h1>
          
          <motion.p
            initial={{ y: 15, opacity: 0 }} // Reduced movement
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }} // Faster animation
            className="text-gray-500 mt-1 text-sm md:text-base" // Reduced margin
          >
            AI & Software Developer
          </motion.p>
        </motion.div>

        {/* Enhanced Progress Bar */}
        <div className="w-full max-w-xs md:max-w-sm mx-auto mb-4"> {/* Reduced margin */}
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
              {/* Shimmer Effect - simplified */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" // Reduced opacity
                animate={{ x: ['-100%', '100%'] }}
                transition={{
                  duration: 2, // Slower shimmer
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Enhanced Animated Dots - simplified */}
        <div className="flex justify-center space-x-2 mt-6"> {/* Reduced spacing and margin */}
          {[0, 1, 2].map((i) => ( // Reduced from 4 to 3 dots
            <motion.div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" // Smaller dots
              animate={{
                scale: [1, 1.2, 1], // Reduced scale
                opacity: [0.4, 0.8, 0.4], // Reduced opacity range
              }}
              transition={{
                duration: 1, // Faster animation
                repeat: Infinity,
                delay: i * 0.2, // Increased delay
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Inspirational Text - simplified */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0] }} // Reduced opacity
          transition={{ 
            duration: 2.5, // Faster cycle
            repeat: Infinity,
            delay: 0.5 // Reduced delay
          }}
          className="text-gray-400 text-xs md:text-sm mt-4 max-w-xs mx-auto" // Reduced margin
        >
          "Building the future, one line of code at a time"
        </motion.p>
      </div>
    </motion.div>
  )
}
