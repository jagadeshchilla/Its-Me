'use client'

import { motion } from 'framer-motion'
import { Brain, Cog, Trophy, MessageCircle } from 'lucide-react'
import './Highlights.css'

const highlights = [
  {
    icon: Brain,
    title: '6+ AI/ML Projects',
    description: 'End-to-end machine learning solutions',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Cog,
    title: 'MLOps Expertise',
    description: 'Hands-on with Docker, CI/CD, and automation',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Trophy,
    title: '1st Place Winner',
    description: 'AI Innovation Challenge champion',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: MessageCircle,
    title: 'DIVA AI Assistant',
    description: 'Building next-gen AI voice assistant',
    color: 'from-green-500 to-emerald-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Highlights() {
  return (
    <section className="highlights-section py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="highlights-header"
        >
          <h2 className="highlights-title text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
            Key Highlights
          </h2>
          <p className="highlights-description text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            A snapshot of my achievements and focus areas
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="highlights-grid"
        >
          {highlights.map((highlight, index) => {
            const gradientClass = index === 0 ? 'highlight-gradient-purple' : 
                                 index === 1 ? 'highlight-gradient-blue' :
                                 index === 2 ? 'highlight-gradient-yellow' : 
                                 'highlight-gradient-green'
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="highlight-card"
              >
                <div className={`highlight-icon-wrapper ${gradientClass} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <highlight.icon className="highlight-icon w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="highlight-title text-lg sm:text-xl font-bold text-white mb-2 font-poppins">
                  {highlight.title}
                </h3>
                <p className="highlight-description text-sm sm:text-base text-gray-300">
                  {highlight.description}
                </p>

                {/* Glassmorphism Effect on Hover */}
                <div className="highlight-glow-effect"></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

