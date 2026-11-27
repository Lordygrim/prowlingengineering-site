import Link from 'next/link'

export default function Hero() {
  return (
    <section className="panel relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              height: '18px',
              right: -40 + i * 30,
              top: 70 + i * 64,
              width: 340 - i * 35,
              background: i % 2 ? '#1FD1C1' : '#1B2A47',
            }}
          />
        ))}
      </div>
      <div className="wrap py-24 md:py-32 relative">
        <p className="s1 text-lg font-semibold" style={{ color: 'var(--deep)' }}>Precision. Power. Progress.</p>
        <h1 className="s2 text-5xl md:text-7xl font-bold mt-4 max-w-3xl leading-[1.05]">
          Infrastructure engineered to last.
        </h1>
        <p className="s3 mt-6 text-lg max-w-xl mut">
          Prowling Engineering designs and builds the power, communications and civil infrastructure that keeps communities running.
        </p>
        <div className="s3 mt-9 flex gap-3 flex-wrap">
          <Link href="/services" className="btn teal">See our services</Link>
          <Link href="/contact" className="btn ghost">Talk to an engineer</Link>
        </div>
      </div>
      <div className="bar" />
    </section>
  )
}
