'use client'

import { useState } from 'react'

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-charcoal/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-2 sm:gap-4 min-w-0">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-accent-orange to-accent-silver bg-clip-text text-transparent hover:scale-105 transition-transform truncate min-w-0"
          >
            Twin's Car Wash
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-offwhite hover:text-accent-orange transition-colors font-medium text-sm lg:text-base"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-offwhite hover:text-accent-orange transition-colors font-medium text-sm lg:text-base"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-offwhite hover:text-accent-orange transition-colors font-medium text-sm lg:text-base"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-offwhite hover:text-accent-orange transition-colors font-medium text-sm lg:text-base"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-offwhite hover:text-accent-orange transition-colors font-medium text-sm lg:text-base"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-accent-orange to-accent-orange-light text-dark-charcoal px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-accent-orange/50 transition-all text-sm lg:text-base"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-offwhite hover:text-accent-orange transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-offwhite hover:text-accent-orange transition-colors font-medium py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-offwhite hover:text-accent-orange transition-colors font-medium py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="block w-full text-left text-offwhite hover:text-accent-orange transition-colors font-medium py-2"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left text-offwhite hover:text-accent-orange transition-colors font-medium py-2"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="block w-full text-left text-offwhite hover:text-accent-orange transition-colors font-medium py-2"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-gradient-to-r from-accent-orange to-accent-orange-light text-dark-charcoal px-6 py-3 rounded-lg font-semibold text-center mt-2"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

