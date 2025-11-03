'use client'

import { motion } from 'framer-motion'
import {
  Code,
  Code2,
  TrendingUp,
  Trophy,
  ExternalLink,
  Award,
} from 'lucide-react'

interface CodingProfile {
  platform: string
  username: string
  highlight: string
  profileUrl: string
  icon: typeof Code
  color: string
  bgColor: string
}

const codingProfiles: CodingProfile[] = [
  {
    platform: 'LeetCode',
    username: '@jagadesh_chilla',
    highlight: '400+ problems solved',
    profileUrl: 'https://leetcode.com',
    icon: Code2,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    platform: 'HackerRank',
    username: '@jagadesh_chilla',
    highlight: '5⭐ in Python',
    profileUrl: 'https://hackerrank.com',
    icon: Trophy,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    platform: 'Kaggle',
    username: '@jagadesh_chilla',
    highlight: 'Contributor Level',
    profileUrl: 'https://www.kaggle.com/chillajagadesh',
    icon: TrendingUp,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    platform: 'Codeforces',
    username: '@jagadesh_chilla',
    highlight: 'Specialist Rating',
    profileUrl: 'https://codeforces.com',
    icon: Award,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function CodingProfiles() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 font-poppins">
            Coding Platforms & Competitive Programming
          </h2>
          <p className="text-base sm:text-lg text-charcoal/70 max-w-3xl mx-auto px-4">
            I actively solve problems and participate in coding contests to
            sharpen my logic and algorithmic thinking.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {codingProfiles.map((profile, index) => {
            const Icon = profile.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${profile.bgColor} p-2.5 sm:p-3 rounded-lg`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${profile.color}`} />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 font-poppins">
                  {profile.platform}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/60 mb-2">{profile.username}</p>
                <p className="text-sm sm:text-base text-charcoal/80 font-medium mb-4">
                  {profile.highlight}
                </p>

                <motion.a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-semibold text-xs sm:text-sm hover:bg-primary-dark transition-colors w-full sm:w-auto justify-center"
                >
                  View Profile
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

