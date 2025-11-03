'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import { motion } from 'framer-motion'
import '../home.css'

export default function ExperiencePage() {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #7f1d1d 100%)' }}>
      <Navbar />

      {/* Header Section */}
      <section className="home-section pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-10 md:pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center animate-fade-in-up"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 font-poppins">
              Experience
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-2">
              Every role has shaped how I approach problems — with curiosity,
              logic, and impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <ExperienceTimeline />

      <Footer />
    </main>
  )
}

