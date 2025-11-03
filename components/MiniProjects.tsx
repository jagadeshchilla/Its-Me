'use client'

import { motion } from 'framer-motion'
import { FileText, Code, Github, ExternalLink } from 'lucide-react'

interface MiniProject {
  title: string
  type: string
  description: string
  link: string
  icon: typeof FileText
}

const miniProjects: MiniProject[] = [
  {
    title: 'Kaggle Notebooks',
    type: 'Data Science',
    description: 'Collection of exploratory data analysis and ML notebooks',
    link: 'https://www.kaggle.com/chillajagadesh',
    icon: FileText,
  },
  {
    title: 'Open Source Contributions',
    type: 'Contributions',
    description: 'Active contributions to ML and web development projects',
    link: 'https://github.com/jagadeshchilla',
    icon: Code,
  },
  {
    title: 'Side Experiments',
    type: 'Experiments',
    description: 'Quick prototypes and experimental projects',
    link: 'https://github.com/jagadeshchilla',
    icon: Github,
  },
]

export default function MiniProjects() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24" style={{ position: 'relative', zIndex: 1 }}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 font-poppins">
            Other Experiments
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-2">
            Quick previews of side projects, notebooks, and open-source
            contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {miniProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-white/30"
              >
                <div className="bg-white/15 p-2.5 sm:p-3 rounded-lg w-fit mb-3 sm:mb-4 backdrop-blur-sm border border-white/25">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <span className="text-xs text-white/90 font-semibold uppercase tracking-wide mb-2 block">
                  {project.type}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 font-poppins">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/75 mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-white hover:text-white/90 text-sm font-semibold transition-colors"
                >
                  Explore
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

