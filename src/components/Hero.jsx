import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import { profile } from '../content'

// Kedalaman parallax per layer (px). Nilai negatif = bergerak berlawanan arah mouse.
const DEPTH = { text: [-16, -8], logo: [-26, -14], photo: [10, 5], label: [6, 4] }

export default function Hero() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!root || !canHover || reduced) return

    const layers = [...root.querySelectorAll('[data-depth]')].map((el) => ({
      el,
      d: DEPTH[el.dataset.depth],
    }))
    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }
    let frame = 0

    const apply = () => {
      current.x += (target.x - current.x) * 0.08
      current.y += (target.y - current.y) * 0.08
      for (const { el, d } of layers) {
        el.style.transform = `translate3d(${current.x * d[0]}px, ${current.y * d[1]}px, 0)`
      }
      // Berhenti menjadwalkan frame begitu posisi sudah mapan.
      if (Math.abs(target.x - current.x) > 0.001 || Math.abs(target.y - current.y) > 0.001) {
        frame = requestAnimationFrame(apply)
      } else {
        frame = 0
      }
    }

    const onMove = (e) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1
      target.y = (e.clientY / window.innerHeight) * 2 - 1
      if (!frame) frame = requestAnimationFrame(apply)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
      ref={rootRef}
      id="hero"
      aria-label="Perkenalan"
      className="grid-paper relative flex h-svh min-h-[560px] w-full items-center justify-center overflow-hidden bg-white"
    >
      {/* Teks latar raksasa (dekoratif, nama jabatan sebenarnya ada di h1 dan paragraf) */}
      <div
        data-depth="text"
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[34%] z-10 -translate-y-1/2 px-2 text-center will-change-transform"
      >
        <div className="font-clash text-[19vw] font-bold uppercase leading-[0.86] tracking-tight text-stone-300 md:text-[10.5vw]">
          Fullstack
          <br />
          Developer
        </div>
      </div>

      <img
        data-depth="logo"
        src="/react-outline.webp"
        alt=""
        width="166"
        height="152"
        className="pointer-events-none absolute left-[6%] top-[18%] z-[15] w-14 opacity-90 will-change-transform sm:w-20 md:left-[9%] md:w-28"
      />
      <img
        data-depth="logo"
        src="/laravel-outline.webp"
        alt=""
        width="164"
        height="170"
        className="pointer-events-none absolute right-[6%] top-[16%] z-[15] w-14 opacity-90 will-change-transform sm:w-20 md:right-[9%] md:w-28"
      />

      <div
        data-depth="photo"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-end justify-center will-change-transform"
      >
        <img
          src="/naufal.webp"
          alt={`Foto ${profile.name}`}
          width="1717"
          height="1400"
          fetchPriority="high"
          className="h-[74vh] max-h-[850px] object-contain object-bottom grayscale contrast-[1.08] md:h-[86vh]"
        />
      </div>

      <div data-depth="label" className="absolute bottom-8 left-6 z-30 max-w-[260px] will-change-transform sm:bottom-12 sm:left-12 md:bottom-16 md:left-20">
        <h1 className="font-syne text-2xl font-extrabold uppercase leading-[1.04] tracking-tight text-black sm:text-3xl md:text-4xl lg:text-[44px]">
          Muhamad
          <br />
          Naufal K.
        </h1>
        <p className="mt-3 max-w-[22ch] font-inter text-xs leading-snug text-stone-700 sm:text-sm">
          {profile.role}
        </p>
        <a
          href="#works"
          className="group mt-5 inline-flex items-center gap-2 font-inter text-sm font-semibold text-black underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          Lihat proyek
          <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" strokeWidth={2.5} />
        </a>
      </div>

      <div data-depth="label" className="absolute bottom-10 right-6 z-30 text-right will-change-transform sm:bottom-14 sm:right-12 md:right-20">
        <p className="font-syne text-lg font-extrabold uppercase leading-[1.12] tracking-wider text-black sm:text-2xl md:text-[28px]">
          Available
          <br />
          for
          <br />
          freelance
        </p>
      </div>
    </section>
  )
}
