import type { Metadata } from 'next'
import PageHead from '@/components/PageHead'
import Cta from '@/components/Cta'

export const metadata: Metadata = { title: 'Environment, health and safety' }

const ITEMS = [
  ['Safety on site', 'Everyone on site wears the right protective equipment, and toolbox talks happen before work starts.'],
  ['Environmental care', 'We plan works to limit waste, protect water and soil, and restore sites after construction.'],
  ['Community engagement', 'We consult local communities early and employ locally where we can.'],
]

export default function EhsPage() {
  return (
    <>
      <PageHead
        title="Environment, health and safety"
        text="No project is worth an injury or avoidable damage to the environment."
      />
      <section className="wrap py-16 grid md:grid-cols-3 gap-6">
        {ITEMS.map(([title, text]) => (
          <article key={title} className="tile">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mut mt-3 leading-relaxed">{text}</p>
          </article>
        ))}
      </section>
      <Cta text="Safety and sustainability first" />
    </>
  )
}
