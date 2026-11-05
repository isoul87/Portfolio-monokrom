import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Code2, ImageOff } from 'lucide-react'
import { projects } from '../content'

gsap.registerPlugin(ScrollTrigger)

const pad = (n) => String(n).padStart(2, '0')

function Preview({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Tangkapan layar ${project.title}`}
        className="works-preview border border-black object-cover object-top"
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={`Tangkapan layar ${project.title} belum tersedia`}
      className="works-preview flex flex-col items-center justify-center gap-2 border border-dashed border-stone-400 bg-stone-50 text-stone-500"
    >
      <ImageOff className="h-6 w-6" aria-hidden="true" />
      <span className="font-inter text-xs">Screenshot menyusul</span>
    </div>
  )
}

export default function Works() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const barRef = useRef(null)
  const counterRef = useRef(null)

  useLayoutEffect(() => {
    const mm = gsap.matchMedia()
    const last = projects.length - 1

    // Pin + scroll horizontal hanya bila pengguna tidak meminta gerak minimal.
    // Selain itu section tetap berupa daftar vertikal biasa.
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const section = sectionRef.current
      const track = trackRef.current
      section.classList.add('works-h')

      // Track diberi padding sehingga kartu pertama dan terakhir berhenti tepat di tengah layar.
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth)

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          // Berhenti di tengah kartu terdekat.
          snap: last > 0 ? { snapTo: 1 / last, duration: { min: 0.2, max: 0.5 }, ease: 'power2.inOut' } : false,
          onUpdate: (self) => {
            if (barRef.current) barRef.current.style.transform = `scaleX(${self.progress})`
            if (counterRef.current) {
              const i = Math.round(self.progress * last) + 1
              counterRef.current.textContent = `${pad(i)} / ${pad(projects.length)}`
            }
          },
        },
      })

      return () => {
        tween.kill()
        section.classList.remove('works-h')
        gsap.set(track, { clearProps: 'transform' })
      }
    })

    return () => mm.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="works"
      aria-labelledby="works-title"
      className="grid-paper works w-full border-t border-stone-200 bg-white"
    >
      <div className="works-head px-5 pt-[4.5rem] sm:px-12 sm:pt-24 md:px-20">
        <div className="flex items-center justify-between border-b border-black pb-3 font-inter text-xs font-medium uppercase tracking-widest text-stone-600">
          <span>Proyek</span>
          <span ref={counterRef} aria-hidden="true">
            {`01 / ${pad(projects.length)}`}
          </span>
        </div>
        <h2
          id="works-title"
          className="mt-3 font-syne text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-black sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Selected works
        </h2>
        <div className="works-bar mt-3 hidden h-px w-full bg-stone-300">
          <div ref={barRef} className="h-full origin-left scale-x-0 bg-black" />
        </div>
      </div>

      <div className="works-viewport">
        <ol ref={trackRef} className="works-track">
          {projects.map((p) => (
            <li key={p.index} className="works-card">
              <article className="works-article">
                <div className="works-text">
                  <p className="flex items-baseline gap-2 font-syne font-extrabold leading-none text-black">
                    <span className="text-4xl sm:text-5xl">{p.index}</span>
                    <span className="text-sm text-stone-500">/ {pad(projects.length)}</span>
                  </p>
                  <h3 className="mt-3 font-syne text-2xl font-extrabold uppercase leading-tight tracking-tight text-black sm:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 font-inter text-sm text-stone-600">{p.kind}</p>
                  <p className="mt-3 max-w-md font-inter text-sm leading-relaxed text-stone-700 sm:text-base">
                    {p.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Teknologi">
                    {p.stack.map((s) => (
                      <li key={s} className="border border-black px-2.5 py-1 font-inter text-xs font-medium text-black">
                        {s}
                      </li>
                    ))}
                  </ul>
                  {(p.url || p.repo) && (
                    <div className="mt-5 flex flex-wrap gap-5 font-inter text-sm font-semibold">
                      {p.url && (
                        <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline-offset-4 hover:underline">
                          Lihat situs <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                      )}
                      {p.repo && (
                        <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 underline-offset-4 hover:underline">
                          <Code2 className="h-4 w-4" aria-hidden="true" /> Kode
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <Preview project={p} />
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
