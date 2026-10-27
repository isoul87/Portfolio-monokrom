import { ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-1.5 rounded-full bg-stone-100/75 border border-stone-200/90 shadow-sm backdrop-blur-md">
        <a
          href="#works"
          className="px-3.5 py-1.5 text-xs sm:text-sm font-inter font-medium text-stone-700 hover:text-black transition-colors"
        >
          Works
        </a>
        <a
          href="#about"
          className="px-3.5 py-1.5 text-xs sm:text-sm font-inter font-medium text-stone-700 hover:text-black transition-colors"
        >
          About
        </a>
        <a
          href="#services"
          className="px-3.5 py-1.5 text-xs sm:text-sm font-inter font-medium text-stone-700 hover:text-black transition-colors"
        >
          Services
        </a>
        <a
          href="#contact"
          className="px-3.5 py-1.5 text-xs sm:text-sm font-inter font-medium text-stone-700 hover:text-black transition-colors"
        >
          Contact
        </a>

        {/* Action Button: Lets Talk */}
        <a
          href="#contact"
          className="ml-1 px-4 py-1.5 rounded-full bg-black text-white text-xs sm:text-sm font-inter font-medium inline-flex items-center gap-1 hover:bg-stone-800 transition-colors shadow-sm"
        >
          <span>Lets Talk</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </nav>
    </header>
  )
}

