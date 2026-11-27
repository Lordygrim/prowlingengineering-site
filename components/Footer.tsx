import Link from 'next/link'
import Logo from './Logo'
import { NAV } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="border-t-4" style={{ borderColor: 'var(--teal)', background: 'var(--bg)' }}>
      <div className="wrap py-10 flex flex-wrap gap-8 justify-between text-sm">
        <div>
          <Logo height={64} />
          <p className="mt-3 mut">Precision. Power. Progress.</p>
        </div>
        <nav className="flex gap-5 mut" aria-label="Footer">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <p className="w-full mut">&copy; {new Date().getFullYear()} Prowling Engineering. All rights reserved.</p>
      </div>
    </footer>
  )
}
