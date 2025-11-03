'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProjectsGrid from '@/components/ProjectsGrid'
import MiniProjects from '@/components/MiniProjects'
import ProjectsCTA from '@/components/ProjectsCTA'
import { motion } from 'framer-motion'
import '../home.css'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen" style={{ background: '#000000' }}>
      <Navbar />

      {/* Header Section */}
      <section className="home-section pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center animate-fade-in-up"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 font-poppins">
              Projects
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-2">
              A showcase of the ideas I&apos;ve built — where creativity meets
              code.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <ProjectsGrid />

      {/* Mini Projects */}
      <MiniProjects />

      {/* CTA Section */}
      <ProjectsCTA />

      <Footer />
    </main>
  )
}

