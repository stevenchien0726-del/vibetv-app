import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vibe TV',
  description: 'Vibe TV App',
  icons: {
    icon: '/vibetv-icon.png',
    apple: '/vibetv-apple.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* 🔥 這行是關鍵 */}
        <link rel="apple-touch-icon" href="/vibetv-apple.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}