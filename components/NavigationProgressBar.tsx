'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function NavigationProgressBar() {
  const [isNavigating, setIsNavigating] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    // Reset on route change
    setIsNavigating(false)
    setProgress(0)
  }, [pathname])

  useEffect(() => {
    let progressInterval: NodeJS.Timeout | null = null
    let timeoutId: NodeJS.Timeout | null = null

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="/"]')
      
      // Check if it's an internal link and not already on that page
      if (link && link.getAttribute('href') !== pathname) {
        setIsNavigating(true)
        setProgress(10)
        
        // Simulate progress
        progressInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 90) {
              if (progressInterval) clearInterval(progressInterval)
              return 90
            }
            return Math.min(prev + 15, 90)
          })
        }, 150)

        // Auto-complete after max 2 seconds
        timeoutId = setTimeout(() => {
          setProgress(100)
          if (progressInterval) clearInterval(progressInterval)
          setTimeout(() => setIsNavigating(false), 200)
        }, 2000)
      }
    }

    // Add event listener to document
    document.addEventListener('click', handleLinkClick, true)

    return () => {
      document.removeEventListener('click', handleLinkClick, true)
      if (progressInterval) clearInterval(progressInterval)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [pathname])

  return (
    <AnimatePresence>
      {isNavigating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent pointer-events-none"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-white via-white/80 to-white shadow-lg"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

