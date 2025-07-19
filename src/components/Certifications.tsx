'use client'

import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "December 2024",
    credentialId: "AWS-SAA-2024-12345",
    verifyUrl: "#",
    status: "Active",
    description: "Demonstrated expertise in designing distributed systems and architectures on AWS.",
    logo: "🏛️",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: 2,
    title: "Google Cloud Professional ML Engineer",
    issuer: "Google Cloud",
    date: "November 2024",
    credentialId: "GCP-ML-2024-67890",
    verifyUrl: "#",
    status: "Active",
    description: "Certified in designing and implementing ML solutions using Google Cloud Platform.",
    logo: "☁️",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 3,
    title: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "October 2024",
    credentialId: "MS-AI-2024-11111",
    verifyUrl: "#",
    status: "Active",
    description: "Foundational knowledge of AI and machine learning concepts on Azure.",
    logo: "🔷",
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: 4,
    title: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    date: "September 2024",
    credentialId: "TF-DEV-2024-22222",
    verifyUrl: "#",
    status: "Active",
    description: "Proficiency in using TensorFlow to solve deep learning and ML problems.",
    logo: "🧠",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 5,
    title: "Meta React Developer Certificate",
    issuer: "Meta (Coursera)",
    date: "August 2024",
    credentialId: "META-REACT-2024-33333",
    verifyUrl: "#",
    status: "Active",
    description: "Comprehensive React development skills including hooks, state management, and testing.",
    logo: "⚛️",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    id: 6,
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "July 2024",
    credentialId: "DOCKER-DCA-2024-44444",
    verifyUrl: "#",
    status: "Active",
    description: "Containerization expertise with Docker including orchestration and deployment.",
    logo: "🐳",
    color: "from-blue-400 to-blue-500"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in cloud computing, AI/ML, and software development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${cert.color}`} />
              
              {/* Logo and Status */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl bg-gray-50 p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {cert.logo}
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-green-600">{cert.status}</span>
                  </div>
                </div>
              </div>

              {/* Certificate Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-blue-600 font-semibold mb-3">
                {cert.issuer}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {cert.description}
              </p>

              {/* Date and Credential ID */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Issued: {cert.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Award className="w-4 h-4" />
                  <span className="font-mono text-xs">{cert.credentialId}</span>
                </div>
              </div>

              {/* Verify Button */}
              <motion.a
                href={cert.verifyUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group/button"
              >
                <ExternalLink className="w-4 h-4 group-hover/button:rotate-12 transition-transform duration-300" />
                <span className="font-medium">Verify Certificate</span>
              </motion.a>

              {/* Animated border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent"
                whileHover={{
                  borderColor: "rgba(59, 130, 246, 0.3)",
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-4xl font-bold text-blue-600 mb-2"
              >
                6+
              </motion.div>
              <p className="text-gray-600">Active Certifications</p>
            </div>
            
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-4xl font-bold text-purple-600 mb-2"
              >
                3
              </motion.div>
              <p className="text-gray-600">Cloud Platforms</p>
            </div>
            
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-4xl font-bold text-green-600 mb-2"
              >
                100%
              </motion.div>
              <p className="text-gray-600">Pass Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
