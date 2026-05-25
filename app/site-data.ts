export const site = {
  name: "Bikin Website Jogja",
  company: "PT Zenit Technology Solution",
  url: "https://bikinwebsitejogja.com",
  phone: "+62 881-0116-92615",
  whatsapp: "https://wa.me/62881011692615",
  email: "contact@codeverta.com",
  address:
    "Yogyakarta, melayani Sleman, Bantul, Gunungkidul, Kulon Progo, dan Kota Jogja",
  mapUrl: "https://maps.app.goo.gl/SwThQAwLRoemLLpAA",
};

export const navigation = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang-kami" },
  { label: "Layanan", href: "/layanan/company-profile" },
  { label: "Harga", href: "/harga-paket" },
  { label: "Blog", href: "/blog" },
  { label: "Kontak", href: "/hubungi-kami" },
];

export const sitemapPlan = [
  {
    group: "Halaman Utama",
    pages: [
      {
        title: "Beranda",
        href: "/",
        purpose:
          "Pintu masuk utama untuk menjelaskan positioning, layanan, bukti kepercayaan, dan CTA WhatsApp.",
      },
    ],
  },
  {
    group: "Halaman Profil",
    pages: [
      {
        title: "Tentang Kami",
        href: "/tentang-kami",
        purpose:
          "Membangun kredibilitas lewat sejarah, visi, misi, tim, dan legalitas PT Zenit Technology Solution.",
      },
    ],
  },
  {
    group: "Halaman Layanan",
    pages: [
      {
        title: "Layanan Bikin Web Company Profile",
        href: "/layanan/company-profile",
        purpose:
          "Menargetkan bisnis lokal yang butuh profil usaha profesional dan mudah ditemukan Google.",
      },
      {
        title: "Layanan Bikin Landing Page Promosi",
        href: "/layanan/landing-page",
        purpose:
          "Menjelaskan solusi halaman promosi cepat untuk iklan, campaign, event, dan penawaran khusus.",
      },
      {
        title: "Layanan Bikin Web Toko Online",
        href: "/layanan/toko-online",
        purpose:
          "Menawarkan katalog online, order via WhatsApp, dan opsi integrasi payment gateway.",
      },
    ],
  },
  {
    group: "Halaman Konversi",
    pages: [
      {
        title: "Harga & Paket",
        href: "/harga-paket",
        purpose:
          "Membantu calon klien memilih paket Basic, Pro, atau Bisnis dengan fitur dan CTA yang jelas.",
      },
      {
        title: "Portofolio Klien",
        href: "/portofolio",
        purpose:
          "Menampilkan contoh pekerjaan dan kategori industri agar calon klien lebih yakin.",
      },
      {
        title: "Testimoni",
        href: "/testimoni",
        purpose:
          "Menguatkan social proof dari UMKM, profesional, dan brand lokal Jogja.",
      },
    ],
  },
  {
    group: "Halaman Informasi",
    pages: [
      {
        title: "Blog/Artikel Edukasi UMKM",
        href: "/blog",
        purpose:
          "Membangun topical authority seputar website, digital marketing, dan kebutuhan UMKM Jogja.",
      },
      {
        title: "FAQ",
        href: "/faq",
        purpose:
          "Menjawab keberatan umum tentang biaya, proses, domain, hosting, revisi, dan maintenance.",
      },
    ],
  },
  {
    group: "Halaman Kontak",
    pages: [
      {
        title: "Hubungi Kami",
        href: "/hubungi-kami",
        purpose:
          "Mengumpulkan lead lewat alamat, Google Maps, formulir singkat, dan tombol WhatsApp.",
      },
    ],
  },
  {
    group: "Halaman Legalitas",
    pages: [
      {
        title: "Kebijakan Privasi",
        href: "/kebijakan-privasi",
        purpose:
          "Menjelaskan perlindungan data klien, cookies, penggunaan data, dan keamanan informasi.",
      },
      {
        title: "Syarat & Ketentuan",
        href: "/syarat-ketentuan",
        purpose:
          "Mengatur ruang lingkup pekerjaan, pembayaran, revisi, hak cipta, dan batas layanan.",
      },
      {
        title: "Penyangkalan",
        href: "/disclaimer",
        purpose:
          "Menjelaskan batas tanggung jawab atas hasil bisnis, konten klien, dan layanan pihak ketiga.",
      },
    ],
  },
];

export const services = [
  {
    title: "Website Company Profile",
    href: "/layanan/company-profile",
    summary:
      "Profil bisnis rapi, kredibel, dan siap dikenalkan ke calon pelanggan lokal maupun luar kota.",
    bullets: ["Struktur profil usaha", "Halaman layanan", "Kontak dan WhatsApp"],
  },
  {
    title: "Landing Page Promosi",
    href: "/layanan/landing-page",
    summary:
      "Halaman fokus konversi untuk iklan, promo musiman, pendaftaran, atau penawaran khusus.",
    bullets: ["Copywriting penawaran", "CTA jelas", "Form atau WhatsApp"],
  },
  {
    title: "Web Toko Online",
    href: "/layanan/toko-online",
    summary:
      "Katalog produk online dengan alur order praktis via WhatsApp atau payment gateway.",
    bullets: ["Katalog produk", "Order WhatsApp", "Opsi payment gateway"],
  },
];

export const pricing = [
  {
    name: "Basic",
    price: "Mulai Rp1,5 juta",
    fit: "Cocok untuk UMKM yang baru ingin tampil profesional online.",
    features: [
      "1-3 halaman utama",
      "Desain responsif mobile",
      "Copywriting dasar",
      "Tombol WhatsApp",
      "Optimasi SEO dasar",
      "Integrasi Google Maps",
    ],
  },
  {
    name: "Pro",
    price: "Mulai Rp3,5 juta",
    fit: "Cocok untuk bisnis yang butuh website lengkap dan siap promosi.",
    features: [
      "5-8 halaman",
      "Copywriting per halaman",
      "Struktur layanan lengkap",
      "Form kontak",
      "Local SEO on-page",
      "Blog starter 3 artikel",
      "Setup analytics",
    ],
  },
  {
    name: "Bisnis",
    price: "Mulai Rp6,5 juta",
    fit: "Cocok untuk toko online, katalog produk, atau bisnis dengan kebutuhan khusus.",
    features: [
      "10+ halaman atau katalog",
      "Manajemen produk awal",
      "Order WhatsApp atau payment gateway",
      "SEO teknis lanjutan",
      "Schema markup",
      "Training pengelolaan konten",
      "Support prioritas",
    ],
  },
];

export const seoMatrix = [
  {
    page: "Home",
    title: "Bikin Website Jogja | Murah, Cepat, Profesional",
    description:
      "Jasa bikin website Jogja untuk UMKM, company profile, landing page, dan toko online. Cepat, ramah, profesional.",
    keyword: "bikin website jogja",
  },
  {
    page: "About",
    title: "Tentang Bikin Website Jogja | PT Zenit",
    description:
      "Kenali Bikin Website Jogja dari PT Zenit Technology Solution, partner digital ramah untuk UMKM Yogyakarta.",
    keyword: "jasa website pt jogja",
  },
  {
    page: "Services",
    title: "Jasa Website Jogja untuk UMKM dan Bisnis Lokal",
    description:
      "Layanan website company profile, landing page promosi, dan toko online untuk bisnis lokal di Yogyakarta.",
    keyword: "jasa website jogja",
  },
  {
    page: "Pricing",
    title: "Harga Paket Website Jogja | Basic, Pro, Bisnis",
    description:
      "Bandingkan paket website Basic, Pro, dan Bisnis untuk UMKM Jogja. Pilih sesuai kebutuhan dan anggaran.",
    keyword: "harga website jogja",
  },
  {
    page: "Contact",
    title: "Kontak Bikin Website Jogja | Konsultasi Gratis",
    description:
      "Hubungi Bikin Website Jogja untuk konsultasi gratis via WhatsApp. Melayani Sleman, Bantul, Kota Jogja, dan sekitarnya.",
    keyword: "kontak jasa website jogja",
  },
];

export const blogIdeas = [
  "Biaya Bikin Website untuk UMKM di Jogja: Apa Saja yang Perlu Dihitung?",
  "Cara Membuat Bisnis Lokal di Yogyakarta Lebih Mudah Ditemukan di Google",
  "Website Company Profile atau Instagram Saja: Mana yang Lebih Penting untuk UMKM Jogja?",
  "Checklist Landing Page Promosi untuk Event, Kuliner, dan Jasa di Jogja",
  "Panduan Toko Online Sederhana untuk UMKM Bantul, Sleman, dan Kota Jogja",
];

export const faqs = [
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Umumnya 7-21 hari kerja, tergantung jumlah halaman, kesiapan materi, dan kebutuhan fitur.",
  },
  {
    question: "Apakah bisa konsultasi dulu sebelum memilih paket?",
    answer:
      "Bisa. Kami mulai dari ngobrol kebutuhan, target pelanggan, dan anggaran supaya paketnya pas.",
  },
  {
    question: "Apakah website sudah termasuk domain dan hosting?",
    answer:
      "Bisa termasuk atau dipisah, tergantung paket dan preferensi klien. Detailnya dijelaskan sebelum pembayaran.",
  },
  {
    question: "Apakah bisa dibantu optimasi Google?",
    answer:
      "Bisa. Paket Pro dan Bisnis mencakup struktur Local SEO dasar, metadata, dan rekomendasi Google Business Profile.",
  },
];
