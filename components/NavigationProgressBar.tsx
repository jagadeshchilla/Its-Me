'use client'

import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function NavigationProgressBar() {
  const [isNavigating, setIsNavigating] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  const isNavigatingRef = useRef(false)

  useEffect(() => {
    // Complete immediately when route changes
    if (isNavigatingRef.current) {
      setProgress(100)
      const timer = setTimeout(() => {
        setIsNavigating(false)
        setProgress(0)
        isNavigatingRef.current = false
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [pathname])

  useEffect(() => {
    let progressInterval: NodeJS.Timeout | null = null
    let timeoutId: NodeJS.Timeout | null = null

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="/"]')
      
      // Check if it's an internal link and not already on that page
      if (link && link.getAttribute('href') !== pathname) {
        isNavigatingRef.current = true
        setIsNavigating(true)
        setProgress(20)
        
        // Simulate quick progress
        progressInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 90) {
              if (progressInterval) clearInterval(progressInterval)
              return 90
            }
            return Math.min(prev + 20, 90)
          })
        }, 50)

        // Fallback: auto-complete after 500ms max (in case navigation is slow)
        timeoutId = setTimeout(() => {
          setProgress(100)
          if (progressInterval) clearInterval(progressInterval)
          setTimeout(() => setIsNavigating(false), 100)
        }, 500)
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

