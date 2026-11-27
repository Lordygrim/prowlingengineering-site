import Link from 'next/link'

export default function Cta({ text = 'Ready to start your project?' }: { text?: string }) {
  return (
    <section className="panel">
      <div className="bar" />
      <div className="wrap py-16 flex flex-wrap items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-bold">{text}</h2>
          <p className="mt-3 mut">Tell us what you need built. We reply within one business day.</p>
        </div>
        <Link href="/contact" className="btn teal">Get a quote</Link>
      </div>
    </section>
  )
}
