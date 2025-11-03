'use client'

import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { personalInfo, socialLinksReactIcons } from '@/data/personalInfo'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <section id="about" className="about-section py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-header"
        >
          <div className="about-badge">
            <User className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wide">
              About Me
            </span>
          </div>
          <h2 className="about-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-poppins">
            Who I Am
          </h2>
          <p className="about-description text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            {personalInfo.aboutDescription}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Left: About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-text"
          >
            <p className="about-paragraph text-base sm:text-lg text-gray-300">
              I&apos;m <span className="about-highlight font-semibold text-white">{personalInfo.name}</span>, {personalInfo.bio.long[0]}
            </p>
            <p className="about-paragraph text-base sm:text-lg text-gray-300">
              {personalInfo.bio.long[1]}
            </p>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="about-social-links"
            >
              <p className="about-social-label text-sm text-gray-300 mb-3">Connect with me:</p>
              <div className="flex flex-wrap gap-3">
                {socialLinksReactIcons.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                      aria-label={social.ariaLabel}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="about-social-link"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Animated GIF */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="about-gif-container">
              <img
                src="https://i.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                alt="Coding Animation"
                className="about-gif"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

