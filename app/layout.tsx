import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { notoSans } from './fonts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HubSpotTracking from '@/components/HubSpotTracking'

export const metadata: Metadata = {
  title: { default: 'Prowling Engineering', template: '%s | Prowling Engineering' },
  description:
    'Prowling Engineering designs and builds power, communications and civil infrastructure.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <HubSpotTracking />
      </body>
    </html>
  )
}
