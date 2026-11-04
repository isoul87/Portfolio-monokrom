import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { skills } from '../content'

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="grid-paper w-full border-t border-stone-200 bg-white px-6 py-24 sm:px-12 md:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHead number="02" label="Tentang" title={'Fullstack dev,\nAI engineer.'} id="about-title" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="space-y-5 font-inter text-lg leading-relaxed text-stone-800 lg:col-span-7">
            <p>
              Saya Muhamad Naufal Kuswandana, developer fullstack dan AI engineer yang menerima proyek
              freelance.
            </p>
            <p>
              Backend saya kerjakan dengan Laravel, Livewire, dan MySQL. Untuk sisi depan saya memakai React,
              Vite, dan Next.js. Saya juga membangun chatbot AI yang bisa mengirim hasilnya otomatis ke klien.
            </p>
            <p className="text-stone-600">
              Proyek yang pernah saya buat: sistem kasir Digital POS, situs portofolio ini, dan web undangan
              pernikahan.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <h3 className="border-b border-black pb-3 font-inter text-xs font-medium uppercase tracking-widest text-stone-600">
              Tools sehari-hari
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li key={s} className="border border-black px-3 py-1.5 font-inter text-sm font-medium text-black">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
