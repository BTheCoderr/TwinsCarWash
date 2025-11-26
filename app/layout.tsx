import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Twin's Car Wash | Premium Car Detailing in Providence, RI",
  description: 'Luxury car care in the city. Black-Men-owned, detail-obsessed, neighborhood trusted. Experience the shine.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

