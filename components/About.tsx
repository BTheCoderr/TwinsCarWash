'use client'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-navy relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-offwhite">Twin's Car Wash</span>{' '}
            <span className="block mt-2 bg-gradient-to-r from-accent-orange to-accent-silver bg-clip-text text-transparent">
              • Douglas Ave Vehicle Detailing
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <p className="text-offwhite/90 text-lg md:text-xl leading-relaxed">
            Welcome to Twin's Car Wash, your premier destination for professional vehicle detailing on Douglas Avenue. 
            We specialize in comprehensive car care services designed to restore and enhance your vehicle's appearance, 
            ensuring it looks and feels brand new.
          </p>
          
          <p className="text-offwhite/80 text-base md:text-lg leading-relaxed">
            From quick hand washes to full interior and exterior detailing, we bring the same attention to detail 
            and care to every vehicle that rolls through. Good music, good energy, and great results—that's the Twin's way.
          </p>

          <p className="text-offwhite/80 text-base md:text-lg leading-relaxed">
            Experience the Twin's Car Wash difference today. Contact us to schedule your appointment and give your vehicle 
            the care it deserves.
          </p>
        </div>
      </div>
    </section>
  )
}

