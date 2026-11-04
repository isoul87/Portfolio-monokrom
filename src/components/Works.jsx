import { ArrowUpRight, Code2, ImageOff } from 'lucide-react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import { projects } from '../content'

function Preview({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Tangkapan layar ${project.title}`}
        loading="lazy"
        className="aspect-[16/10] w-full border border-black object-cover"
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={`Tangkapan layar ${project.title} belum tersedia`}
      className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 border border-dashed border-stone-400 bg-stone-50 text-stone-500"
    >
      <ImageOff className="h-6 w-6" aria-hidden="true" />
      <span className="font-inter text-xs">Screenshot menyusul</span>
    </div>
  )
}

export default function Works() {
  return (
    <section
      id="works"
      aria-labelledby="works-title"
      className="grid-paper w-full border-t border-stone-200 bg-white px-6 py-24 sm:px-12 md:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHead number="01" label={`${projects.length} proyek`} title={'Selected\nworks'} id="works-title" />

        <ol className="divide-y divide-black border-y border-black">
          {projects.map((p) => (
            <li key={p.index}>
              <Reveal className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                  <p className="font-inter text-sm font-medium text-stone-500">{p.index}</p>
                  <h3 className="mt-2 font-syne text-3xl font-extrabold uppercase leading-tight tracking-tight text-black sm:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 font-inter text-sm text-stone-600">{p.kind}</p>
                  <p className="mt-5 max-w-md font-inter text-base leading-relaxed text-stone-700">
                    {p.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Teknologi">
                    {p.stack.map((s) => (
                      <li key={s} className="border border-black px-2.5 py-1 font-inter text-xs font-medium text-black">
                        {s}
                      </li>
                    ))}
                  </ul>
                  {(p.url || p.repo) && (
                    <div className="mt-6 flex flex-wrap gap-5 font-inter text-sm font-semibold">
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
                <div className="lg:col-span-7">
                  <Preview project={p} />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
