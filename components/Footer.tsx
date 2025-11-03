'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { personalInfo, socialLinks, navigationLinks } from '@/data/personalInfo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-black/30 via-black/40 to-black/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-transparent to-red-900/10" />
      
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10"
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{personalInfo.name}</h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-2">
              {personalInfo.tagline}
            </p>
            <p className="text-[10px] sm:text-xs text-white/60 italic">
              {personalInfo.description}
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    prefetch={true}
                    className="group flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-300 text-sm"
                  >
                    <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Connect With Me</h4>
            <p className="text-xs sm:text-sm text-white/70 mb-3 sm:mb-4">
              Follow me on social media or reach out for collaboration
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05, type: "spring", stiffness: 200 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 text-white/80 hover:text-white transition-all duration-300 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm"
                  aria-label={social.name}
                  title={social.name}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-6" />
                  <span className="absolute -bottom-7 sm:-bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] xs:text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-white/60 text-center md:text-left">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-xs sm:text-sm text-white/60">
              <span>Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                className="text-red-400"
              >
                ❤️
              </motion.span>
              <span>using</span>
              <span className="text-white/80 font-medium">Next.js</span>
              <span>&</span>
              <span className="text-white/80 font-medium">TailwindCSS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

