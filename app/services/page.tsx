import type { Metadata } from 'next'
import PageHead from '@/components/PageHead'
import ServiceGrid from '@/components/ServiceGrid'
import Cta from '@/components/Cta'

export const metadata: Metadata = { title: 'Services' }

export default function ServicesPage() {
  return (
    <>
      <PageHead title="Our services" text="Engineering and construction for the networks communities depend on." />
      <section className="wrap py-16">
        <ServiceGrid />
      </section>
      <Cta />
    </>
  )
}
