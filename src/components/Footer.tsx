'use client'

import { Heart, ArrowUp, Github, Linkedin, Mail, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '@/context/ThemeContext'

const Footer = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sagar-Bawankule', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sagar-bawankule-856a79264/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/thee_sagar_', label: 'Instagram' },
    { icon: Mail, href: 'mailto:sagarbawankule334@gmail.com', label: 'Email' }
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className={`relative overflow-hidden border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sagar Bawankule
              </h3>
            </div>
            <p className={`text-lg leading-relaxed mb-8 max-w-md ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
              AI & Software Developer passionate about creating exceptional digital experiences through innovative technology and thoughtful design.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border ${isDark
                      ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-blue-500/30 text-slate-400 hover:text-blue-400'
                      : 'bg-gray-50 hover:bg-blue-50 border-gray-200 hover:border-blue-300 text-gray-500 hover:text-blue-600'
                    }`}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className={`font-medium flex items-center gap-2 group transition-colors duration-200 ${isDark
                        ? 'text-slate-400 hover:text-blue-400'
                        : 'text-gray-600 hover:text-blue-600'
                      }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors ${isDark
                        ? 'bg-slate-600 group-hover:bg-blue-400'
                        : 'bg-gray-300 group-hover:bg-blue-600'
                      }`} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className={`text-sm mb-1 ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>Email</p>
                <a
                  href="mailto:sagarbawankule334@gmail.com"
                  className={`text-sm transition-colors ${isDark
                      ? 'text-slate-300 hover:text-blue-400'
                      : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  sagarbawankule334@gmail.com
                </a>
              </div>
              <div>
                <p className={`text-sm mb-1 ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>Location</p>
                <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>Nagpur, India</p>
              </div>
              <div>
                <p className={`text-sm mb-1 ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>Status</p>
                <span className="inline-flex items-center gap-2 text-emerald-500 text-sm">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t mt-16 pt-8 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-center md:text-left text-sm ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>
              © {currentYear} Sagar Bawankule. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500 mx-1" />
              using Next.js & Tailwind CSS
            </p>

            <motion.button
              onClick={scrollToTop}
              className={`group p-3 rounded-xl transition-all duration-300 border shadow-lg ${isDark
                  ? 'bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-slate-400 hover:text-white border-white/10 hover:border-transparent'
                  : 'bg-gray-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 text-gray-500 hover:text-white border-gray-200 hover:border-transparent'
                }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
