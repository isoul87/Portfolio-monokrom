import { ArrowUpRight } from 'lucide-react'

const links = [
  { href: '#works', label: 'Works' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

const linkClass =
  'whitespace-nowrap px-2 py-1.5 font-inter text-xs font-medium text-stone-700 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-black sm:px-3.5 sm:text-sm'

export default function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav
        aria-label="Navigasi utama"
        className="pointer-events-auto flex items-center rounded-full border border-stone-200 bg-white/80 px-1.5 py-1 sm:px-2 sm:py-1.5 backdrop-blur-md"
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} className={linkClass}>
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className="ml-1 inline-flex items-center gap-1 whitespace-nowrap rounded-full bg-black px-3 sm:px-4 py-1.5 font-inter text-xs font-medium text-white transition-colors hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:text-sm"
        >
          Let&rsquo;s talk
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}
