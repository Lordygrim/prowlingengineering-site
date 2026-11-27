import type { Metadata } from 'next'
import PageHead from '@/components/PageHead'
import ContactForm from '@/components/ContactForm'
import { SITE } from '@/lib/site'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <>
      <PageHead
        title="Contact us"
        text="Tell us about your project and we will reply within one business day."
      />
      <section className="wrap py-16 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <ContactForm />
        </div>
        <aside className="md:col-span-2 tile self-start">
          <h2 className="text-xl font-bold">Get in touch</h2>
          <dl className="mt-4 space-y-3">
            <div><dt className="font-semibold">Phone</dt><dd className="mut">{SITE.phone}</dd></div>
            <div><dt className="font-semibold">Email</dt><dd className="mut">{SITE.email}</dd></div>
            <div><dt className="font-semibold">Address</dt><dd className="mut">{SITE.address}</dd></div>
          </dl>
          <p className="mt-6 font-semibold" style={{ color: 'var(--deep)' }}>{SITE.hours}</p>
        </aside>
      </section>
    </>
  )
}
