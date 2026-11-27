'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { NAV } from '@/lib/site'

export default function Header() {
  const pathname = usePathname()
  return (
    <header
      className="sticky top-0 z-20 border-b ln"
      style={{ background: 'var(--bg)', paddingTop: 'env(safe-area-inset-top,0px)' }}
    >
      <div className="wrap py-3 flex items-center justify-between gap-4 flex-wrap">
        <Logo />
        <nav className="flex items-center gap-1 sm:gap-2 text-sm font-medium" aria-label="Main">
          {NAV.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className="px-2.5 py-2 rounded"
                style={{ borderBottom: active ? '3px solid var(--teal)' : '3px solid transparent' }}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <Link href="/contact" className="btn navy !py-2 text-sm">Get a quote</Link>
      </div>
    </header>
  )
}
