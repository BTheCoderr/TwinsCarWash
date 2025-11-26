'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-black border-t border-offwhite/10 py-12 px-6 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-accent-orange to-accent-orange-light bg-clip-text text-transparent mb-4">
              Twin's Car Wash
            </h3>
            <p className="text-offwhite/70 text-sm leading-relaxed break-words mb-3">
              Luxury car care in the city. Detail-obsessed. Neighborhood trusted.
            </p>
            <p className="text-offwhite/60 text-xs break-words">
              702 Douglas Ave<br />
              Providence, RI 02908
            </p>
          </div>
          
          <div>
            <h4 className="text-offwhite font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-offwhite/70 hover:text-accent-orange transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-offwhite/70 hover:text-accent-orange transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-offwhite/70 hover:text-accent-orange transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-offwhite font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-offwhite/70 hover:text-accent-orange transition-colors text-sm flex items-center gap-2"
                >
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:401-771-9436"
                  className="text-offwhite/70 hover:text-accent-orange transition-colors text-sm"
                >
                  (401) 771-9436
                </a>
              </li>
              <li>
                <a
                  href="tel:401-660-8596"
                  className="text-offwhite/70 hover:text-accent-orange transition-colors text-sm"
                >
                  (401) 660-8596
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@twinscarwash.com"
                  className="text-offwhite/70 hover:text-accent-orange transition-colors text-sm"
                >
                  hello@twinscarwash.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-offwhite/10 pt-8 text-center">
          <p className="text-offwhite/60 text-sm">
            © {currentYear} Twin's Car Wash. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

