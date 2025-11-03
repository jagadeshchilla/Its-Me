'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Bot } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Education', href: '/education' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Get active section based on current route
  const getActiveSection = () => {
    if (pathname === '/') return 'Home'
    if (pathname === '/chatbot') return 'ChatBot'
    return navItems.find(item => item.href === pathname)?.name || 'Home'
  }

  const activeSection = getActiveSection()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(0,0,0,0.95)] backdrop-blur-md shadow-md border-b border-[rgba(255,255,255,0.2)]'
          : 'bg-[rgba(0,0,0,0.85)] backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={50}
                height={60}
                priority
                className="h-10 md:h-12 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Navigation Items with ChatBot Button */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch={true}
                className="relative"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.name
                      ? 'text-white font-bold'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.name}
                </motion.span>
                {activeSection === item.name && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-white to-white/80 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            {/* Chatbot Button with Sparkles */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            >
              <Link href="/chatbot" prefetch={true}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3 sm:px-4 py-2 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
                    pathname === '/chatbot'
                      ? 'bg-white text-black shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm border border-white/30'
                  }`}
                >
                  {/* Sparkles Animation */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="relative"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                    {/* Floating sparkles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0"
                        animate={{
                          x: [
                            0,
                            Math.cos((i * Math.PI * 2) / 3) * 8,
                            Math.cos((i * Math.PI * 2) / 3) * 8,
                          ],
                          y: [
                            0,
                            Math.sin((i * Math.PI * 2) / 3) * 8,
                            Math.sin((i * Math.PI * 2) / 3) * 8,
                          ],
                          opacity: [0, 1, 0],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <Sparkles className="w-2 h-2 text-white/60" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <span className="hidden lg:inline">ChatBot</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 relative z-50"
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div
              animate={mobileMenuOpen ? 'open' : 'closed'}
              variants={{
                open: { rotate: 90 },
                closed: { rotate: 0 }
              }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-white/80"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-white/20"
            >
              <div className="flex flex-col py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      prefetch={true}
                      className={`block px-4 py-2 text-sm font-medium transition-colors ${
                        activeSection === item.name
                          ? 'text-white font-bold bg-white/10'
                          : 'text-white/90 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                {/* Mobile Chatbot Button */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  <Link
                    href="/chatbot"
                    prefetch={true}
                    className={`block px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2 ${
                      pathname === '/chatbot'
                        ? 'text-white font-bold bg-white/10'
                        : 'text-white/90 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                    ChatBot
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

