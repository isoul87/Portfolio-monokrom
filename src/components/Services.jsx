import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { services } from '../content'

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="grid-paper w-full border-t border-stone-200 bg-white px-6 py-24 sm:px-12 md:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHead number="03" label="Layanan" title={'What I\ncan build.'} id="services-title" />

        <ul className="grid grid-cols-1 border-l border-t border-black md:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.num} className="border-b border-r border-black bg-white">
              <Reveal delay={i * 0.08} className="flex h-full flex-col p-7">
                <p className="font-inter text-sm font-medium text-stone-500">{s.num}</p>
                <h3 className="mt-6 font-syne text-2xl font-extrabold uppercase leading-tight tracking-tight text-black">
                  {s.title}
                </h3>
                <p className="mt-2 font-inter text-xs font-medium text-stone-600">{s.stack}</p>
                <p className="mt-5 font-inter text-base leading-relaxed text-stone-700">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
