'use client'

import { motion } from 'framer-motion'
import { contactInfo } from '@/data/personalInfo'

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-3 sm:space-y-4"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-poppins">
        Direct Contact
      </h3>
      {contactInfo.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.a
            key={index}
            href={item.link}
            target={item.linkType === 'location' ? '_blank' : undefined}
            rel={item.linkType === 'location' ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ x: 5, scale: 1.02 }}
            className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-[rgba(255,255,255,0.15)] backdrop-blur-xl rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 border-[rgba(255,255,255,0.3)] group"
          >
            <div className="bg-[rgba(255,255,255,0.2)] p-2 sm:p-2.5 md:p-3 rounded-lg group-hover:bg-[rgba(255,255,255,0.3)] transition-colors flex-shrink-0">
              <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs sm:text-sm font-medium text-white/60 mb-0.5 sm:mb-1">
                {item.label}
              </p>
              <p className="text-sm sm:text-base font-semibold text-white group-hover:text-white transition-colors break-words">
                {item.value}
              </p>
            </div>
          </motion.a>
        )
      })}
    </motion.div>
  )
}

