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
} from 'lucide-react'

interface TechItem {
  name: string
  icon: typeof Code2
  color: string
  description: string
}

const techStack: TechItem[] = [
  {
    name: 'Python',
    icon: Code2,
    color: 'bg-blue-500',
    description: 'Core development language',
  },
  {
    name: 'TensorFlow',
    icon: Brain,
    color: 'bg-orange-500',
    description: 'Deep learning frameworks',
  },
  {
    name: 'PyTorch',
    icon: Brain,
    color: 'bg-red-500',
    description: 'Neural network development',
  },
  {
    name: 'Docker',
    icon: Box,
    color: 'bg-blue-600',
    description: 'Containerization & deployment',
  },
  {
    name: 'Next.js',
    icon: Zap,
    color: 'bg-gray-900',
    description: 'Full-stack development',
  },
  {
    name: 'AWS',
    icon: Cloud,
    color: 'bg-yellow-500',
    description: 'Cloud infrastructure',
  },
  {
    name: 'MLflow',
    icon: Layers,
    color: 'bg-purple-500',
    description: 'ML lifecycle management',
  },
  {
    name: 'GitHub Actions',
    icon: GitBranch,
    color: 'bg-gray-800',
    description: 'CI/CD automation',
  },
  {
    name: 'Streamlit',
    icon: Database,
    color: 'bg-emerald-500',
    description: 'ML app deployment',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
}

export default function TechStackExperience() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 font-poppins">
            Technologies I&apos;ve Worked With
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Tools and frameworks I use to build scalable, production-ready solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {techStack.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05, rotate: 2 }}
                className="group relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center justify-center cursor-pointer">
                  <div
                    className={`${tech.color} rounded-lg p-3 mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-navy mb-1 text-center">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-charcoal/60 text-center hidden group-hover:block">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

