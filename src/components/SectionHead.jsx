import Reveal from './Reveal'

export default function SectionHead({ number, label, title, id }) {
  return (
    <header className="pb-10">
      <div className="flex items-center justify-between border-b border-black pb-3 font-inter text-xs font-medium uppercase tracking-widest text-stone-600">
        <span>{number}</span>
        <span>{label}</span>
      </div>
      <Reveal as="h2" className="mt-10 whitespace-pre-line font-syne text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-black sm:text-6xl md:text-7xl">
        <span id={id}>{title}</span>
      </Reveal>
    </header>
  )
}
