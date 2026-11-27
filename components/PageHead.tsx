export default function PageHead({ title, text }: { title: string; text: string }) {
  return (
    <section className="panel">
      <div className="wrap py-16">
        <h1 className="s1 text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="s2 mt-4 text-lg mut max-w-2xl">{text}</p>
      </div>
      <div className="bar" />
    </section>
  )
}
