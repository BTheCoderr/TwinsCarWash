'use client'

const services = [
  {
    name: 'Express Wash',
    description: 'Quick and thorough exterior wash. Perfect for regular maintenance.',
    price: 'Starting at $25',
    icon: '✨',
    gradient: 'from-accent-orange to-accent-orange-light',
  },
  {
    name: 'Full Detail',
    description: 'Complete interior and exterior detail. Every surface, every corner.',
    price: 'Starting at $150',
    icon: '💎',
    gradient: 'from-accent-silver to-accent-silver-light',
  },
  {
    name: 'Premium Package',
    description: 'The works. Ceramic coating, paint correction, full interior detail.',
    price: 'Starting at $400',
    icon: '👑',
    gradient: 'from-accent-orange via-accent-orange-light to-accent-silver',
  },
  {
    name: 'Interior Deep Clean',
    description: 'Steam cleaning, leather treatment, fabric protection. Like new.',
    price: 'Starting at $100',
    icon: '🧽',
    gradient: 'from-accent-silver-light to-accent-silver',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-charcoal"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-offwhite">Our</span>{' '}
            <span className="bg-gradient-to-r from-accent-orange to-accent-silver bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-offwhite/80 text-lg md:text-xl max-w-2xl mx-auto">
            From quick washes to full transformations. We've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="group relative bg-dark-charcoal/50 backdrop-blur-sm border border-offwhite/10 rounded-2xl p-6 md:p-8 hover:border-accent-orange/50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-offwhite mb-3">
                {service.name}
              </h3>
              <p className="text-offwhite/70 mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className={`text-lg font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                {service.price}
              </div>
              
              {/* Hover effect gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-offwhite/60 mb-6">
            Need something custom? We do that too.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-silver to-accent-silver-light text-dark-charcoal px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-accent-silver/50 transform hover:scale-105 transition-all duration-300"
          >
            Get a Quote
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

