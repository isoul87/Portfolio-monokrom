# Portofolio Muhamad Naufal Kuswandana

Situs portofolio satu halaman untuk **Muhamad Naufal Kuswandana**, fullstack developer dan AI engineer yang menerima proyek freelance.

## Latar belakang

Portofolio ini dibuat untuk memperkenalkan siapa saya, apa yang bisa saya kerjakan, dan proyek apa saja yang sudah saya bangun, dalam satu halaman yang cepat dibuka.

Beberapa keputusan yang melatarinya:

- **Bukan template gelap-neon yang generik.** Arah visualnya editorial monokrom: kanvas putih, tipografi besar (Clash Display, Syne, Inter), garis grid tegas. Detailnya ada di [design.md](./design.md).
- **Konten jujur.** Semua teks hanya memuat hal yang benar-benar dikerjakan: proyek, stack, dan kontak. Tidak ada angka performa atau klaim yang dikarang.
- **Ringan.** Foto hero dikompres dari 2,3 MB menjadi 45 KB (WebP), parallax tidak me-render ulang React, dan animasi dibatasi pada yang bermakna.
- **Ramah pengguna.** Responsif dari mobile sampai desktop, mendukung `prefers-reduced-motion`, dan memakai HTML semantik.

### Isi situs

| Bagian | Isi |
|---|---|
| Hero | Perkenalan dengan parallax mengikuti mouse |
| Works | 3 proyek, scroll horizontal dengan GSAP (kartu berhenti di tengah layar) |
| About | Ringkasan singkat dan tools sehari-hari |
| Services | Fullstack web, AI chatbot, freelance |
| Contact | Email dan tautan sosial media |

### Proyek yang ditampilkan

1. **Digital POS**: aplikasi kasir web (Laravel 13, Livewire, MySQL).
2. **Portfolio**: situs ini (React, Vite, Tailwind CSS).
3. **Web Undangan Nikah**: undangan digital (Next.js).

## Teknologi

- [React 19](https://react.dev) dan [Vite](https://vite.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [GSAP](https://gsap.com) + ScrollTrigger (scroll horizontal Works)
- [Motion](https://motion.dev) (animasi reveal)
- [lucide-react](https://lucide.dev) (ikon)

## Instalasi

### Prasyarat

- [Node.js](https://nodejs.org) versi **20.19 atau lebih baru** (atau 22.12+), diperlukan oleh Vite
- npm (sudah termasuk di Node.js), atau [Bun](https://bun.sh)
- [Git](https://git-scm.com)

Cek versi:

```bash
node -v
npm -v
```

### Langkah

1. **Clone repositori**

   ```bash
   git clone <url-repositori>
   cd coba
   ```

2. **Pasang dependensi**

   ```bash
   npm install
   ```

   Jika memakai Bun:

   ```bash
   bun install
   ```

3. **Jalankan server pengembangan**

   ```bash
   npm run dev
   ```

   Buka alamat yang tampil di terminal, biasanya <http://localhost:5173>.

### Perintah lain

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Server pengembangan dengan hot reload |
| `npm run build` | Build produksi ke folder `dist/` |
| `npm run preview` | Menjalankan hasil build secara lokal |
| `npm run lint` | Memeriksa kode dengan ESLint |

## Mengubah konten

Semua teks (profil, proyek, layanan, tautan sosial) ada di satu file: [`src/content.js`](./src/content.js). Tidak perlu menyentuh komponen.

Menambahkan screenshot proyek:

1. Simpan gambar (disarankan WebP, lebar sekitar 1400px) di `public/projects/`.
2. Isi `image` pada proyek terkait, misalnya `image: '/projects/nama-file.webp'`.
3. Isi `url` (situs live) dan `repo` (kode) bila ada. Tombolnya muncul otomatis, dan disembunyikan jika kosong.

## Struktur proyek

```text
coba/
├─ public/
│  ├─ projects/        # screenshot proyek
│  ├─ naufal.webp      # foto hero
│  └─ *.webp / favicon.svg
├─ src/
│  ├─ components/      # Navbar, Hero, Works, About, Services, Contact
│  ├─ content.js       # sumber tunggal konten
│  ├─ index.css        # tema Tailwind dan layout Works
│  └─ main.jsx
├─ design.md           # spesifikasi desain
└─ index.html
```

## Deploy

Jalankan `npm run build`, lalu unggah isi folder `dist/` ke layanan hosting statis seperti Vercel, Netlify, atau GitHub Pages.

## Kontak

- Email: [atbrxnk@gmail.com](mailto:atbrxnk@gmail.com)
- GitHub: [isoul87](https://github.com/isoul87)
- LinkedIn: [muhamad-naufal-kuswandana](https://www.linkedin.com/in/muhamad-naufal-kuswandana/)
- Instagram: [@nuxztech](https://www.instagram.com/nuxztech/)
- YouTube: [@nuxzid](https://youtube.com/@nuxzid)
