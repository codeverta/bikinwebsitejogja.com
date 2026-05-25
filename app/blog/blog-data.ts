export type BlogSection = {
  heading: string;
  body: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  tags: string[];
  intro: string;
  sections: BlogSection[];
  faq: Array<{ question: string; answer: string }>;
  cta: string;
};

export const POSTS_PER_PAGE = 6;

export const blogPosts: BlogPost[] = [
  {
    slug: "biaya-bikin-website-umkm-jogja",
    title: "Biaya Bikin Website untuk UMKM di Jogja: Apa Saja yang Perlu Dihitung?",
    excerpt:
      "Panduan praktis memahami komponen biaya website untuk UMKM Jogja, dari domain, hosting, desain, copywriting, sampai maintenance.",
    category: "Harga Website",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
    readingTime: "7 menit",
    keyword: "biaya bikin website umkm jogja",
    metaTitle: "Biaya Bikin Website UMKM Jogja: Panduan Lengkap",
    metaDescription:
      "Cari biaya bikin website UMKM Jogja? Pelajari komponen harga, paket, fitur, domain, hosting, dan tips memilih vendor.",
    tags: ["UMKM Jogja", "Harga Website", "Website Bisnis"],
    intro:
      "Banyak pemilik usaha di Jogja ingin punya website, tetapi bingung memulai karena harga di pasar terlihat sangat beragam. Ada yang murah sekali, ada yang terlihat mahal, dan ada juga yang tidak menjelaskan apa saja yang termasuk. Artikel ini membantu Anda membaca biaya website dengan lebih tenang.",
    sections: [
      {
        heading: "Komponen biaya utama",
        body: [
          "Biaya website biasanya bukan hanya biaya desain. Di dalamnya ada perencanaan struktur halaman, penulisan copy, implementasi teknis, domain, hosting, optimasi dasar, dan waktu komunikasi proyek.",
          "Untuk UMKM, yang paling penting adalah memastikan website tidak hanya terlihat bagus, tetapi juga menjawab pertanyaan calon pelanggan: usaha Anda apa, melayani area mana, apa kelebihannya, dan bagaimana cara menghubungi.",
        ],
        list: [
          "Domain untuk alamat website.",
          "Hosting untuk menyimpan file website.",
          "Desain responsif agar nyaman dibuka dari HP.",
          "Copywriting untuk menjelaskan layanan dan penawaran.",
          "SEO dasar agar halaman mudah dipahami Google.",
        ],
      },
      {
        heading: "Kenapa harga tiap vendor berbeda?",
        body: [
          "Perbedaan harga biasanya datang dari kedalaman pekerjaan. Website satu halaman dengan template tentu berbeda dari website lima halaman yang ditulis khusus, dioptimasi lokal, dan disiapkan untuk campaign.",
          "Harga juga dipengaruhi jumlah revisi, jumlah halaman, integrasi formulir, katalog produk, payment gateway, serta kebutuhan maintenance setelah website tayang.",
        ],
      },
      {
        heading: "Cara memilih paket yang masuk akal",
        body: [
          "Mulailah dari tujuan. Jika Anda hanya butuh profil usaha untuk dikirim ke calon pelanggan, paket Basic biasanya cukup. Jika ingin menangkap traffic Google lokal dan menjelaskan banyak layanan, paket Pro lebih ideal. Jika butuh katalog atau order online, pilih paket Bisnis.",
          "Jangan hanya membandingkan harga akhir. Bandingkan juga siapa yang menulis konten, apakah metadata disiapkan, apakah tombol WhatsApp jelas, dan apakah vendor membantu struktur halaman.",
        ],
      },
    ],
    faq: [
      {
        question: "Apakah website murah selalu buruk?",
        answer:
          "Tidak selalu. Yang penting ruang lingkupnya jelas. Website murah bisa cocok untuk kebutuhan sederhana, tetapi jangan berharap fitur kompleks tanpa biaya tambahan.",
      },
      {
        question: "Apakah UMKM perlu SEO sejak awal?",
        answer:
          "Perlu minimal SEO dasar, terutama struktur heading, title, description, kecepatan, dan halaman kontak lokal.",
      },
    ],
    cta: "Ingin tahu paket yang paling cocok untuk usaha Anda? Kirim kebutuhan website via WhatsApp, nanti kami bantu hitungkan ruang lingkupnya.",
  },
  {
    slug: "bisnis-lokal-yogyakarta-mudah-ditemukan-google",
    title: "Cara Membuat Bisnis Lokal di Yogyakarta Lebih Mudah Ditemukan di Google",
    excerpt:
      "Langkah Local SEO untuk bisnis Jogja: website, Google Business Profile, NAP, ulasan, halaman layanan, dan konten lokal.",
    category: "Local SEO",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
    readingTime: "8 menit",
    keyword: "cara bisnis lokal jogja ditemukan google",
    metaTitle: "Cara Bisnis Lokal Jogja Mudah Ditemukan Google",
    metaDescription:
      "Panduan Local SEO untuk bisnis Yogyakarta agar lebih mudah ditemukan di Google lewat website, GBP, NAP, dan ulasan.",
    tags: ["Local SEO", "Google Business Profile", "Bisnis Jogja"],
    intro:
      "Saat orang mencari jasa, tempat makan, klinik, sekolah, atau toko di Jogja, Google sering menjadi pintu pertama. Bisnis yang informasinya lengkap dan konsisten punya peluang lebih besar untuk dipilih.",
    sections: [
      {
        heading: "Mulai dari Google Business Profile",
        body: [
          "Google Business Profile membantu bisnis muncul di Maps dan hasil pencarian lokal. Pastikan nama bisnis, kategori, alamat, nomor telepon, jam operasional, dan foto terbaru sudah lengkap.",
          "Gunakan kategori yang paling dekat dengan layanan utama. Setelah itu, tambahkan layanan pendukung agar Google memahami konteks bisnis Anda.",
        ],
        list: [
          "Isi nama bisnis sesuai brand resmi.",
          "Pastikan nomor WhatsApp aktif.",
          "Tambahkan foto lokasi, produk, dan tim.",
          "Rutin unggah update atau promo.",
        ],
      },
      {
        heading: "Website sebagai pusat informasi",
        body: [
          "Media sosial bagus untuk interaksi, tetapi website membantu menyusun informasi secara rapi. Halaman layanan bisa ditulis khusus untuk kata kunci lokal seperti jasa website Jogja, klinik gigi Sleman, atau catering Bantul.",
          "Website juga memberi tempat untuk artikel edukasi, studi kasus, FAQ, dan halaman legal yang meningkatkan kepercayaan.",
        ],
      },
      {
        heading: "Konsistensi NAP",
        body: [
          "NAP adalah Name, Address, Phone. Data ini harus sama di website, Google Business Profile, direktori bisnis, marketplace, dan media sosial.",
          "Ketidakkonsistenan nomor telepon atau alamat bisa membuat calon pelanggan ragu dan membuat mesin pencari sulit memvalidasi bisnis Anda.",
        ],
      },
    ],
    faq: [
      {
        question: "Apakah wajib punya alamat kantor untuk Local SEO?",
        answer:
          "Tidak selalu. Bisnis area layanan tetap bisa dioptimasi, tetapi informasi wilayah layanan harus jelas dan konsisten.",
      },
      {
        question: "Berapa lama Local SEO terlihat hasilnya?",
        answer:
          "Biasanya bertahap dalam beberapa minggu sampai bulan, tergantung persaingan, kualitas website, ulasan, dan aktivitas optimasi.",
      },
    ],
    cta: "Butuh website yang siap mendukung Local SEO Jogja? Kami bisa bantu susun halaman layanan dan struktur kontennya.",
  },
  {
    slug: "website-company-profile-atau-instagram-untuk-umkm-jogja",
    title: "Website Company Profile atau Instagram Saja: Mana yang Lebih Penting untuk UMKM Jogja?",
    excerpt:
      "Perbandingan fungsi website dan Instagram untuk UMKM Jogja agar promosi lebih rapi, kredibel, dan mudah dikonversi.",
    category: "Strategi Digital",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
    readingTime: "7 menit",
    keyword: "website company profile umkm jogja",
    metaTitle: "Website Company Profile atau Instagram untuk UMKM Jogja",
    metaDescription:
      "UMKM Jogja perlu website atau Instagram saja? Simak perbandingan fungsi, kredibilitas, SEO, dan strategi promosi.",
    tags: ["Company Profile", "Instagram Bisnis", "UMKM Jogja"],
    intro:
      "Banyak UMKM Jogja sudah aktif di Instagram, tetapi masih bertanya apakah website tetap perlu. Jawabannya tergantung tujuan, tetapi untuk kepercayaan jangka panjang, website dan Instagram punya peran yang saling melengkapi.",
    sections: [
      {
        heading: "Instagram kuat untuk perhatian",
        body: [
          "Instagram bagus untuk membangun kedekatan, menampilkan aktivitas harian, promo, dan testimoni singkat. Formatnya cepat, visual, dan mudah dibagikan.",
          "Namun informasi penting sering tenggelam di feed. Calon pelanggan harus scroll, membuka highlight, atau bertanya ulang untuk menemukan detail layanan.",
        ],
      },
      {
        heading: "Website kuat untuk kepercayaan",
        body: [
          "Website company profile memberi ruang yang lebih rapi untuk menjelaskan siapa Anda, layanan apa yang ditawarkan, area layanan, portofolio, FAQ, dan kontak resmi.",
          "Website juga bisa muncul di Google untuk pencarian yang lebih spesifik. Ini membantu calon pelanggan yang belum mengikuti Instagram Anda.",
        ],
        list: [
          "Halaman profil bisnis.",
          "Halaman layanan lengkap.",
          "Portofolio dan testimoni.",
          "Kontak, Maps, dan tombol WhatsApp.",
        ],
      },
      {
        heading: "Strategi terbaik: pakai keduanya",
        body: [
          "Instagram bisa menjadi kanal awareness, sementara website menjadi pusat informasi dan konversi. Link di bio dapat diarahkan ke website atau landing page promosi.",
          "Dengan kombinasi ini, calon pelanggan yang datang dari iklan, Google, atau rekomendasi punya tempat yang jelas untuk memahami bisnis Anda.",
        ],
      },
    ],
    faq: [
      {
        question: "Apakah website harus sering update seperti Instagram?",
        answer:
          "Tidak harus sesering Instagram. Website cukup diperbarui saat ada layanan, harga, portofolio, atau informasi penting baru.",
      },
      {
        question: "Apakah website bisa menampilkan link Instagram?",
        answer:
          "Bisa. Website justru bisa mengarahkan pengunjung ke Instagram, WhatsApp, katalog, atau halaman promosi tertentu.",
      },
    ],
    cta: "Jika Instagram bisnis Anda sudah aktif, website company profile bisa menjadi rumah digital yang membuat brand terlihat lebih serius.",
  },
  {
    slug: "checklist-landing-page-promosi-jogja",
    title: "Checklist Landing Page Promosi untuk Event, Kuliner, dan Jasa di Jogja",
    excerpt:
      "Checklist section landing page promosi yang membantu campaign Jogja lebih jelas, fokus, dan mudah diarahkan ke WhatsApp.",
    category: "Landing Page",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
    readingTime: "6 menit",
    keyword: "landing page promosi jogja",
    metaTitle: "Checklist Landing Page Promosi Jogja yang Efektif",
    metaDescription:
      "Buat landing page promosi Jogja yang lebih konversi dengan checklist headline, manfaat, bukti, FAQ, dan CTA WhatsApp.",
    tags: ["Landing Page", "Promosi Jogja", "Iklan Online"],
    intro:
      "Landing page yang baik tidak harus panjang, tetapi harus fokus. Untuk promosi event, kuliner, kelas, jasa, atau campaign musiman di Jogja, halaman ini perlu menjawab pertanyaan pengunjung dengan cepat.",
    sections: [
      {
        heading: "Headline harus langsung jelas",
        body: [
          "Pengunjung harus tahu penawaran Anda dalam beberapa detik. Hindari headline terlalu abstrak. Sebutkan produk, manfaat utama, dan wilayah jika relevan.",
          "Contoh: Paket Catering Harian di Sleman untuk Kantor dan Acara Keluarga lebih jelas dibanding Solusi Makan Terbaik untuk Anda.",
        ],
      },
      {
        heading: "Susun manfaat sebelum fitur",
        body: [
          "Orang membeli karena manfaat. Fitur tetap penting, tetapi posisikan setelah pengunjung memahami hasil yang mereka dapat.",
          "Untuk jasa, jelaskan hasil kerja. Untuk kuliner, jelaskan rasa, porsi, kebersihan, dan kemudahan pemesanan. Untuk event, jelaskan materi, pembicara, jadwal, dan benefit peserta.",
        ],
        list: [
          "Masalah yang diselesaikan.",
          "Manfaat utama.",
          "Detail penawaran.",
          "Bukti kepercayaan.",
          "CTA yang konsisten.",
        ],
      },
      {
        heading: "CTA jangan cuma sekali",
        body: [
          "Tombol WhatsApp atau form pendaftaran perlu muncul di beberapa titik strategis, terutama setelah manfaat, setelah harga, dan di bagian akhir.",
          "Gunakan teks CTA yang spesifik seperti Tanya Stok via WhatsApp, Daftar Kelas Sekarang, atau Minta Penawaran.",
        ],
      },
    ],
    faq: [
      {
        question: "Apakah landing page cocok untuk iklan?",
        answer:
          "Sangat cocok, karena landing page bisa dibuat fokus pada satu penawaran sehingga pesan iklan dan halaman tujuan selaras.",
      },
      {
        question: "Apakah landing page perlu blog?",
        answer:
          "Tidak wajib. Landing page biasanya fokus konversi, sementara blog cocok untuk traffic organik jangka panjang.",
      },
    ],
    cta: "Sedang menyiapkan promo di Jogja? Landing page bisa membantu iklan Anda tidak berhenti di chat yang dingin.",
  },
  {
    slug: "panduan-toko-online-umkm-bantul-sleman-kota-jogja",
    title: "Panduan Toko Online Sederhana untuk UMKM Bantul, Sleman, dan Kota Jogja",
    excerpt:
      "Panduan membuat toko online sederhana dengan katalog produk, order WhatsApp, dan opsi pembayaran untuk UMKM Yogyakarta.",
    category: "Toko Online",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
    readingTime: "8 menit",
    keyword: "toko online umkm jogja",
    metaTitle: "Panduan Toko Online UMKM Bantul, Sleman, Kota Jogja",
    metaDescription:
      "UMKM Jogja ingin punya toko online? Pelajari katalog produk, order WhatsApp, payment gateway, dan struktur halaman.",
    tags: ["Toko Online", "Katalog WhatsApp", "UMKM Yogyakarta"],
    intro:
      "Tidak semua UMKM membutuhkan marketplace besar atau sistem e-commerce kompleks. Banyak bisnis lokal cukup membutuhkan katalog online yang rapi, mudah dibuka di HP, dan langsung mengarah ke WhatsApp.",
    sections: [
      {
        heading: "Mulai dari katalog yang mudah dipahami",
        body: [
          "Foto produk, nama, harga, variasi, dan keterangan harus mudah dipindai. Jika produk banyak, gunakan kategori agar pengunjung tidak bingung.",
          "Untuk produk lokal seperti makanan, fashion, kerajinan, atau hampers, halaman produk perlu menjawab pertanyaan umum: ukuran, bahan, masa simpan, minimum order, dan area pengiriman.",
        ],
      },
      {
        heading: "Order WhatsApp cocok untuk awal",
        body: [
          "Order via WhatsApp membuat proses lebih personal dan ringan. Pelanggan klik tombol, pesan otomatis berisi nama produk muncul, lalu admin bisa melanjutkan percakapan.",
          "Model ini cocok untuk UMKM yang stoknya dinamis atau masih perlu menjelaskan variasi produk sebelum pelanggan membayar.",
        ],
        list: [
          "Lebih cepat dipahami pelanggan lokal.",
          "Admin tetap bisa upsell lewat chat.",
          "Tidak perlu sistem checkout rumit sejak awal.",
        ],
      },
      {
        heading: "Kapan perlu payment gateway?",
        body: [
          "Payment gateway cocok jika volume transaksi sudah stabil, produk standar, dan Anda ingin pelanggan checkout mandiri.",
          "Namun integrasi ini perlu perencanaan biaya, alur refund, notifikasi, dan keamanan data. Untuk tahap awal, katalog WhatsApp sering lebih efisien.",
        ],
      },
    ],
    faq: [
      {
        question: "Apakah toko online sederhana bisa dikembangkan nanti?",
        answer:
          "Bisa. Mulai dari katalog WhatsApp, lalu berkembang ke checkout dan payment gateway saat kebutuhan sudah jelas.",
      },
      {
        question: "Apakah cocok untuk produk makanan?",
        answer:
          "Cocok, terutama jika informasi preorder, area kirim, varian, dan kontak admin dibuat jelas.",
      },
    ],
    cta: "Punya produk lokal dan ingin katalog yang lebih rapi dari sekadar chat manual? Kami bisa bantu susun toko online bertahap.",
  },
  {
    slug: "local-seo-untuk-jasa-profesional-di-sleman",
    title: "Local SEO untuk Jasa Profesional di Sleman: Klinik, Konsultan, dan Vendor Jasa",
    excerpt:
      "Strategi Local SEO khusus jasa profesional di Sleman agar halaman layanan, ulasan, dan kontak lebih siap menangkap pencarian lokal.",
    category: "Local SEO",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
    readingTime: "7 menit",
    keyword: "local seo jasa profesional sleman",
    metaTitle: "Local SEO Jasa Profesional Sleman: Panduan Praktis",
    metaDescription:
      "Optimasi Local SEO untuk jasa profesional di Sleman lewat halaman layanan, GBP, ulasan, FAQ, dan struktur website.",
    tags: ["Local SEO Sleman", "Jasa Profesional", "Website Jasa"],
    intro:
      "Sleman punya banyak bisnis jasa profesional: klinik, konsultan, vendor event, lembaga kursus, kontraktor, dan studio kreatif. Untuk layanan seperti ini, kepercayaan sangat menentukan keputusan calon pelanggan.",
    sections: [
      {
        heading: "Buat halaman layanan spesifik",
        body: [
          "Satu halaman umum sering terlalu lebar. Jika bisnis punya beberapa layanan utama, buat halaman terpisah agar setiap layanan bisa menjawab intent pencarian yang berbeda.",
          "Misalnya konsultan bisnis bisa punya halaman pendampingan legalitas, pembuatan SOP, dan konsultasi digital marketing. Setiap halaman menargetkan masalah yang lebih spesifik.",
        ],
      },
      {
        heading: "Tampilkan bukti percaya",
        body: [
          "Untuk jasa profesional, pengunjung ingin melihat legalitas, pengalaman, portofolio, testimoni, foto tim, dan cara kerja. Bukti ini mengurangi keraguan sebelum mereka menghubungi.",
          "Jika ada izin, sertifikasi, atau asosiasi profesi, tampilkan dengan bahasa yang mudah dipahami.",
        ],
        list: [
          "Profil tim atau penanggung jawab.",
          "Testimoni klien.",
          "Studi kasus ringkas.",
          "FAQ tentang proses kerja.",
        ],
      },
      {
        heading: "Hubungkan website dan Google Business Profile",
        body: [
          "Pastikan tombol website di Google Business Profile mengarah ke halaman yang relevan. Jika bisnis melayani Sleman dan sekitarnya, jelaskan area layanan secara natural di website.",
          "Minta ulasan dari klien dengan etis setelah pekerjaan selesai. Ulasan membantu calon pelanggan memahami pengalaman orang lain.",
        ],
      },
    ],
    faq: [
      {
        question: "Apakah perlu membuat halaman lokasi khusus Sleman?",
        answer:
          "Bisa jika memang punya layanan kuat di Sleman. Pastikan kontennya unik, bukan sekadar mengganti nama lokasi.",
      },
      {
        question: "Apakah artikel blog membantu jasa profesional?",
        answer:
          "Membantu, karena artikel bisa menjawab pertanyaan awal sebelum calon klien siap konsultasi.",
      },
    ],
    cta: "Untuk bisnis jasa di Sleman, website yang rapi bisa menjadi tenaga penjelas sebelum calon klien masuk WhatsApp.",
  },
  {
    slug: "struktur-halaman-website-company-profile-yang-seo-friendly",
    title: "Struktur Halaman Website Company Profile yang SEO-Friendly untuk Bisnis Jogja",
    excerpt:
      "Susunan halaman company profile yang ideal untuk SEO dan konversi: hero, layanan, bukti, proses, FAQ, dan kontak.",
    category: "Company Profile",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
    readingTime: "6 menit",
    keyword: "struktur website company profile seo friendly",
    metaTitle: "Struktur Website Company Profile SEO-Friendly",
    metaDescription:
      "Pelajari struktur halaman website company profile yang SEO-friendly untuk bisnis Jogja: hero, layanan, testimoni, FAQ, kontak.",
    tags: ["Company Profile", "SEO Website", "Struktur Halaman"],
    intro:
      "Website company profile yang baik bukan hanya berisi sejarah perusahaan. Ia harus membantu calon pelanggan memahami layanan, mempercayai bisnis, dan mengambil tindakan.",
    sections: [
      {
        heading: "Hero section harus menjawab tiga hal",
        body: [
          "Di bagian paling atas, jelaskan siapa Anda, apa yang ditawarkan, dan untuk siapa layanan tersebut. Tambahkan CTA yang jelas seperti Konsultasi via WhatsApp atau Lihat Paket.",
          "Untuk bisnis lokal, sebutkan area layanan secara natural agar relevansi lokal lebih kuat.",
        ],
      },
      {
        heading: "Halaman layanan jangan terlalu tipis",
        body: [
          "Setiap layanan utama sebaiknya punya penjelasan manfaat, proses, deliverable, siapa yang cocok, dan FAQ. Ini membantu SEO sekaligus mengurangi pertanyaan berulang.",
          "Jika semua layanan hanya ditulis dalam satu paragraf pendek, Google dan calon pelanggan sama-sama kekurangan konteks.",
        ],
        list: [
          "Masalah calon pelanggan.",
          "Solusi yang ditawarkan.",
          "Manfaat bisnis.",
          "Proses kerja.",
          "CTA sesuai tahap keputusan.",
        ],
      },
      {
        heading: "FAQ membantu SEO dan konversi",
        body: [
          "FAQ menjawab keberatan umum seperti harga, durasi, revisi, garansi, dan cara kerja. Bagian ini sering membantu pengunjung yang sudah hampir menghubungi tetapi masih ragu.",
          "Pertanyaan sebaiknya ditulis dengan bahasa calon pelanggan, bukan bahasa internal perusahaan.",
        ],
      },
    ],
    faq: [
      {
        question: "Berapa halaman ideal untuk company profile?",
        answer:
          "Untuk awal, 5-8 halaman sudah cukup: beranda, tentang, layanan, portofolio, testimoni, blog, FAQ, dan kontak.",
      },
      {
        question: "Apakah semua bisnis perlu blog?",
        answer:
          "Blog sangat membantu jika ingin traffic organik, tetapi prioritas pertama tetap halaman layanan yang jelas.",
      },
    ],
    cta: "Kami bisa bantu menyusun struktur company profile agar tidak hanya rapi, tetapi juga siap menangkap pencarian lokal.",
  },
  {
    slug: "optimasi-google-business-profile-umkm-jogja",
    title: "Optimasi Google Business Profile untuk UMKM Jogja: Kategori, Ulasan, dan NAP",
    excerpt:
      "Langkah optimasi Google Business Profile untuk UMKM Jogja agar profil Maps lebih lengkap, dipercaya, dan sinkron dengan website.",
    category: "Google Business Profile",
    publishedAt: "2026-05-25",
    updatedAt: "2026-05-25",
    readingTime: "7 menit",
    keyword: "optimasi google business profile umkm jogja",
    metaTitle: "Optimasi Google Business Profile UMKM Jogja",
    metaDescription:
      "Panduan optimasi Google Business Profile UMKM Jogja: kategori, foto, layanan, ulasan, NAP, dan sinkronisasi website.",
    tags: ["Google Business Profile", "GBP Jogja", "Local SEO"],
    intro:
      "Google Business Profile sering menjadi halaman pertama yang dilihat calon pelanggan lokal. Jika profil kosong, foto minim, atau nomor tidak aktif, peluang chat bisa hilang sebelum orang membuka website.",
    sections: [
      {
        heading: "Pilih kategori yang paling tepat",
        body: [
          "Kategori utama harus mewakili layanan inti. Jangan memilih kategori hanya karena terlihat populer. Jika kategori terlalu jauh, profil bisa tampil untuk pencarian yang tidak relevan.",
          "Tambahkan layanan turunan di bagian service agar Google dan pelanggan memahami detail penawaran Anda.",
        ],
      },
      {
        heading: "Bangun strategi ulasan",
        body: [
          "Ulasan yang baik bukan hanya rating tinggi, tetapi juga cerita pengalaman pelanggan. Minta pelanggan menyebut layanan yang digunakan dan pengalaman mereka secara natural.",
          "Balas ulasan dengan sopan. Respons pemilik bisnis menunjukkan bahwa profil aktif dan pelanggan diperhatikan.",
        ],
        list: [
          "Minta ulasan setelah transaksi selesai.",
          "Jangan membeli ulasan palsu.",
          "Balas ulasan positif dan negatif.",
          "Gunakan feedback untuk memperbaiki layanan.",
        ],
      },
      {
        heading: "Sinkronkan NAP dengan website",
        body: [
          "Nama, alamat, dan nomor telepon harus sama di Google Business Profile dan website. Jika nomor WhatsApp berubah, perbarui semua tempat yang menampilkannya.",
          "Tambahkan link website ke profil Google. Sebaliknya, tampilkan Maps dan data kontak di halaman Hubungi Kami.",
        ],
      },
    ],
    faq: [
      {
        question: "Apakah Google Business Profile gratis?",
        answer:
          "Ya, Google Business Profile dapat digunakan gratis. Biaya biasanya muncul jika Anda memakai jasa optimasi atau iklan.",
      },
      {
        question: "Apakah perlu posting rutin di GBP?",
        answer:
          "Disarankan. Update promo, layanan baru, atau foto terbaru membantu profil terlihat aktif.",
      },
    ],
    cta: "Website dan Google Business Profile yang sinkron membuat calon pelanggan lebih yakin sebelum menghubungi Anda.",
  },
];

export function getAllPosts() {
  return [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getTotalBlogPages() {
  return Math.ceil(getAllPosts().length / POSTS_PER_PAGE);
}

export function getPaginatedPosts(page: number) {
  const start = (page - 1) * POSTS_PER_PAGE;
  return getAllPosts().slice(start, start + POSTS_PER_PAGE);
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      post: candidate,
      score:
        (candidate.category === post.category ? 3 : 0) +
        candidate.tags.filter((tag) => post.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}
