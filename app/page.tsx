import Hero from '@/components/Hero'
import ServiceGrid from '@/components/ServiceGrid'
import Cta from '@/components/Cta'

const PILLARS = [
  ['Precision', 'Every drawing, cable and weld is checked against specification before it leaves our hands.'],
  ['Power', 'We deliver capacity that holds up under real load, from the first connection to full operation.'],
  ['Progress', 'Clear milestones and plain-language reporting keep your project moving and your team informed.'],
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="wrap py-20">
        <h2 className="text-3xl font-bold max-w-xl">What we build</h2>
        <p className="mut mt-3 max-w-xl">
          Six disciplines under one roof, so your project has a single point of accountability.
        </p>
        <div className="mt-10">
          <ServiceGrid />
        </div>
      </section>
      <section className="soft">
        <div className="wrap py-20 grid md:grid-cols-3 gap-10">
          {PILLARS.map(([title, text]) => (
            <div key={title} className="tile">
              <h3 className="text-2xl font-bold" style={{ color: 'var(--deep)' }}>{title}</h3>
              <p className="mt-3 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <Cta />
    </>
  )
}
