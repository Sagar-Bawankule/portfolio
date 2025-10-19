'use client'

import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink } from 'lucide-react'

const certifications = [
  {
    id: 1,
    title: 'AWS Technical Essentials',
    issuer: 'AWS Training & Certification',
    date: 'July 10, 2025',
    skills: ['Cloud Computing', 'AWS Services', 'Foundational Knowledge'],
    description: 'Core concepts of cloud computing and foundational knowledge of key AWS services.',
    certificateUrl: '/AWS%20Technical%20Essentials.pdf'
  },
  {
    id: 2,
    title: 'AI For All Program',
    issuer: 'Intel & Digital India',
    date: 'July 8, 2025',
    skills: ['Artificial Intelligence', 'Real-world Applications'],
    description: 'Fundamental principles of Artificial Intelligence and its real-world applications.',
    certificateUrl: '/AI%20For%20All%20Program.png'
  },
  {
    id: 3,
    title: 'PHP and MySQL Training',
    issuer: 'Spoken Tutorial Project, IIT Bombay',
    date: 'June 24, 2025',
    skills: ['PHP', 'MySQL', 'Server-side Web Development'],
    description: 'Server-side web development using the PHP language and MySQL database management.',
    certificateUrl: '/PHP%20and%20MySQL%20Training.pdf'
  },
  {
    id: 4,
    title: 'Introduction to Data Analytics',
    issuer: 'Simplilearn SkillUp',
    date: 'February 1, 2025',
    skills: ['Data Analytics', 'Trend Analysis', 'Data Insights'],
    description: 'The foundational process of analyzing data to identify trends and derive insights.',
    certificateUrl: '/Simplilearn%20Certificate.pdf'
  },
  {
    id: 5,
    title: 'Advanced Software Engineering Job Simulation',
    issuer: 'Walmart Global Tech & Forage',
    date: 'January 29, 2025',
    skills: ['Software Architecture', 'Advanced Data Structures', 'Database Design'],
    description: 'Practical skills in Software Architecture, Advanced Data Structures, and Database Design.',
    certificateUrl: '/Advanced%20Software%20Engineering%20Job%20Simulation.pdf'
  },
  {
    id: 6,
    title: 'Operations Job Simulation',
    issuer: 'Goldman Sachs & Forage',
    date: 'January 29, 2025',
    skills: ['Financial Operations', 'Transaction Processing', 'Corporate Setting'],
    description: 'Practical understanding of financial operations and transaction processing in a corporate setting.',
    certificateUrl: '/Operations%20Job%20Simulation.pdf'
  },
  {
    id: 7,
    title: 'Basics of Python',
    issuer: 'Infosys Springboard',
    date: 'January 27, 2025',
    skills: ['Python', 'Programming Principles', 'Syntax'],
    description: 'Core programming principles and fundamental syntax of the Python language.',
    certificateUrl: '/infosysspringboard.pdf'
  },
  {
    id: 8,
    title: 'RDBMS PostgreSQL Training',
    issuer: 'Spoken Tutorial Project, IIT Bombay',
    date: 'January 6, 2025',
    skills: ['PostgreSQL', 'Relational Databases', 'SQL'],
    description: 'Principles of Relational Databases and data management using PostgreSQL and SQL.',
    certificateUrl: '/RDBMS%20PostgreSQL%20Training.pdf'
  },
  {
    id: 9,
    title: 'The VR Evolution: Redefining Our Digital Experience',
    issuer: 'GH Raisoni College of Engineering, Nagpur',
    date: 'July 2, 2024',
    skills: ['Virtual Reality', 'Digital Experience'],
    description: 'Core concepts of Virtual Reality (VR) technology and its impact on digital experiences.',
    certificateUrl: '/The%20VR%20Evolution%20Redefining%20Our%20Digital%20Experience.pdf'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } }
}

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="section-heading text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            My Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional credentials and training that demonstrate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.03, boxShadow: '0 12px 40px rgba(59, 130, 246, 0.15)' }}
              className="relative border border-gray-200 rounded-xl p-5 flex flex-col gap-3 shadow-md hover:shadow-2xl hover:border-blue-300 transition-all duration-300 min-h-[210px] bg-white group"
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-1">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-900 text-base line-clamp-2 group-hover:text-blue-600 transition-colors">{cert.title}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                <span className="font-medium">{cert.issuer}</span>
                <span className="mx-1">•</span>
                <Calendar className="w-4 h-4 inline-block" />
                <span>{cert.date}</span>
              </div>
              {/* Description */}
              <div className="text-xs text-gray-700 mb-2 line-clamp-3">{cert.description}</div>
              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-100 text-cyan-900 border border-cyan-200">
                    {skill}
                  </span>
                ))}
              </div>
              {/* See Certificate Button */}
              {cert.certificateUrl && cert.certificateUrl !== '#' ? (
                <a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-700 to-fuchsia-700 text-white text-xs font-semibold shadow hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  See Certificate
                </a>
              ) : (
                <button
                  className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-200 text-gray-500 text-xs font-semibold cursor-not-allowed"
                  disabled
                >
                  <ExternalLink className="w-4 h-4" />
                  See Certificate
                </button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
