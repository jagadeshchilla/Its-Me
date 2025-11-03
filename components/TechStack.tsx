'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Brain,
  Cloud,
  Box,
  Database,
  Layers,
  Zap,
} from 'lucide-react'
import './TechStack.css'

const techStack = [
  { name: 'Python', icon: Code2, color: 'bg-blue-500' },
  { name: 'TensorFlow', icon: Brain, color: 'bg-orange-500' },
  { name: 'PyTorch', icon: Brain, color: 'bg-red-500' },
  { name: 'Next.js', icon: Zap, color: 'bg-gray-900' },
  { name: 'AWS', icon: Cloud, color: 'bg-yellow-500' },
  { name: 'Docker', icon: Box, color: 'bg-blue-600' },
  { name: 'MLflow', icon: Layers, color: 'bg-purple-500' },
]

export default function TechStack() {
  return (
    <section className="tech-section py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="tech-header"
        >
          <h2 className="tech-title text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
            Tech Stack
          </h2>
          <p className="tech-description text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="tech-grid">
          {techStack.map((tech, index) => {
            const colorClassMap: Record<string, string> = {
              'bg-blue-500': 'tech-bg-blue',
              'bg-orange-500': 'tech-bg-orange',
              'bg-red-500': 'tech-bg-red',
              'bg-gray-900': 'tech-bg-gray',
              'bg-yellow-500': 'tech-bg-yellow',
              'bg-blue-600': 'tech-bg-blue-dark',
              'bg-purple-500': 'tech-bg-purple',
            }
            const colorClass = colorClassMap[tech.color] || 'tech-bg-blue'
            
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.1, rotate: 5 }}
                className="tech-card"
              >
                <div className={`tech-icon-wrapper ${colorClass} rounded-lg p-2.5 sm:p-3 mb-2`}>
                  <tech.icon className="tech-icon text-white" />
                </div>
                <span className="tech-name">
                  {tech.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

