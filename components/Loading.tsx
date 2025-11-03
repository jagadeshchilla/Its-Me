'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import './Loading.css'

interface LoadingProps {
  isVisible?: boolean
}

export default function Loading({ isVisible = true }: LoadingProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="loading-container"
        >
          <div className="loading-content">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="loading-logo-wrapper"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="loading-logo"
              >
                <Image
                  src="/images/logo.png"
                  alt="Loading Logo"
                  width={200}
                  height={240}
                  priority
                  className="logo-image"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
