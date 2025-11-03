'use client'

import { motion } from 'framer-motion'
import { socialLinksForComponent } from '@/data/personalInfo'

export default function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-6 sm:mt-8"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-poppins">
        Connect on Social Media
      </h3>
      <div className="flex flex-wrap gap-3 sm:gap-4">
        {socialLinksForComponent.map((social, index) => {
          const Icon = social.icon
          return (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.25)] text-white hover:text-white p-3 sm:p-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border-2 border-[rgba(255,255,255,0.3)]"
              aria-label={social.name}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.a>
          )
        })}
      </div>
    </motion.div>
  )
}

