'use client'

const services = [
  {
    name: 'Vehicle Detailing & Valeting',
    description: 'At Twin\'s Car Wash, our detailing and valet service ensures your vehicle emerges immaculate, reflecting unparalleled elegance.',
    icon: '🚗',
  },
  {
    name: 'Paint Correction & Enhancement',
    description: 'At Twin\'s Car Wash, our paint correction service ensures your vehicle emerges immaculate, reflecting unparalleled elegance.',
    icon: '✨',
  },
  {
    name: 'Ceramic Coating Services',
    description: 'At Twin\'s Car Wash, our ceramic coatings offer lasting protection and a brilliant finish, preserving your vehicle\'s allure.',
    icon: '💎',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 sm:px-8 lg:px-10 bg-dark-charcoal"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-offwhite">Our</span>{' '}
            <span className="bg-gradient-to-r from-accent-orange to-accent-silver bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="group text-center p-6 sm:p-8 bg-dark-charcoal/50 backdrop-blur-sm border border-offwhite/10 rounded-xl hover:border-accent-orange/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-offwhite mb-4 break-words">
                {service.name}
              </h3>
              <p className="text-offwhite/70 mb-6 leading-relaxed text-sm sm:text-base md:text-lg">
                {service.description}
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-accent-orange hover:text-accent-orange-light font-semibold transition-colors inline-flex items-center gap-2"
              >
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

