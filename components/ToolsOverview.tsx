'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Brain,
  Cloud,
  Box,
  Layers,
  Zap,
  GitBranch,
  Database,
  Circle,
} from 'lucide-react'

interface Tool {
  name: string
  icon: typeof Code2
  color: string
  usage: string
}

const tools: Tool[] = [
  {
    name: 'Python',
    icon: Code2,
    color: 'bg-blue-500',
    usage: 'Core development & ML scripting',
  },
  {
    name: 'TensorFlow',
    icon: Brain,
    color: 'bg-orange-500',
    usage: 'Deep learning model development',
  },
  {
    name: 'PyTorch',
    icon: Brain,
    color: 'bg-red-500',
    usage: 'Neural network research & training',
  },
  {
    name: 'Next.js',
    icon: Zap,
    color: 'bg-gray-900',
    usage: 'Full-stack web applications',
  },
  {
    name: 'Docker',
    icon: Box,
    color: 'bg-blue-600',
    usage: 'Containerization & deployment',
  },
  {
    name: 'MLflow',
    icon: Layers,
    color: 'bg-purple-500',
    usage: 'ML lifecycle & experiment tracking',
  },
  {
    name: 'AWS',
    icon: Cloud,
    color: 'bg-yellow-500',
    usage: 'Cloud infrastructure & services',
  },
  {
    name: 'GitHub Actions',
    icon: GitBranch,
    color: 'bg-gray-800',
    usage: 'CI/CD automation & workflows',
  },
  {
    name: 'Streamlit',
    icon: Database,
    color: 'bg-emerald-500',
    usage: 'Rapid ML app prototyping',
  },
]

export default function ToolsOverview() {
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
            Tools & Technologies
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Main tools and technologies used across my projects
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-4">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -5, scale: 1.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center cursor-pointer h-full">
                  <div
                    className={`${tool.color} rounded-lg p-3 mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-navy text-center mb-1">
                    {tool.name}
                  </h3>
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    <div className="bg-navy text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
                      {tool.usage}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                        <div className="border-4 border-transparent border-t-navy"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

