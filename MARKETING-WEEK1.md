# 📊 Marketing Plan — bikinwebsitejogja.com
## Week 1 (3-9 July 2026)

---

## Ringkasan Situasi Saat Ini

**Situs:** Jasa pembuatan website fokus UMKM di Yogyakarta & sekitarnya
**Tech:** Next.js 16 (App Router), Tailwind CSS
**Status:** Semua halaman dari sitemap sudah ada (20 routes), homepage baru dibersihkan dari konten internal planning

### ✅ Yang Udah Bagus
- Semua halaman dari sitemap terstruktur: Beranda, Tentang, Layanan (3), Harga, Portofolio, Testimoni, Blog, FAQ, Kontak, Legal (3)
- Blog dengan artikel & pagination
- Layout konsisten dengan Header/Footer
- Schema LocalBusiness JSON-LD terpasang
- Sitemap.xml & robots.ts sudah ada
- Meta title & description per halaman
- WhatsApp CTA di setiap halaman
- Desain clean, font DM Sans

### ❌ Yang Perlu Dibenerin

| # | Issue | Dampak | Prioritas |
|---|-------|--------|-----------|
| 1 | **Homepage baru dibersihkan** — portofolio & testimoni masih dummy text | Site baru siap, tapi konten preview masih placeholder | **P0** |
| 2 | **Google Analytics belum terpasang** — gak bisa ukur traffic & konversi | Marketing buta | **P0** |
| 3 | **Blog masih 8 artikel** — kurang topical authority buat SEO lokal | Traffic organik lambat | **P1** |
| 4 | **Halaman layanan** (company-profile, landing-page, toko-online) perlu dicek kontennya | Konversi dari homepage ke layanan | **P1** |
| 5 | **Belum ada Search Console verified** — gak tahu keyword apa yang ngarah ke sini | Buta arah optimasi | **P1** |
| 6 | **Belum ada Google Maps embed di halaman kontak** — penting buat SEO lokal | Local pack ranking | **P1** |
| 7 | **CTA WhatsApp hardcoded** — perlu tracking parameternya biar tahu dari halaman mana lead datang | Gak bisa ukur konversi per halaman | **P2** |
| 8 | **Belum ada case study / portofolio detail per proyek** — tinggal daftar nama | Social proof kurang kuat | **P2** |

---

## 📋 Task List — Minggu 1

### 🔴 P0 — HIGH PRIORITY (Hari 1-3)

#### Task 1: Final Konten Homepage — Portofolio & Testimoni Real
**Goal:** Ganti konten placeholder di homepage dengan data real dari codeverta.com
**Estimasi:** 1 jam

**A. Portofolio preview (ganti dari 6 dummy items ke real projects):**
Baca dari `~/code/codeverta/projects.json` atau ambil dari [codeverta.com/produk](https://codeverta.com/produk) — ambil 6 proyek nyata:
1. Bapperida Papua — Pemerintahan
2. Malabar Trail Run — Event & Ticketing
3. Roxgym — Fitness & Wellness
4. NSC Bantu Perizinan — Jasa & Konsultasi
5. Million Candles — E-commerce
6. Global Inti Sekawan — Enterprise

**B. Testimoni (ganti dari dummy quotes ke testimoni real):**
Cari dari klien yang sudah ada. Sementara bisa pake quote dari artikel blog codeverta yang relevan.

**C. FAQ (udah ok dengan 4 pertanyaan umum, bisa ditambah jadi 6):**
Tambahkan:
- "Apakah website saya akan muncul di Google?"
- "Bagaimana cara memulainya?"

---

#### Task 2: Setup Google Analytics
**Goal:** Bisa ukur traffic & konversi dari awal
**Estimasi:** 30 menit

**Yang perlu dilakukan:**
1. Buka https://analytics.google.com → Buat property baru untuk bikinwebsitejogja.com
2. Copy Measurement ID (G-XXXXXXXXXX)
3. Pasang GA script di `app/layout.tsx` atau buat komponen `GAScript.tsx`
4. Set `NEXT_PUBLIC_GA_ID` di `.env.local`

**Kode GA component (`app/components/GAScript.tsx`):**
```tsx
"use client";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GAScript() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID || typeof window === "undefined") return;
    const gtag = (window as any).gtag;
    if (gtag) {
      gtag("config", GA_ID, {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams}` : ""),
      });
    }
  }, [pathname, searchParams]);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
```

---

#### Task 3: Setup Search Console + Verify
**Goal:** Pantau keyword & traffic organik sejak awal
**Estimasi:** 15 menit

1. Buka https://search.google.com/search-console
2. Add property: `bikinwebsitejogja.com`
3. Verify via:
   - DNS TXT record (recommended — langsung生效 tanpa deploy ulang)
   - Atau upload HTML file ke `/public/`
4. Submit sitemap: `https://bikinwebsitejogja.com/sitemap.xml`

---

#### Task 4: Google Maps + SEO Lokal di Halaman Kontak
**Goal:** Muncul di Google Local Pack (3 pack) untuk keyword "bikin website jogja"
**Estimasi:** 30 menit

**Yang perlu dilakukan di `app/hubungi-kami/page.tsx`:**
1. Tambahkan Google Maps embed iframe (alamat: Jl. Kaliurang, Sleman, Yogyakarta)
2. Tambahkan LocalBusiness schema yang lebih spesifik (sudah ada di homepage, tapi tambahkan juga di halaman kontak)
3. Pastikan NAP (Name, Address, Phone) konsisten di seluruh halaman

**Google Maps embed:**
```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..."
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

---

### 🟡 P1 — MEDIUM PRIORITY (Hari 3-5)

#### Task 5: Audit & Enhance Halaman Layanan
**Goal:** Pastikan halaman layanan (company-profile, landing-page, toko-online) punya konten yang meyakinkan
**Estimasi:** 2 jam

**Ceklist per halaman layanan:**
- [ ] H1 yang jelas (target keyword lokal)
- [ ] Masalah → Solusi structure
- [ ] Fitur & benefit (bukan cuma fitur teknis)
- [ ] Harga atau range harga
- [ ] Proses kerja (step-by-step)
- [ ] CTA WhatsApp
- [ ] FAQ spesifik untuk layanan tersebut
- [ ] Testimoni relevan (kalau ada)

---

#### Task 6: Tambah Artikel Blog (Minimum 3 Baru)
**Goal:** Naikin topical authority untuk keyword lokal Jogja
**Estimasi:** 3 jam

**Ide artikel yang langsung relevan untuk UMKM Jogja:**
1. **"Berapa Biaya Bikin Website UMKM di Jogja? Simak Rincian Lengkapnya"**
   - Target keyword: "biaya bikin website jogja", "harga website umkm"
   - Breakdown biaya domain, hosting, desain, maintenance
   
2. **"5 Ciri Website UMKM yang Bikin Pelanggan Lokal Langsung Percaya"**
   - Target keyword: "website umkm jogja", "website bisnis lokal"
   - Studi kasus UMKM Jogja

3. **"Website Company Profile vs Instagram: Mana yang Lebih Efektif untuk Bisnis Lokal?"**
   - Topik kontroversial yang sering ditanyakan UMKM
   - Perbandingan objektif

**Format artikel:**
- Frontmatter: title, date, image, desc, tags
- Structure: Hook → Pain → Insight → Solution → FAQ
- CTA: WhatsApp di akhir (udah auto-inject? cek dulu)

---

#### Task 7: WhatsApp Link Tracking
**Goal:** Tahu dari halaman mana lead WhatsApp datang
**Estimasi:** 30 menit

**Yang perlu dilakukan:**
1. Update semua WhatsApp link di site jadi bentuk:
   `https://wa.me/628XXXXXX?text=Halo%20saya%20tertarik%20dengan%20[NAMA_HALAMAN]...`
2. Setiap halaman punya `?text=` unik yang menyebutkan halaman asal
3. Contoh: 
   - Homepage: `?text=Halo%20saya%20tertarik%20dengan%20paket%20website%20(setelah%20lihat%20beranda)`
   - Harga: `?text=Halo%20saya%20tertarik%20dengan%20paket%20[NAMA_PAKET]`
   - Layanan: `?text=Halo%20saya%20tertarik%20dengan%20layanan%20[NAMA_LAYANAN]`

---

### 🟢 P2 — LOW PRIORITY (Hari 5-7)

#### Task 8: Review & Optimasi Meta Description Semua Halaman
**Goal:** Naikin CTR dari Google Search
**Estimasi:** 1 jam

**Ceklist:**
- [ ] Setiap halaman punya meta description unik
- [ ] Mengandung keyword lokal "Jogja", "Yogyakarta", "Sleman", "Bantul"
- [ ] Ada hook/angka yang menarik klik
- [ ] Panjang 150-160 karakter

---

#### Task 9: Siapkan Halaman Portofolio Detail
**Goal:** Bukan cuma daftar nama, tapi ada studi kasus singkat per proyek
**Estimasi:** 2 jam

**Yang perlu dibuat:**
- `app/portofolio/[slug]/page.tsx` — halaman detail per proyek
- Data portofolio dari codeverta.com yang relevan
- Template: screenshot → masalah → solusi → teknologi → link live

---

#### Task 10: Performance & SEO Audit
**Goal:** Pastikan site siap indexing & fast
**Estimasi:** 1 jam

1. Cek Lighthouse score
2. Cek Core Web Vitals
3. Cek internal linking antar halaman
4. Cek tidak ada broken links
5. Cek semua gambar punya alt text

---

### 📅 Daily Schedule

| Hari | Fokus | Tasks |
|------|-------|-------|
| **Day 1** (Jumat) | Konten Homepage + GA | **Task 1** (final konten) + **Task 2** (GA) |
| **Day 2** (Sabtu) | SEO Setup | **Task 3** (Search Console) + **Task 4** (Maps lokal) |
| **Day 3** (Minggu) | Halaman Layanan | **Task 5** (audit layanan) |
| **Day 4** (Senin) | Blog Content | **Task 6** (tulis 1-2 artikel baru) |
| **Day 5** (Selasa) | Blog + Tracking | **Task 6** (lanjut) + **Task 7** (WA tracking) |
| **Day 6** (Rabu) | Meta + Portofolio | **Task 8** + **Task 9** |
| **Day 7** (Kamis) | Audit + Review | **Task 10** + review progress |

---

### 📊 Target Minggu Ini

| KPI | Target | Cara Ukur |
|-----|--------|-----------|
| Homepage final | ✅ Konten real (no dummy) | Buka site |
| GA terpasang | ✅ | Cek real-time report |
| Search Console verified | ✅ | Cek console |
| Google Maps di kontak | ✅ | Buka /hubungi-kami |
| Halaman layanan di-audit | 3 halaman ✅ | Cek /layanan/* |
| Artikel blog baru | Minimal 2 | Cek /blog |
| WA tracking aktif | ✅ | Klik WA → cek text params |

---

### 📝 Catatan Penting

- **JANGAN auto-rebuild/restart** — report aja, user build manual
- **LocalBusiness schema** udah terpasang di homepage — bagus buat SEO lokal
- **Sitemap.xml** udah auto-generate — tinggal submit ke Search Console
- **Prioritas utama:** GA + Search Console dulu biar gak buta arah

---

*Dibuat oleh Lead Marketing Codeverta — Heri*
