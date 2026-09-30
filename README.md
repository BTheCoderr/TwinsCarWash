# Twin's Car Wash - Landing Page

<!-- repo-intro:start -->
**Project snapshot:** Twin's Car Wash is a premium, mobile-first landing page for a Providence car-wash and detailing business, built around strong branding, clear services, and fast booking/contact paths.

**What it demonstrates:** Next.js · React · TypeScript · Tailwind CSS · local-service conversion UX.
<!-- repo-intro:end -->

A high-converting, mobile-first landing page for Twin's Car Wash - a Black-Men-owned premium car wash and detailing service in Providence, Rhode Island.

## Features

- 🎨 **Premium Design**: Dark luxury aesthetic with gold, yellow, and teal accents
- 📱 **Mobile-First**: Responsive design that looks great on all devices
- ⚡ **Performance**: Built with Next.js 14 and optimized for speed
- ✨ **Animations**: Subtle, polished animations for a premium feel
- 🎯 **Conversion-Focused**: Clear CTAs and booking flow

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main landing page
├── components/
│   ├── Navigation.tsx   # Header navigation
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services showcase
│   ├── About.tsx        # About section
│   └── Contact.tsx      # Contact form
└── tailwind.config.js   # Tailwind configuration
```

## Customization

- Update contact information in `components/Contact.tsx`
- Modify services in `components/Services.tsx`
- Adjust colors in `tailwind.config.js`
- Replace placeholder images with actual car photos

## Build for Production

```bash
npm run build
npm start
```

