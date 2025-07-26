'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Sagar-Bawankule',
    icon: Github
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sagar-bawankule-856a79264/',
    icon: Linkedin
  },
  {
    name: 'Email',
    url: 'mailto:sagarbawankule334@gmail.com',
    icon: Mail
  }
]

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
]

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  SAGAR BAWANKULE
                </span>
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                AI & Software Developer passionate about creating intelligent solutions 
                that bridge the gap between cutting-edge technology and real-world applications.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">CONNECT</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-white p-3 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                    >
                      <IconComponent className="w-6 h-6 text-black" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 space-y-6"
          >
            <h4 className="text-lg font-semibold">NAVIGATION</h4>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-gray-400 hover:text-white transition-colors duration-200 py-2"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-4 space-y-6"
          >
            <h4 className="text-lg font-semibold">CONTACT</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <a 
                  href="mailto:sagarbawankule334@gmail.com"
                  className="text-white hover:text-gray-300 transition-colors duration-200"
                >
                  sagarbawankule334@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Location</p>
                <p className="text-white">Nagpur, Maharashtra, India</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Availability</p>
                <p className="text-white">Open to new opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Sagar Bawankule. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
