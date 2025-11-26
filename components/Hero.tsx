'use client'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 md:pt-24"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-dark-charcoal to-dark-black"></div>
      
      {/* Background image placeholder - can be replaced with actual car photo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-charcoal/50 to-dark-charcoal"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Location */}
          <p className="text-accent-orange text-sm md:text-base font-medium mb-3 tracking-wider uppercase">
            Douglas Ave • Providence, RI
          </p>
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-offwhite mb-2">Premium Car Wash</span>
            <span className="block bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent">
              & Detailing by Twin's Car Wash
            </span>
          </h1>
          
          {/* Body Copy */}
          <p className="text-base sm:text-lg md:text-xl text-offwhite/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Twin's Car Wash is your go-to spot for hand washes and detailing on Douglas Ave. 
            Detail-obsessed, and all about keeping your ride clean, shiny, and ready to be seen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:401-771-9436"
              className="w-full sm:w-auto bg-gradient-to-r from-accent-orange to-accent-orange-light text-dark-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-accent-orange/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call To Book · 401-771-9436
            </a>
            <a
              href="tel:401-660-8596"
              className="w-full sm:w-auto border-2 border-accent-silver text-accent-silver px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-silver hover:text-dark-charcoal transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Or Call · 401-660-8596
            </a>
          </div>

          {/* Address */}
          <div className="border-t border-offwhite/10 pt-8">
            <p className="text-offwhite/80 text-sm md:text-base mb-2">
              <span className="font-semibold">702 Douglas Ave, Providence, RI 02908</span>
            </p>
            <p className="text-offwhite/60 text-sm">
              Drive up, or call ahead to lock in your spot.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

