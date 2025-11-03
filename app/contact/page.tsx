'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import SocialLinks from '@/components/SocialLinks'
import { motion } from 'framer-motion'
import '../home.css'

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: '#000000' }}>
      <Navbar />

      {/* Header Section */}
      <section className="home-section pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center animate-fade-in-up"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 font-poppins px-2">
              Get in Touch{' '}
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 3,
                  duration: 0.5,
                }}
                className="inline-block"
              >
                💬
              </motion.span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto px-2">
              Let&apos;s collaborate, connect, or just say hello!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="home-section py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Form and Contact Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {/* Left Column - Contact Form */}
            <ContactForm />

            {/* Right Column - Contact Info & Social */}
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              <ContactInfo />
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

