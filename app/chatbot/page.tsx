'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Sparkles, Bot } from 'lucide-react'
import '../home.css'

export default function ChatbotPage() {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #7f1d1d 100%)' }}>
      <Navbar />

      {/* Coming Soon Section */}
      <section className="home-section pt-32 sm:pt-40 md:pt-48 pb-16 sm:pb-20 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Sparkles Animation Background */}
            <div className="relative mb-8 sm:mb-12">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sparkles className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 text-white/20" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 0.3, 
                  type: "spring", 
                  stiffness: 200 
                }}
                className="relative z-10 bg-[rgba(255,255,255,0.15)] backdrop-blur-xl rounded-full p-6 sm:p-8 md:p-10 mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 flex items-center justify-center border-2 border-white/30 shadow-2xl"
              >
                <Bot className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" />
                
                {/* Floating Sparkles around bot */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: 'white',
                      boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                    }}
                    animate={{
                      x: [
                        0,
                        Math.cos((i * Math.PI) / 4) * 60,
                        Math.cos((i * Math.PI) / 4) * 60,
                      ],
                      y: [
                        0,
                        Math.sin((i * Math.PI) / 4) * 60,
                        Math.sin((i * Math.PI) / 4) * 60,
                      ],
                      scale: [0, 1, 1, 0],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.25,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Coming Soon Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 font-poppins"
            >
              Coming Soon
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8"
            >
              I&apos;m working on an AI-powered chatbot that will help answer questions about my projects, experience, and skills.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl mx-auto"
            >
              Stay tuned for an interactive experience powered by cutting-edge AI technology!
            </motion.p>

            {/* Animated Sparkles Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-8 sm:mt-12 flex items-center justify-center gap-2 text-white/70"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm md:text-base">Powered by AI & Machine Learning</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

