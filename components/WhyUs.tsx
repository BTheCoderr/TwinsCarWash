'use client'

const benefits = [
  {
    icon: '✨',
    title: 'Detail-Obsessed',
    description: 'Every surface, every corner. We don\'t miss a spot.',
  },
  {
    icon: '🤝',
    title: 'Neighborhood Trusted',
    description: 'Local business, local pride. We know Providence.',
  },
  {
    icon: '💎',
    title: 'Premium Products',
    description: 'Top-tier supplies without the premium price tag.',
  },
  {
    icon: '⚡',
    title: 'Fast & Efficient',
    description: 'Quality work that fits your schedule.',
  },
  {
    icon: '🎵',
    title: 'Good Vibes',
    description: 'Good music, good energy, great results.',
  },
  {
    icon: '🛡️',
    title: 'Satisfaction Guaranteed',
    description: 'If you\'re not happy, we\'ll make it right.',
  },
]

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-charcoal"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-offwhite">Why Choose</span>{' '}
            <span className="bg-gradient-to-r from-accent-orange to-accent-silver bg-clip-text text-transparent">
              Twin's
            </span>
          </h2>
          <p className="text-offwhite/80 text-lg md:text-xl max-w-2xl mx-auto">
            More than just a car wash. We're your neighborhood detail experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center p-6 md:p-8 bg-dark-charcoal/50 rounded-xl border border-offwhite/10 hover:border-accent-orange/50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-offwhite mb-3">
                {benefit.title}
              </h3>
              <p className="text-offwhite/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

