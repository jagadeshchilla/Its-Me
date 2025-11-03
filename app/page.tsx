import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import WhatToDo from '@/components/WhatToDo'
import FeaturedProject from '@/components/FeaturedProject'
import BlogSection from '@/components/BlogSection'
import Footer from '@/components/Footer'
import './home.css'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <WhatToDo />
      <FeaturedProject />
      <BlogSection />
      <Footer />
    </main>
  )
}

