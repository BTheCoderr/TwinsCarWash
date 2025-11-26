'use client'

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 sm:px-8 lg:px-10 bg-dark-charcoal relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-offwhite">Douglas Ave</span>{' '}
            <span className="block mt-2 bg-gradient-to-r from-accent-orange to-accent-silver bg-clip-text text-transparent">
              • Providence, RI Vehicle Detailing
            </span>
          </h2>
          
          <p className="text-offwhite/90 text-base sm:text-lg md:text-xl leading-relaxed px-4 break-words">
            Welcome to Twin's Car Wash, your ultimate destination for comprehensive car care solutions. At Twin's Car Wash, 
            we pride ourselves on offering a wide range of services tailored to meet your vehicle's needs, including detailing, 
            valeting, paint correction, ceramics, and paint enhancement. With our meticulous attention to detail and expert techniques, 
            we guarantee to elevate your car's appearance to perfection. Trust Twin's Car Wash to enhance and protect your vehicle, 
            leaving it looking pristine and showroom-ready.
          </p>
        </div>
      </div>
    </section>
  )
}

