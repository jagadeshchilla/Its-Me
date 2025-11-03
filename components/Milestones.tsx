'use client'

import { motion } from 'framer-motion'
import { Trophy, FileText, Zap, Award } from 'lucide-react'

interface Milestone {
  title: string
  description: string
  icon: typeof Trophy
  color: string
}

const milestones: Milestone[] = [
  {
    title: 'Best Intern Award at Oraczen',
    description: 'Recognized for outstanding contribution to AI projects',
    icon: Trophy,
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Published AI Research',
    description: '66.88% model accuracy on emotion detection',
    icon: FileText,
    color: 'from-blue-400 to-purple-500',
  },
  {
    title: 'Automated Data Pipeline',
    description: 'Using Airflow + DVC for streamlined workflows',
    icon: Zap,
    color: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Model Optimization Achievement',
    description: 'Reduced inference time by 35% through optimization',
    icon: Award,
    color: 'from-pink-400 to-rose-500',
  },
]

export default function Milestones() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-poppins">
            Milestones
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Key achievements and recognitions from my professional journey
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-max md:min-w-0 md:flex-wrap md:justify-center">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex-shrink-0 w-72 md:w-auto md:flex-1 md:max-w-sm"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                    <div
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${milestone.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-2 font-poppins">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-charcoal/70 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

