'use client'

import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

interface Certification {
  title: string
  subtitle: string
  credentialUrl?: string
  altName?: string
  colorCode?: string
}

const certifications: Certification[] = [
  {
    title: 'Machine Learning',
    subtitle: 'Krishanan Kumar',
    credentialUrl: 'https://simpli-web.app.link/e/0HN79NnjLLb',
    altName: 'SimpliLearn',
    colorCode: '#1F70C199',
  },
  {
    title: 'Deep Learning',
    subtitle: 'Andrew Ng',
    credentialUrl: 'https://olympus.mygreatlearning.com/courses/31732/certificate',
    altName: 'deeplearning.ai',
    colorCode: '#00000099',
  },
  {
    title: 'AI on Azure',
    subtitle: 'Marni Backer-Stein',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/MDKCSJGS88XK',
    altName: 'Microsoft',
    colorCode: '#D83B0199',
  },
  {
    title: 'SQL',
    subtitle: 'HackerRank Training',
    credentialUrl: 'https://www.hackerrank.com/certificates/bfd47f4dd2ee',
    altName: 'HackerRank',
    colorCode: '#00000099',
  },
  {
    title: 'AWS',
    subtitle: 'Tom Brunskill',
    credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_Jp4wKn2QSJXK8rH33_1691555110050_completion_certificate.pdf',
    altName: 'Forage',
    colorCode: '#D83B0199',
  },
  {
    title: 'Big Data Basics',
    subtitle: 'Lalitha Audikesavan',
    credentialUrl: 'https://www.udemy.com/certificate/UC-dbbdf08c-d3ed-4cda-8498-8100d8ed8144/',
    altName: 'Udemy',
    colorCode: '#2A73CC',
  },
  {
    title: 'Google Cloud Boot Camp',
    subtitle: 'GCP Training',
    credentialUrl: 'https://www.geeksforgeeks.org/certificate/0990b817b9fc544892e0be0f8f66c83d?utm_source=socials&utm_medium=cc_link',
    altName: 'Google',
    colorCode: '#0C9D5899',
  },
  {
    title: 'Google Data Analyst Professional Certificate',
    subtitle: 'GCP Training',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/9G2KE4H8G4CS',
    altName: 'Google',
    colorCode: '#0C9D5899',
  },
  {
    title: 'Fullstack Development',
    subtitle: 'Dr. Angela Yu',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA',
    altName: 'Coursera',
    colorCode: '#2A73CC',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Certifications() {
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
            Certifications & Courses
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto px-2"
          >
            Continuous learning through industry-recognized certifications and
            specialized courses
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="relative rounded-lg sm:rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-7 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group bg-[rgba(255,255,255,0.15)] backdrop-blur-xl border-2 border-[rgba(255,255,255,0.3)] hover:border-[rgba(255,255,255,0.5)]"
            >
              {/* Gradient accent border with animation */}
              <motion.div 
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: cert.colorCode 
                    ? `linear-gradient(90deg, ${cert.colorCode.replace('99', 'FF')}, ${cert.colorCode})`
                    : 'linear-gradient(90deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5))'
                }}
                animate={{
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
              />
              
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: cert.colorCode 
                    ? cert.colorCode.replace('99', '20')
                    : 'rgba(255, 255, 255, 0.1)'
                }}
              />
              
              <div className="relative flex items-start gap-3 sm:gap-4 mb-4 sm:mb-5 z-10">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="p-2.5 sm:p-3 md:p-3.5 rounded-lg sm:rounded-xl flex-shrink-0 shadow-md bg-[rgba(255,255,255,0.2)]"
                >
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  <motion.div
                    className="absolute inset-0 rounded-lg sm:rounded-xl blur-md opacity-50"
                    style={{
                      background: cert.colorCode 
                        ? cert.colorCode.replace('99', '80')
                        : 'rgba(255, 255, 255, 0.3)'
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 font-poppins leading-tight"
                  >
                    {cert.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-xs sm:text-sm md:text-base font-medium text-white/90"
                  >
                    {cert.subtitle}
                  </motion.p>
                  {cert.altName && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                      className="text-xs text-white/70 mt-1"
                    >
                      {cert.altName}
                    </motion.p>
                  )}
                </div>
              </div>

              {cert.credentialUrl && (
                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative inline-flex items-center gap-2 text-xs sm:text-sm md:text-base font-semibold mt-4 sm:mt-5 md:mt-6 transition-colors text-white/90 hover:text-white underline underline-offset-2 z-10"
                >
                  View Credential
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

