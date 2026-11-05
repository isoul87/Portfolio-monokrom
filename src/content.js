// Sumber tunggal konten situs. Ubah di sini, bukan di komponen.
// Kolom `url` / `image` yang kosong ('') akan disembunyikan / diganti placeholder.

export const profile = {
  name: 'Muhamad Naufal Kuswandana',
  shortName: 'Muhamad Naufal K.',
  email: 'atbrxnk@gmail.com',
  role: 'Fullstack Developer & AI Engineer',
}

export const socials = [
  { label: 'GitHub', handle: 'isoul87', url: 'https://github.com/isoul87' },
  { label: 'LinkedIn', handle: 'muhamad-naufal-kuswandana', url: 'https://www.linkedin.com/in/muhamad-naufal-kuswandana/' },
  { label: 'Instagram', handle: '@nuxztech', url: 'https://www.instagram.com/nuxztech/' },
  { label: 'YouTube', handle: '@nuxzid', url: 'https://youtube.com/@nuxzid' },
]

export const projects = [
  {
    index: '01',
    title: 'Digital POS',
    kind: 'Aplikasi web kasir',
    stack: ['Laravel 13', 'Livewire', 'MySQL'],
    description:
      'Aplikasi point of sale berbasis web yang dibangun dengan Laravel 13 dan Livewire, dengan data tersimpan di MySQL.',
    image: '/projects/digital-pos.webp',
    url: '',
    repo: '',
  },
  {
    index: '02',
    title: 'Portfolio',
    kind: 'Situs portofolio',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    description:
      'Situs yang sedang kamu buka. Tata letak editorial monokrom dengan tipografi besar dan animasi yang secukupnya.',
    image: '/projects/portfolio.webp',
    url: '',
    repo: 'https://github.com/isoul87/Portfolio-monokrom',
  },
  {
    index: '03',
    title: 'Web Undangan Nikah',
    kind: 'Undangan digital',
    stack: ['Next.js'],
    description: 'Situs undangan pernikahan digital yang dibangun dengan Next.js.',
    image: '/projects/undangan-nikah.webp',
    url: '',
    repo: '',
  },
]

export const services = [
  {
    num: '01',
    title: 'Fullstack Web',
    stack: 'Laravel · Livewire · React · Next.js · MySQL',
    body: 'Dari desain database sampai antarmuka. Aplikasi bisnis seperti sistem kasir, dashboard, dan situs undangan.',
  },
  {
    num: '02',
    title: 'AI Chatbot',
    stack: 'Chatbot · Pengiriman otomatis',
    body: 'Chatbot yang menjawab pelanggan dan mengirim hasilnya otomatis ke klien tanpa perlu disalin manual.',
  },
  {
    num: '03',
    title: 'Freelance',
    stack: 'Proyek per kebutuhan',
    body: 'Bekerja langsung dengan klien, satu orang yang bertanggung jawab dari diskusi sampai rilis.',
  },
]

export const skills = ['Laravel', 'Livewire', 'MySQL', 'React', 'Vite', 'Next.js', 'Tailwind CSS', 'AI Chatbot']
