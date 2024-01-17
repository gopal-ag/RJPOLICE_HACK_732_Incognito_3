import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin | Sentinel AI',
  description: 'SentinelAI is an advanced Intelligent CCTV Camera Management System designed to enhance surveillance, public safety, and law enforcement efforts. This comprehensive system integrates cutting-edge technologies, including facial recognition, object detection, vandalism detection, reverse lost and found, and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
