'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import EducationTimeline from '@/components/EducationTimeline'
import Certifications from '@/components/Certifications'
import Achievements from '@/components/Achievements'
import { motion } from 'framer-motion'
import {
  SiLeetcode,
  SiHackerrank,
  SiCodechef,
  SiCodeforces,
  SiHackerearth,
  SiGeeksforgeeks,
  SiCodingninjas,
  SiSpoj,
} from 'react-icons/si'
import '../home.css'

// Competitive Sites Data
const competitiveSites = [
  {
    siteName: "LeetCode",
    icon: SiLeetcode,
    style: {
      color: "#F79F1B",
    },
    profileLink: "https://leetcode.com/u/jagadeshreddy/",
  },
  {
    siteName: "HackerRank",
    icon: SiHackerrank,
    style: {
      color: "#2EC866",
    },
    profileLink: "https://www.hackerrank.com/profile/chillajagadesh68",
  },
  {
    siteName: "Codechef",
    icon: SiCodechef,
    style: {
      color: "#5B4638",
    },
    profileLink: "https://www.codechef.com/users/chillajagadesh",
  },
  {
    siteName: "Codeforces",
    icon: SiCodeforces,
    style: {
      color: "#1F8ACB",
    },
    profileLink: "https://codeforces.com/profile/jagadesh68",
  },
  {
    siteName: "Hackerearth",
    icon: SiHackerearth,
    style: {
      color: "#323754",
    },
    profileLink: "https://www.hackerearth.com/@chillajagadesh68",
  },
  {
    siteName: "Geeks for Geeks",
    icon: SiGeeksforgeeks,
    style: {
      color: "#2F8D46",
    },
    profileLink: "https://www.geeksforgeeks.org/user/chillajagadesh68/",
  },
  {
    siteName: "Coding Ninjas",
    icon: SiCodingninjas,
    style: {
      color: "#FF6D00",
    },
    profileLink: "https://www.naukri.com/code360/profile/jagadeshchilla",
  },
  {
    siteName: "SPOJ",
    icon: SiSpoj,
    style: {
      color: "#0C3452",
    },
    profileLink: "https://www.spoj.com/myaccount/",
  },
]

export default function EducationPage() {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #7f1d1d 100%)' }}>
      <Navbar />
      
      {/* Header Section */}
      <section className="home-section pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 font-poppins leading-tight"
            >
              Education
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2"
            >
              Basic Qualification and Certifications
            </motion.p>
            
            {/* Coding Platform Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-6 sm:mt-8"
            >
              {competitiveSites.map((site, index) => {
                const Icon = site.icon
                return (
                  <motion.a
                    key={index}
                    href={site.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.8 + (index * 0.1),
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -8,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-lg flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
                    title={site.siteName}
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
                  >
                    <Icon 
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: site.style.color }}
                    />
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                      style={{ 
                        backgroundColor: site.style.color,
                        opacity: 0
                      }}
                      animate={{
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Timeline */}
      <EducationTimeline />

      {/* Certifications */}
      <Certifications />

      {/* Achievements */}
      <Achievements />

      <Footer />
    </main>
  )
}

