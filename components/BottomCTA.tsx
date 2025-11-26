'use client'

export default function BottomCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="py-24 md:py-32 px-6 sm:px-8 lg:px-10 bg-dark-charcoal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent-silver rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="text-offwhite">Book Your Professional</span>{' '}
          <span className="bg-gradient-to-r from-accent-orange to-accent-silver bg-clip-text text-transparent">
            Service Today!
          </span>
        </h2>
        <p className="text-offwhite/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          We Care About You! Please Contact Us With Any Questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:401-771-9436"
            className="w-full sm:w-auto bg-gradient-to-r from-accent-orange to-accent-orange-light text-dark-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-accent-orange/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Today
          </a>
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto border-2 border-accent-silver text-accent-silver px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-silver hover:text-dark-charcoal transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

