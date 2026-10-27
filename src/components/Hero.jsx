import { useState, useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const currentRef = useRef({ x: 0, y: 0 })
  const animFrameId = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalisasi -1 sampai +1
      targetRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      targetRef.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        targetRef.current.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1
        targetRef.current.y = (e.touches[0].clientY / window.innerHeight) * 2 - 1
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    // Smooth Lerping Physics (0.07 damping factor)
    const updatePhysics = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.07
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.07

      setOffset({
        x: currentRef.current.x,
        y: currentRef.current.y
      })

      animFrameId.current = requestAnimationFrame(updatePhysics)
    }

    animFrameId.current = requestAnimationFrame(updatePhysics)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-white select-none flex items-center justify-center"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.055) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.055) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px'
      }}
    >
      {/* LAYER 1: Giant Background Text - Clash Display Bold */}
      <div
        className="absolute inset-x-0 top-[35%] -translate-y-1/2 flex items-center justify-center pointer-events-none z-10 will-change-transform px-2 text-center"
        style={{
          transform: `translate3d(${offset.x * -16}px, ${offset.y * -8}px, 0)`
        }}
      >
        <h2 className="font-clash font-bold text-stone-300 text-[11.5vw] md:text-9xl leading-none tracking-tight uppercase whitespace-nowrap drop-shadow-sm">
          CREATIVE DEVELOPER
        </h2>
      </div>

      {/* LAYER 1.5: Floating Tech Logos in Background (Exact Outline style) */}
      {/* Floating React Outline Logo (Left) */}
      <div
        className="absolute top-[20%] sm:top-[22%] md:top-[13%] left-[5%] sm:left-[7%] md:left-[9%] pointer-events-none z-[15] will-change-transform"
        style={{
          transform: `translate3d(${offset.x * -16}px, ${offset.y * -10}px, 0)`
        }}
      >
        <div className="animate-float-slow-1">
          <img
            src="/react-outline-hd.png"
            alt="React Outline"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[92px] md:h-[92px] object-contain opacity-75 select-none"
            loading="eager"
          />
        </div>
      </div>

      {/* Floating Laravel Outline Logo (Right) */}
      <div
        className="absolute top-[19%] sm:top-[21%] md:top-[1  2%] right-[5%] sm:right-[7%] md:right-[9%] pointer-events-none z-[15] will-change-transform"
        style={{
          transform: `translate3d(${offset.x * -14}px, ${offset.y * -8}px, 0)`
        }}
      >
        <div className="animate-float-slow-2">
          <img
            src="/laravel-outline-hd.png"
            alt="Laravel Outline"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-[92px] md:h-[92px] object-contain opacity-80 select-none"
            loading="eager"
          />
        </div>
      </div>

      {/* LAYER 2: Cutout Subject (Firefly.png) */}
      <div
        className="absolute bottom-0 inset-x-0 flex items-end justify-center pointer-events-none z-20 will-change-transform"
        style={{
          transform: `translate3d(${offset.x * 10}px, ${offset.y * 5}px, 0)`
        }}
      >
        <img
          src="/Firefly.png"
          alt="Muhamad Naufal Kuswandana"
          className="h-[78vh] sm:h-[84vh] md:h-[88vh] max-h-[850px] object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] filter grayscale contrast-[1.08]"
          loading="eager"
        />
      </div>

      {/* LAYER 3: Bottom Left - Name & View Archive (Syne ExtraBold & Inter) */}
      <div
        className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-6 sm:left-12 md:left-20 z-30 will-change-transform max-w-[280px] sm:max-w-md"
        style={{
          transform: `translate3d(${offset.x * 6}px, ${offset.y * 4}px, 0)`
        }}
      >
        <h1 className="font-syne font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.04] tracking-tight text-black uppercase">
          MUHAMAD <br />
          NAUFAL K.
        </h1>

        <a
          href="#works"
          className="mt-5 sm:mt-7 inline-flex items-center gap-2.5 text-black hover:text-stone-700 transition-colors group cursor-pointer"
        >
          <span className="font-inter font-semibold text-sm sm:text-base tracking-tight">
            View Archive
          </span>
          <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5] group-hover:translate-y-1 transition-transform" />
        </a>
      </div>

      {/* LAYER 4: Bottom Right - Available for Freelance (Syne ExtraBold) */}
      <div
        className="absolute bottom-10 sm:bottom-14 md:bottom-18 right-6 sm:right-12 md:right-20 z-30 will-change-transform text-right sm:text-left"
        style={{
          transform: `translate3d(${offset.x * 6}px, ${offset.y * 4}px, 0)`
        }}
      >
        <div className="font-syne font-extrabold text-lg sm:text-2xl md:text-[28px] leading-[1.12] tracking-wider text-black uppercase">
          AVAILABLE <br />
          FOR <br />
          FREELANCE
        </div>
      </div>
    </section>
  )
}

