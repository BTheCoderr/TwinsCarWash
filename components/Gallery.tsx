'use client'

// Placeholder gallery items - replace with actual car photos
const galleryItems = [
  { id: 1, title: 'Exterior Detail', category: 'Exterior' },
  { id: 2, title: 'Interior Deep Clean', category: 'Interior' },
  { id: 3, title: 'Full Service', category: 'Full Detail' },
  { id: 4, title: 'Paint Correction', category: 'Premium' },
  { id: 5, title: 'Ceramic Coating', category: 'Premium' },
  { id: 6, title: 'Express Wash', category: 'Exterior' },
]

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-navy"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-offwhite">Our</span>{' '}
            <span className="bg-gradient-to-r from-accent-orange to-accent-silver bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-offwhite/80 text-lg md:text-xl max-w-2xl mx-auto">
            See the shine. See the detail. See the difference.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-offwhite/10 hover:border-accent-orange/50 transition-all duration-300 hover:transform hover:scale-[1.02] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Placeholder for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-charcoal via-dark-navy to-dark-black flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-3 opacity-50">🚗</div>
                  <p className="text-offwhite/60 text-sm font-medium">{item.title}</p>
                  <p className="text-offwhite/40 text-xs mt-1">{item.category}</p>
                </div>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-offwhite font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-accent-orange text-sm">{item.category}</p>
                </div>
              </div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-offwhite/60 mb-6">
            Want to see more? Follow us on Instagram for daily updates.
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-silver to-accent-silver-light text-dark-charcoal px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-accent-silver/50 transform hover:scale-105 transition-all duration-300"
          >
            View Instagram
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

