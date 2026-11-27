import { SERVICES } from '@/lib/site'

export default function ServiceGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {SERVICES.map((service) => (
        <article key={service.title} className="tile">
          <div className="w-10 h-1.5 mb-5" style={{ background: 'var(--teal)' }} />
          <h3 className="text-xl font-semibold">{service.title}</h3>
          <p className="mut mt-3 leading-relaxed">{service.text}</p>
        </article>
      ))}
    </div>
  )
}
