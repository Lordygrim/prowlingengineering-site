import type { Metadata } from 'next'
import PageHead from '@/components/PageHead'
import Cta from '@/components/Cta'

export const metadata: Metadata = { title: 'About us' }

const STEPS = [
  ['Listen first', 'We start with your site, load and budget before proposing a design.'],
  ['Build it right', 'Qualified engineers supervise every stage, and we test before handover.'],
  ['Stay accountable', 'You get one contact and honest updates from kickoff to completion.'],
]

export default function AboutPage() {
  return (
    <>
      <PageHead title="About Prowling Engineering" text="We exist to connect people to power, data and opportunity." />
      <section className="wrap py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold">Vision</h2>
          <p className="mut mt-3 leading-relaxed">
            To be the engineering partner that connects the world through dependable infrastructure.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Mission</h2>
          <p className="mut mt-3 leading-relaxed">
            To deliver precise, powerful and progressive engineering solutions that serve communities and last.
          </p>
        </div>
      </section>
      <section className="soft">
        <div className="wrap py-16">
          <h2 className="text-2xl font-bold">How we work</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {STEPS.map(([title, text]) => (
              <div key={title} className="tile" style={{ borderTop: '4px solid var(--teal)' }}>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="mut mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Cta text="Partner with us" />
    </>
  )
}
