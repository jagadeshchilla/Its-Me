'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, ExternalLink, Zap } from 'lucide-react'

interface EducationItem {
  degree: string
  institution: string
  duration: string
  location?: string
  description: string[]
  websiteLink?: string
}

const educationData: EducationItem[] = [
  {
    degree: 'B.Tech. in Computer Science and Engineering',
    institution: 'Lovely Professional University, Punjab',
    duration: '2021 - 2025',
    location: 'Punjab, India',
    websiteLink: 'https://www.lpu.in/',
    description: [
      'I have studied basic software engineering subjects like DSA, DBMS, OS, CP, AI etc.',
      'Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.',
    ],
  },
  {
    degree: '12th Class',
    institution: 'Tirumala Junior College',
    duration: '2019 - 2021',
    location: 'Visakhapatnam, India',
    websiteLink: 'https://www.tirumalaedu.com/',
    description: [
      'I have Completed my 12th class in Tirumala Junior college,Vishakapatnam',
      'I got 961 marks in my state board exam',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 100,
      damping: 15
    },
  },
}

export default function EducationTimeline() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-3 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 font-poppins px-2">
            Educational Journey
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/80 max-w-2xl mx-auto px-2">
            My academic achievements and learning path
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-4 sm:left-6 md:left-8 lg:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-white/50 to-[rgba(255,255,255,0.3)]"></div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative flex items-start"
              >
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.3 + 0.2,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="hidden md:flex absolute left-2 sm:left-4 md:left-6 lg:left-8 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-gradient-to-r from-white to-white/90 rounded-full border-[3px] sm:border-4 border-[rgba(220,38,38,0.9)] shadow-xl z-10"
                />

                {/* Card */}
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className="md:ml-12 lg:ml-16 xl:ml-20 w-full bg-[rgba(255,255,255,0.15)] backdrop-blur-xl rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-[rgba(255,255,255,0.3)] hover:border-[rgba(255,255,255,0.5)]"
                >
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-5">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-[rgba(255,255,255,0.2)] p-2.5 sm:p-3 md:p-3.5 rounded-lg sm:rounded-xl"
                    >
                      <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 font-poppins leading-tight">
                        {item.degree}
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl text-white font-semibold mb-1 sm:mb-2">
                        {item.institution}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3 ml-0 sm:ml-14 md:ml-0">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.3 + 0.4 }}
                      className="flex items-center gap-2 text-white/80"
                    >
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 text-white" />
                      <span className="text-xs sm:text-sm md:text-base">{item.duration}</span>
                    </motion.div>
                    {item.location && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.3 + 0.5 }}
                        className="flex items-center gap-2 text-white/80"
                      >
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 text-white" />
                        <span className="text-xs sm:text-sm md:text-base break-words">{item.location}</span>
                      </motion.div>
                    )}
                    <div className="mt-4 sm:mt-5 md:mt-6 space-y-2 sm:space-y-3">
                      {item.description.map((desc, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.3 + 0.6 + idx * 0.1 }}
                          className="flex items-start gap-2 text-white/90 leading-relaxed text-xs sm:text-sm md:text-base"
                        >
                          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0 mt-0.5" />
                          <span>{desc}</span>
                        </motion.div>
                      ))}
                    </div>
                    {item.websiteLink && (
                      <motion.a
                        href={item.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.3 + 0.8 }}
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 text-white hover:text-white/90 text-xs sm:text-sm md:text-base font-semibold mt-4 sm:mt-5 md:mt-6 transition-colors underline underline-offset-2"
                      >
                        Visit Website
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ 
                            duration: 1.5,
                            repeat: Infinity,
                            repeatDelay: 1
                          }}
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </motion.span>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

