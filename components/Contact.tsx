'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send to your backend/email service
    console.log('Form submitted:', formData)
    alert('Thanks! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 sm:px-8 lg:px-10 bg-dark-charcoal relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent-silver/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-offwhite">Let's</span>{' '}
            <span className="bg-gradient-to-r from-accent-orange to-accent-silver bg-clip-text text-transparent">
              Get Started
            </span>
          </h2>
          <p className="text-offwhite/80 text-lg md:text-xl">
            Book your appointment or ask us anything. We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 sm:p-8 bg-dark-charcoal/50 backdrop-blur-sm rounded-2xl border border-offwhite/10">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold text-offwhite mb-2">Location</h3>
            <p className="text-offwhite/70 text-sm break-words">
              702 Douglas Ave<br />
              Providence, RI 02908
            </p>
          </div>
          <div className="text-center p-6 sm:p-8 bg-dark-charcoal/50 backdrop-blur-sm rounded-2xl border border-offwhite/10">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-semibold text-offwhite mb-2">Call Us</h3>
            <a href="tel:401-771-9436" className="text-accent-orange hover:text-accent-orange-light text-sm block mb-1">
              (401) 771-9436
            </a>
            <a href="tel:401-660-8596" className="text-accent-orange hover:text-accent-orange-light text-sm block">
              (401) 660-8596
            </a>
          </div>
          <div className="text-center p-6 sm:p-8 bg-dark-charcoal/50 backdrop-blur-sm rounded-2xl border border-offwhite/10">
            <div className="text-3xl mb-3">✉️</div>
            <h3 className="font-semibold text-offwhite mb-2">Email</h3>
            <p className="text-offwhite/70 text-sm">
              hello@twinscarwash.com
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-dark-charcoal/50 backdrop-blur-sm border border-offwhite/10 rounded-2xl p-6 sm:p-8 space-y-6 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-offwhite font-medium mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-dark-charcoal border border-offwhite/20 rounded-lg px-4 py-3 text-offwhite focus:outline-none focus:border-accent-orange transition-colors placeholder:text-offwhite/40"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-offwhite font-medium mb-2"
              >
                Phone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-dark-charcoal border border-offwhite/20 rounded-lg px-4 py-3 text-offwhite focus:outline-none focus:border-accent-orange transition-colors placeholder:text-offwhite/40"
                placeholder="(401) 555-0123"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-offwhite font-medium mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
                className="w-full bg-dark-charcoal border border-offwhite/20 rounded-lg px-4 py-3 text-offwhite focus:outline-none focus:border-accent-orange transition-colors placeholder:text-offwhite/40"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="block text-offwhite font-medium mb-2"
            >
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
                className="w-full bg-dark-charcoal border border-offwhite/20 rounded-lg px-4 py-3 text-offwhite focus:outline-none focus:border-accent-orange transition-colors"
            >
              <option value="">Select a service</option>
              <option value="express">Express Wash</option>
              <option value="full-detail">Full Detail</option>
              <option value="premium">Premium Package</option>
              <option value="interior">Interior Deep Clean</option>
              <option value="custom">Custom Service</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-offwhite font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-dark-charcoal border border-offwhite/20 rounded-lg px-4 py-3 text-offwhite focus:outline-none focus:border-accent-orange transition-colors resize-none placeholder:text-offwhite/40"
              placeholder="Tell us about your car or any special requests..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-accent-orange to-accent-orange-light text-dark-charcoal px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-accent-orange/50 transform hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

