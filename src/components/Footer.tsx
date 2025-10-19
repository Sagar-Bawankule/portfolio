'use client'

import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
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

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sagar Bawankule
              </h3>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md">
              Full Stack Developer passionate about creating exceptional digital experiences through innovative technology and thoughtful design.
            </p>
            <a
              href="mailto:sagarbawankule334@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Let's Connect
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-sm mb-1">Email</p>
                <a 
                  href="mailto:sagarbawankule334@gmail.com"
                  className="text-slate-300 hover:text-blue-400 transition-colors"
                >
                  sagarbawankule334@gmail.com
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Location</p>
                <p className="text-slate-300">India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-center md:text-left">
              © {currentYear} Sagar Bawankule. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500 mx-1" />
              using Next.js & Tailwind CSS
            </p>
            
            <button
              onClick={scrollToTop}
              className="group bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
