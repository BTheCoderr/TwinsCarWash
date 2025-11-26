'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import WhyUs from '@/components/WhyUs'
import AdditionalServices from '@/components/AdditionalServices'
import Gallery from '@/components/Gallery'
import Reviews from '@/components/Reviews'
import BottomCTA from '@/components/BottomCTA'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-dark-charcoal">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <AdditionalServices />
      <Gallery />
      <Reviews />
      <BottomCTA />
      <Contact />
      <Footer />
    </main>
  )
}

