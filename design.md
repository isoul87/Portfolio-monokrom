# Design Specification: Editorial Brutalist Portfolio

Dokumentasi spesifikasi desain untuk website portofolio **Muhamad Naufal Kuswandana** berbasis referensi visual *Editorial Neo-Brutalist / Modern Architectural Grid*.

---

## 1. Visi & Identitas Visual (Design Concept)

Desain ini mengusung estetika **High-End Editorial Monochrome & Architectural Grid**:
- **Tone**: Percaya diri, berbobot, minimalis, presisi teknis, dan berfokus pada tipografi berskala besar (*giant scale typography*).
- **Diferensiasi Kompetisi**: Berbeda dari kebanyakan web lomba yang menggunakan template dark-mode neon generik (AI-slop), gaya *monochrome editorial grid* di atas kanvas putih/terang ini memberikan kesan desainer/developer berkelas tinggi (*Awwwards / Siteinspire curated style*).
- **Komposisi Depth (Layering)**: Subjek foto (Muhamad Naufal Kuswandana) memotong teks latar belakang (*overlap depth*), menciptakan kedalaman dimensi 2.5D alami.

---

## 2. Tipografi (Typography System)

Sesuai instruksi dan referensi visual, sistem tipografi menggunakan 3 font dengan peran spesifik:

| Peran Elemen | Font Family | Weight | Karakter & Kegunaan |
|---|---|---|---|
| **Big Background Text** | **Clash Display** | Bold (700) | Teks raksasa `"CREATIVE DEVELOPER"`. Memberikan fondasi visual yang kokoh, modern, dan berkarakter industri kreatif. |
| **Name & Status Block** | **Syne** | ExtraBold (800) | Teks `"MUHAMAD NAUFAL K."` dan `"AVAILABLE FOR FREELANCE"`. Memberikan aksentuasi geometris yang lebar (*wide/extended architecture*) dan tegas. |
| **Navigation & UI Controls** | **Inter** | Regular (400) & Medium (500) | Navigasi menu (`Works`, `About`, `Services`, `Contact`) dan tombol CTA `Lets Talk ↗`. Menjamin keterbacaan tinggi (*optimal legibility*). |
| **Secondary & Archive Link** | **Inter** / **Syne** | Medium (500) | Teks navigasi scroll `"View Archive ↓"`. |

### Import Web Fonts
```html
<!-- Google Fonts: Syne & Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@700;800&display=swap" rel="stylesheet">

<!-- Fontshare CDN: Clash Display -->
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap" rel="stylesheet">
```

### Konfigurasi Tailwind CSS (v4 Theme)
```css
@theme {
  --font-clash: 'Clash Display', sans-serif;
  --font-syne: 'Syne', sans-serif;
  --font-inter: 'Inter', sans-serif;
}
```

---

## 3. Palet Warna (Color Palette)

Skema warna monokromatis editorial dengan kontras terukur:

```
┌────────────────────────────────────────────────────────┐
│  #FFFFFF  │ Canvas Base (Pure White / Light Off-White) │
├────────────────────────────────────────────────────────┤
│  #F3F4F6  │ Subtle Background Grid Lines & Pill Fills  │
├────────────────────────────────────────────────────────┤
│  #D1D5DB  │ Big Background Text ("CREATIVE DEVELOPER") │
├────────────────────────────────────────────────────────┤
│  #111827  │ Primary Text & Cutout Subject Contrast     │
├────────────────────────────────────────────────────────┤
│  #000000  │ Deep Black Accent (CTA "Lets Talk ↗", Name)│
└────────────────────────────────────────────────────────┘
```

- **Canvas Background**: `#FFFFFF` / `#FAFAFA`
- **Architectural Grid Line**: `rgba(0, 0, 0, 0.06)` atau `#E5E7EB` (garis grid 80px x 80px)
- **Giant Midground Text**: `#D1D5DB` / `rgba(0, 0, 0, 0.14)`
- **Foreground Text**: `#0A0A0A` / `#111827`
- **Pill Container**: `rgba(255, 255, 255, 0.85)` dengan `backdrop-blur-md` dan border tipis `rgba(0, 0, 0, 0.08)`

---

## 4. Struktur Layering & Layout Hero

```
+-------------------------------------------------------------------------+
|                                                                         |
|            [ Works    About    Services    Contact    (Lets Talk ↗) ]   |  <- Layer 4: Navbar (Inter)
|                                                                         |
|   +-----------------------------------------------------------------+   |
|   | Grid Background (Architectural Graph Lines)                     |   |  <- Layer 0: Grid
|   +-----------------------------------------------------------------+   |
|                                                                         |
|       C R E A T I V E       D E V E L O P E R                           |  <- Layer 1: Clash Display
|                                                                         |
|                             [ PHOTO ]                                   |
|                             [ CUTOUT]                                   |  <- Layer 2: Person Cutout
|                             [ NAUFAL]                                   |
|                                                                         |
|   MUHAMAD NAUFAL K.                               AVAILABLE             |  <- Layer 3: Syne ExtraBold
|                                                   FOR                   |
|   View Archive ↓                                  FREELANCE             |
|                                                                         |
+-------------------------------------------------------------------------+
```

### Breakdown Z-Index & Kedalaman:
1. **Layer 0 (`z-0`) — Background & Grid**:
   - Pola garis kisi (*architectural blueprint grid*) responsif.
   - Menggunakan CSS background linear-gradient grid:
     ```css
     background-image: 
       linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
       linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
     background-size: 80px 80px;
     ```
2. **Layer 1 (`z-10`) — Giant Text "CREATIVE DEVELOPER"**:
   - Font: **Clash Display Bold**.
   - Ukuran: Responsif `clamp(3.5rem, 9.5vw, 11rem)`.
   - Warna: Abu-abu terang (`#D1D5DB`), posisi di tengah layar horizontal, melintang di belakang dada/bahu subjek foto.
3. **Layer 2 (`z-20`) — Cutout Portrait**:
   - Foto Muhamad Naufal Kuswandana dalam format PNG transparan dengan pose reflektif tangan di dagu.
   - Grading: Hitam putih kontras tinggi (*high contrast black & white*).
   - Penempatan: Berdiri dari bagian bawah viewport ke arah tengah layar (`max-h-[85vh]`).
4. **Layer 3 (`z-30`) — Editorial Typography Overlay**:
   - **Kiri Bawah**:
     - Judul Nama: `"MUHAMAD NAUFAL K."` / `"MUHAMAD NAUFAL KUSWANDANA"` (Font: **Syne ExtraBold**, ukuran ~`2.25rem - 3.5rem`, uppercase, line-height rapat).
     - Link Navigasi: `"View Archive ↓"` (Font: **Inter / Syne Medium**, panah tebal ke bawah dengan interaksi hover translate).
   - **Kanan Bawah**:
     - Status Ketersediaan: `"AVAILABLE FOR FREELANCE"` (Font: **Syne ExtraBold**, teks 3 baris uppercase, wide tracking).
5. **Layer 4 (`z-40`) — Floating Island Navbar**:
   - Letak: `fixed top-6 left-1/2 -translate-x-1/2`.
   - Bentuk: Rounded full pill dengan efek frosted glass.
   - Menu items: `Works`, `About`, `Services`, `Contact` menggunakan font **Inter**.
   - CTA button: Kapsul hitam pekat `"Lets Talk ↗"` dengan font **Inter Medium**.

---

## 5. Spesifikasi Teknis Komponen

### A. Komponen Navbar (`Navbar.jsx`)
```jsx
// Karakteristik Kunci:
// - Font: Inter
// - Container: rounded-full, backdrop-blur-md, bg-white/75, border border-stone-200/80
// - Items: text-xs font-medium text-stone-700 hover:text-black
// - Button: bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5
```

### B. Komponen Hero (`Hero.jsx`)
```jsx
// Karakteristik Kunci:
// - Background: Grid pattern 80px x 80px
// - Big Typography: "CREATIVE DEVELOPER" font-['Clash_Display'] font-bold text-stone-300/80 tracking-tight
// - Foto Cutout: /naufal-hero.png centered, bottom-anchored, z-20
// - Bottom Left: "MUHAMAD NAUFAL K." font-['Syne'] font-extrabold text-stone-950 + "View Archive ↓"
// - Bottom Right: "AVAILABLE FOR FREELANCE" font-['Syne'] font-extrabold text-stone-950 tracking-wider
```

### C. Responsivitas Layar (Mobile Breakpoints)
- **Desktop (>= 1024px)**: Komposisi penuh persis sesuai mockup (foto di tengah, teks raksasa di belakang, nama di kiri bawah, status di kanan bawah).
- **Tablet (768px - 1023px)**: Skala teks disesuaikan dengan `clamp()`, foto tetap di tengah, layout teks kiri-kanan tetap presisi.
- **Mobile (< 768px)**:
  - Navbar beralih ke mobile drawer atau compact pill.
  - Teks `"CREATIVE DEVELOPER"` berskala `text-4xl - text-5xl`.
  - Teks `"MUHAMAD NAUFAL K."` dan `"AVAILABLE FOR FREELANCE"` disusun secara fleksibel di atas atau di bawah foto agar tidak tumpang tindih secara berantakan.

---

## 6. Interaksi & Micro-physics (Competition Polish)

Untuk mempertahankan keunggulan dalam penjurian lomba:
1. **Mouse Parallax**: Gerakan kursor menghasilkan pergeseran parallax halus berbobot (*lerp inertia*) antara teks latar belakang, foto diri, dan teks depan.
2. **Magnetic Cursor**: Tombol `"Lets Talk ↗"` dan `"View Archive ↓"` memiliki tarikan magnetik mikro saat kursor mendekat.
3. **Smooth Scroll**: Mengklik `"View Archive ↓"` akan melakukan smooth scroll langsung ke section portofolio/studi kasus.
4. **Interactive Grid Hover**: Titik temu grid memancarkan highlight halus ketika didekati kursor.

---

## 7. Status Eksekusi & Integrasi

- [x] Aset visual referensi diekstrak dan disimpan di `public/naufal-hero.png`.
- [x] Dokumentasi `design.md` dirumuskan dengan standar tipografi **Clash Display**, **Syne**, dan **Inter**.
- [ ] Integrasi font link ke `index.html` dan Tailwind `@theme` di `src/index.css`.
- [ ] Penggantian layout Hero di `src/components/Hero.jsx` sesuai komposisi baru.
- [ ] Penyesuaian `Navbar.jsx` dengan gaya pill Inter dan CTA `"Lets Talk ↗"`.
