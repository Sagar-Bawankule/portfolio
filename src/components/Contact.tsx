'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, ArrowUpRight, MessageCircle } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sagarbawankule334@gmail.com",
      href: "mailto:sagarbawankule334@gmail.com",
      gradient: "from-blue-500 via-indigo-500 to-purple-500"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9158680071",
      href: "tel:+919158680071",
      gradient: "from-cyan-500 via-teal-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Nagpur, Maharashtra, India",
      href: "#",
      gradient: "from-purple-500 via-pink-500 to-rose-500"
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Sagar-Bawankule",
      gradient: "from-slate-600 to-slate-800"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/sagar-bawankule-856a79264/",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/thee_sagar_?igsh=c3doaXMyczhiMzRr",
      gradient: "from-pink-500 via-rose-500 to-orange-500"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Get In Touch
          </h2>
          <p className="section-subheading">
            Let's collaborate and bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <motion.div variants={cardVariants} className="space-y-6">
            <div className="professional-card rounded-2xl overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MessageCircle className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Let's Start a <span className="text-blue-500">Conversation</span>
                    </h3>
                    <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                      I'm always excited to connect with fellow developers
                    </p>
                  </div>
                </div>

                <p className={`leading-relaxed mb-8 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                  Whether you have a project idea, want to discuss technology, or just say hello, I'd love to hear from you!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      className={`group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 border ${isDark
                          ? 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20'
                          : 'bg-gray-50 hover:bg-blue-50 border-gray-200 hover:border-blue-200'
                        }`}
                      whileHover={{ x: 5 }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon size={22} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-semibold transition-colors ${isDark
                            ? 'text-white group-hover:text-blue-400'
                            : 'text-gray-900 group-hover:text-blue-600'
                          }`}>
                          {info.title}
                        </p>
                        <p className={`text-sm truncate ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>{info.value}</p>
                      </div>
                      <ArrowUpRight className={`w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ${isDark
                          ? 'text-slate-500 group-hover:text-blue-400'
                          : 'text-gray-400 group-hover:text-blue-600'
                        }`} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <div className="professional-card rounded-2xl overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500" />
              <div className="p-6">
                <h4 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Connect With Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${social.gradient} text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300`}
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <social.icon size={20} />
                      <span className="hidden sm:inline">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={cardVariants}>
            <div className="professional-card rounded-2xl overflow-hidden h-full">
              <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500" />
              <form onSubmit={handleSubmit} className="p-8">
                <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Send Me a Message
                </h3>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all border ${isDark
                          ? 'bg-white/5 border-white/10 text-white placeholder-slate-500'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 hover:bg-white'
                        }`}
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all border ${isDark
                          ? 'bg-white/5 border-white/10 text-white placeholder-slate-500'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 hover:bg-white'
                        }`}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all border ${isDark
                          ? 'bg-white/5 border-white/10 text-white placeholder-slate-500'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 hover:bg-white'
                        }`}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className={`w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none border ${isDark
                          ? 'bg-white/5 border-white/10 text-white placeholder-slate-500'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 hover:bg-white'
                        }`}
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-3.5 px-6 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl btn-glow btn-shine"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                        <ArrowUpRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl text-sm font-medium border ${isDark
                          ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
                          : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                        }`}
                    >
                      ✓ Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl text-sm font-medium border ${isDark
                          ? 'bg-red-500/20 border-red-500/30 text-red-400'
                          : 'bg-red-50 border-red-200 text-red-700'
                        }`}
                    >
                      ✕ Something went wrong. Please try again.
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 professional-card rounded-2xl px-6 py-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Mail className="text-white w-5 h-5" />
            </div>
            <div className="text-left">
              <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Quick Response</p>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>I typically respond within 24 hours</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
