'use client'

const benefits = [
  {
    icon: '💎',
    title: 'Quality Products',
    description: 'At Twin\'s Car Wash, we exclusively use premium-grade products to guarantee exceptional results and long-lasting satisfaction for your vehicle.',
  },
  {
    icon: '📅',
    title: 'Easy Scheduling',
    description: 'At Twin\'s Car Wash, we offer an effortless booking system, making it simple for you to schedule expert car care at your convenience.',
  },
  {
    icon: '👨‍🔧',
    title: 'Trained Professionals',
    description: 'At Twin\'s Car Wash, our team comprises highly skilled professionals who undergo rigorous training, ensuring every aspect of your vehicle receives expert attention and care.',
  },
  {
    icon: '🚗',
    title: 'Fully Mobile Service',
    description: 'Experience the ultimate convenience with Twin\'s Car Wash fully mobile service, bringing top-tier car care directly to your doorstep, whether at home or work.',
  },
  {
    icon: '⚡',
    title: 'Quick Response',
    description: 'Count on Twin\'s Car Wash for swift and efficient service, with our team dedicated to providing prompt responses and timely assistance for all your car care needs.',
  },
  {
    icon: '❤️',
    title: 'The Best Care',
    description: 'With a commitment to excellence ingrained in everything we do, Twin\'s Car Wash delivers nothing short of the best care for your vehicle, ensuring it receives unparalleled attention and maintenance.',
  },
]

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-24 md:py-32 px-6 sm:px-8 lg:px-10 bg-dark-charcoal"
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
            Choose Twin's Car Wash for unmatched expertise and dedication to perfecting your vehicle, ensuring it stands out with impeccable quality and lasting beauty on every journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center p-6 sm:p-8 bg-dark-charcoal/50 rounded-xl border border-offwhite/10 hover:border-accent-orange/50 transition-all duration-300 hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-offwhite mb-3 break-words">
                {benefit.title}
              </h3>
              <p className="text-offwhite/70 leading-relaxed text-sm sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

