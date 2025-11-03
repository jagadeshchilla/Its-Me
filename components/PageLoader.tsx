'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Loading from './Loading'
import NavigationProgressBar from './NavigationProgressBar'

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
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

    // This is initial page load - show loader for 4-5 minutes
    const loadingDuration = 270000 // 4.5 minutes in milliseconds

    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false)
        setTimeout(() => {
          setShowContent(true)
        }, 400)
      }, loadingDuration)
    }

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    // Fallback: hide loading after max 5 minutes
    const fallbackTimeout = setTimeout(() => {
      setIsLoading(false)
      setTimeout(() => {
        setShowContent(true)
      }, 400)
    }, 300000) // 5 minutes in milliseconds

    return () => {
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
      <Loading isVisible={isLoading} />
      {showContent && <NavigationProgressBar />}
      <AnimatePresence mode="wait">
        {showContent && (
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
