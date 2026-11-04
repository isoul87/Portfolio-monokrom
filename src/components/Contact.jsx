import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { profile, socials } from '../content'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard tidak tersedia; pengguna masih bisa memakai tombol email.
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="grid-paper w-full border-t border-stone-200 bg-white px-6 py-24 sm:px-12 md:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHead number="04" label="Kontak" title={'Punya proyek?\nKabari saya.'} id="contact-title" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <a
              href={`mailto:${profile.email}`}
              className="break-all font-syne text-2xl font-extrabold tracking-tight text-black underline decoration-2 underline-offset-8 hover:decoration-stone-400 sm:text-4xl"
            >
              {profile.email}
            </a>
            <div className="mt-8 flex flex-wrap gap-3 font-inter text-sm font-medium">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 bg-black px-5 py-3 text-white transition-colors hover:bg-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Kirim email <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 border border-black px-5 py-3 text-black transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
                <span aria-live="polite">{copied ? 'Tersalin' : 'Salin email'}</span>
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <h3 className="border-b border-black pb-3 font-inter text-xs font-medium uppercase tracking-widest text-stone-600">
              Di tempat lain
            </h3>
            <ul className="divide-y divide-stone-300">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-4 font-inter focus-visible:outline-2 focus-visible:outline-black"
                  >
                    <span className="text-base font-semibold text-black">{s.label}</span>
                    <span className="flex items-center gap-1.5 text-sm text-stone-600 group-hover:text-black">
                      {s.handle}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <p className="mt-24 border-t border-black pt-4 font-inter text-xs text-stone-600">
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </section>
  )
}
