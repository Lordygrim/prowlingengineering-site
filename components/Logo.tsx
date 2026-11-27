import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ height = 64 }: { height?: number }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="Prowling Engineering home">
      <Image
        src="/logo.svg"
        alt="Prowling Engineering"
        height={height}
        width={Math.round((height * 2873) / 942)}
        unoptimized
        priority
      />
    </Link>
  )
}
