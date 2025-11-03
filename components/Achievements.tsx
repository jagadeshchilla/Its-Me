'use client'

import { motion } from 'framer-motion'
import { Trophy, Award, FileText, GraduationCap } from 'lucide-react'

interface Achievement {
  title: string
  description: string
  icon: typeof Trophy
  color: string
}

const achievements: Achievement[] = [
  {
    title: 'Hackathon Win',
    description: 'Spearheaded winning solution at TECH-IOT Hackathon (LPU, 2023), outperforming 100+ teams with an AI-powered analytics system.',
    icon: Trophy,
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Hackathon 2nd Place',
    description: 'Secured 2nd Place at TECHKRITI 2.0 Hackathon (IIT Kanpur, 2023) for innovation in resource-efficient agriculture using ML and IoT.',
    icon: Award,
    color: 'from-blue-400 to-purple-500',
  },
  {
    title: 'Professional Certification',
    description: 'Successfully accomplished Oracle GenAI Professional Certification, gaining expertise in LLMs, RAGs, and Generative AI applications.',
    icon: GraduationCap,
    color: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Research Paper Presentation',
    description: 'Recently presented a research paper titled \'Endoscopic Image Enhancement\' at a technical conference; the paper is scheduled for publication in 8 months.',
    icon: FileText,
    color: 'from-purple-400 to-pink-500',
  },
]

export default function Achievements() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 font-poppins"
          >
            Notable Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto px-2"
          >
            Highlights from competitions, research, and innovation challenges
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8 justify-items-center">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  rotate: [0, -2, 2, -2, 0],
                  transition: { duration: 0.5 }
                }}
                className="w-full max-w-sm bg-[rgba(255,255,255,0.15)] backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[rgba(255,255,255,0.3)] hover:border-[rgba(255,255,255,0.5)] relative overflow-hidden group"
              >
                {/* Background gradient on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg sm:rounded-xl md:rounded-2xl`}
                />
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 sm:mb-5 shadow-md z-10`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-lg blur-md opacity-50`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 0.5
                    }}
                  />
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 font-poppins z-10 relative"
                >
                  {achievement.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                  className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed z-10 relative"
                >
                  {achievement.description}
                </motion.p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

