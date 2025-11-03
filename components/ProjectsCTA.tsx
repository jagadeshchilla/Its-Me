'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, ArrowRight } from 'lucide-react'

export default function ProjectsCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24" style={{ position: 'relative', zIndex: 1 }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 sm:space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 font-poppins">
            Want to collaborate or learn more?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 px-2">
            Want to collaborate or learn more about my projects? Let&apos;s
            connect!
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-red-600 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Me
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
