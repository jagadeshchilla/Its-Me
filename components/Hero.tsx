'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, FileText } from 'lucide-react'
import { personalInfo } from '@/data/personalInfo'
import './Hero.css'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  
  return (
    <section ref={ref} className="hero-section">
      {/* Animated Particles */}
      <div className="hero-particles">
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
      </div>
      <motion.div 
        className="hero-container"
        style={{ opacity }}
      >
        <div className="hero-grid">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="hero-greeting"
            >
              HELLO THERE, WELCOME TO MY SITE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hero-name"
            >
              I&apos;m <span className="hero-name-accent">{personalInfo.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="hero-description"
            >
              {personalInfo.bio.short}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hero-buttons"
            >
              <a href={personalInfo.resume.path} target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="hero-btn-primary"
                >
                  <span>{personalInfo.resume.label}</span>
                  <FileText className="hero-btn-icon" />
                </motion.button>
              </a>
              <Link href="/contact" prefetch={true}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="hero-btn-secondary"
                >
                  <span>CONTACT ME</span>
                  <Mail className="hero-btn-icon" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Portrait Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ y, opacity }}
            className="hero-image-container"
          >
            <motion.div 
              className="hero-image-frame"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="hero-image-wrapper">
                <Image
                  src={personalInfo.profileImage.path}
                  alt={personalInfo.profileImage.alt}
                  width={500}
                  height={600}
                  className="hero-image"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

