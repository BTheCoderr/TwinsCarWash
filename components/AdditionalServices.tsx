'use client'

const additionalServices = [
  {
    name: 'Engine Bay Details',
    description: 'Engine detailing involves cleaning and enhancing the appearance of an engine. This process includes cleaning the engine bay, degreasing the engine components, and applying protective coatings to give the engine a polished and well-maintained look.',
  },
  {
    name: 'Headlight Restoration',
    description: 'Headlight restoration is a process that improves the clarity and brightness of headlights. It involves removing oxidation and debris from the surface of the headlights, restoring their original appearance. This can enhance visibility while driving at night and improve the overall aesthetics of the vehicle.',
  },
  {
    name: 'Brake Caliper Painting',
    description: 'Brake caliper painting is a process that involves applying specialised paint to the calipers of a vehicle\'s braking system. This can be done to enhance the appearance of the vehicle or to provide a protective coating to prevent corrosion and rust.',
  },
]

export default function AdditionalServices() {
  return (
    <section className="py-24 md:py-32 px-6 sm:px-8 lg:px-10 bg-dark-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-offwhite">Additional</span>{' '}
            <span className="bg-gradient-to-r from-accent-orange to-accent-silver bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {additionalServices.map((service, index) => (
            <div
              key={service.name}
              className="p-6 md:p-8 bg-dark-charcoal/50 backdrop-blur-sm border border-offwhite/10 rounded-xl hover:border-accent-orange/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-offwhite mb-4 break-words">
                {service.name}
              </h3>
              <p className="text-offwhite/70 leading-relaxed text-sm md:text-base break-words">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

