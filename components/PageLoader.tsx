'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Loading from './Loading'

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()
  const hasShownInitialLoader = useRef(false)

  // Only show loading on the very first page load when opening the website
  useEffect(() => {
    // Check if this is truly the initial website visit
    if (typeof window === 'undefined') return
    
    // Check sessionStorage to see if user has already visited in this session
    const hasVisited = sessionStorage.getItem('hasVisited')
    
    // If we've already shown the initial loader or user has visited, don't show it again
    // This prevents showing loader on client-side navigation and page refreshes in same session
    if (hasShownInitialLoader.current || hasVisited) {
      setIsLoading(false)
      setShowContent(true)
      return
    }

    // Mark that we've initialized and set session flag
    hasShownInitialLoader.current = true
    sessionStorage.setItem('hasVisited', 'true')

    // This is initial page load - show loader
    const loadingDuration = 3500
    const intervalDuration = 50
    const totalSteps = loadingDuration / intervalDuration
    
    let currentStep = 0
    
    // Progress bar animation
    const progressInterval = setInterval(() => {
      currentStep++
      const newProgress = Math.min((currentStep / totalSteps) * 100, 100)
      setProgress(newProgress)
      
      if (currentStep >= totalSteps) {
        clearInterval(progressInterval)
      }
    }, intervalDuration)

    const handleLoad = () => {
      setTimeout(() => {
        clearInterval(progressInterval)
        setProgress(100)
        setTimeout(() => {
          setIsLoading(false)
          setTimeout(() => {
            setShowContent(true)
          }, 400)
        }, 200)
      }, loadingDuration)
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    // Fallback: hide loading after max 4 seconds
    const fallbackTimeout = setTimeout(() => {
      clearInterval(progressInterval)
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        setTimeout(() => {
          setShowContent(true)
        }, 400)
      }, 200)
    }, 4000)

    return () => {
      clearInterval(progressInterval)
      window.removeEventListener('load', handleLoad)
      clearTimeout(fallbackTimeout)
    }
  }, []) // Only runs once on mount

  // On pathname change (client-side navigation), always show content immediately
  // Never show loading screen on navigation
  useEffect(() => {
    // On any navigation, ensure content is visible immediately
    if (hasShownInitialLoader.current) {
      setIsLoading(false)
      setShowContent(true)
    }
  }, [pathname])

  return (
    <>
      <Loading isVisible={isLoading} progress={progress} />
      <AnimatePresence mode="wait">
        {showContent && (
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
