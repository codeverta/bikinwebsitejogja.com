import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "./components";
import { site } from "./site-data";
import projectData from "../projects.json";
import { HomeHeroCarousel } from "./hero-carousel";

const trustedBrands = [
  { name: "Universitas Negeri Yogyakarta", image: "/assets/images/uny.png" },
  { name: "Kementerian Komunikasi dan Digital", image: "/assets/images/komdigi.png" },
  { name: "Bapperida", image: "/assets/images/bapperida.png" },
  { name: "Tribunnews", image: "/assets/images/tribunnews.svg" },
  { name: "NSC", image: "/assets/images/nsc.png" },
  { name: "Million Candles", image: "/assets/images/souvenirlilin.png" },
];

const featuredIds = [
  "laundry-management-system",
  "coffee-shop-pos-management-system",
  "gym-management-system",
];
const showcase = featuredIds.map((id, index) => ({
  ...projectData.projects.find(({ product }) => product.id === id)!.product,
  color: ["project-card-lilac", "project-card-peach", "project-card-mint"][index],
}));

const process = [
  {
    step: "01",
    title: "Ceritakan bisnis Anda",
    body: "Kita ngobrol santai soal usaha, pelanggan, target, dan masalah yang ingin diselesaikan.",
  },
  {
    step: "02",
    title: "Kami susun strateginya",
    body: "Mulai dari struktur halaman, desain, copywriting, sampai alur pengunjung menuju WhatsApp.",
  },
  {
    step: "03",
    title: "Website siap bekerja",
    body: "Setelah revisi dan pengecekan, website tayang dan siap ditemukan pelanggan di Jogja.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          legalName: site.company,
          url: site.url,
          telephone: site.phone,
          email: site.email,
          areaServed: [
            "Kota Yogyakarta",
            "Sleman",
            "Bantul",
            "Gunungkidul",
            "Kulon Progo",
          ],
          serviceType: "Jasa pembuatan website untuk bisnis lokal Jogja",
        }}
      />

      <section className="hero-shell">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-grid" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl flex-col items-center px-6 pb-24 pt-24 text-center md:min-h-[830px] md:pt-32">
          <Link href="/harga-paket" className="announcement-pill">
            <span>BARU</span>
            Paket website bisnis lokal mulai Rp1,5 juta
            <b>→</b>
          </Link>

          <div className="mt-10 w-full"><HomeHeroCarousel /></div>
        </div>
      </section>

      <section className="logo-strip">
        <p>DIBUAT UNTUK BISNIS LOKAL YANG TERUS TUMBUH</p>
        <div className="brand-proof-grid" aria-label="Brand dan institusi dalam portofolio kami">
          {trustedBrands.map((brand) => <div key={brand.name} className="brand-proof-item"><Image src={brand.image} alt={brand.name} width={180} height={70} sizes="150px" /></div>)}
        </div>
      </section>

      <section className="section-light overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker">Website bukan sekadar pajangan</p>
            <h2 className="section-title mt-4 text-balance">Satu tempat untuk bikin pelanggan yakin.</h2>
            <p className="section-copy mx-auto mt-6 max-w-2xl">
              Dari pertama ditemukan di Google sampai akhirnya chat dan order,
              setiap bagian website dirancang untuk membantu bisnis lokal Anda.
            </p>
          </div>
          <div className="feature-grid mt-16">
            <article className="feature-card feature-main">
              <span className="feature-icon">↗</span>
              <div><p className="section-kicker">Tampil profesional</p><h3>Berikan kesan pertama yang meyakinkan.</h3><p>Desain modern, cepat dibuka di HP, dan sesuai karakter bisnis Anda.</p></div>
              <div className="mini-browser">
                <div className="mini-browser-bar"><i /><i /><i /></div>
                <Image src="/assets/property-listing/preview.png" alt="Contoh website properti profesional" width={1658} height={949} sizes="(max-width: 768px) 90vw, 56vw" />
              </div>
            </article>
            <article className="feature-card feature-small feature-purple">
              <span className="feature-icon">⌖</span>
              <div><p className="section-kicker">SEO lokal</p><h3>Mudah ditemukan orang sekitar Jogja.</h3><p>Struktur website disiapkan untuk pencarian bisnis lokal.</p></div>
              <div className="search-card"><small>Google</small><p>jasa terdekat di jogja</p><span>Bisnis Anda</span></div>
            </article>
            <article className="feature-card feature-small feature-mint">
              <span className="feature-icon">◉</span>
              <div><p className="section-kicker">Siap konversi</p><h3>Pengunjung tahu harus klik ke mana.</h3><p>CTA jelas untuk chat, order, reservasi, atau minta penawaran.</p></div>
              <div className="chat-card"><span>Halo! Bisa konsultasi dulu?</span><b>Balas via WhatsApp →</b></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-projects">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl"><p className="section-kicker">Dipakai di dunia nyata</p><h2 className="section-title mt-4 text-balance">Solusi digital untuk berbagai bisnis lokal.</h2></div>
            <Link href="/projects" className="text-link">Lihat semua project <span>→</span></Link>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {showcase.map((project) => (
              <Link href={`/projects/${project.id}`} key={project.id} className={`project-card ${project.color}`}>
                <div><p>{project.category}</p><h3>{project.name}</h3></div>
                <div className="project-image"><Image src={project.image} alt={`${project.name} untuk bisnis Jogja`} fill sizes="(max-width: 1024px) 92vw, 30vw" /></div>
                <span className="project-arrow">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center"><p className="section-kicker text-violet-300">Prosesnya gampang</p><h2 className="section-title mt-4 text-balance text-white">Dari ngobrol sampai online, kami dampingi.</h2><p className="section-copy mx-auto mt-6 max-w-2xl text-slate-300">Tidak perlu pusing istilah teknis. Anda fokus ke bisnis, kami urus websitenya.</p></div>
          <div className="process-grid mt-16">
            {process.map((item) => <article key={item.step}><span>{item.step}</span><div className="process-icon">{item.step === "01" ? "✦" : item.step === "02" ? "⌁" : "✓"}</div><h3>{item.title}</h3><p>{item.body}</p></article>)}
          </div>
          <div className="mt-14 text-center"><Link href={site.whatsapp} className="button-primary h-14 px-8 text-base">Mulai Konsultasi <span>→</span></Link></div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <div className="quote-card">
            <div className="quote-stars">★★★★★</div>
            <blockquote>“Prosesnya cepat, komunikasinya enak, dan hasil website-nya jauh lebih profesional dari yang kami bayangkan.”</blockquote>
            <div className="quote-author"><span>RN</span><div><strong>Pemilik bisnis lokal</strong><small>Sleman, Yogyakarta</small></div></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-orb cta-orb-one" /><div className="cta-orb cta-orb-two" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <p className="section-kicker text-violet-200">Punya usaha di Jogja?</p>
          <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.04em] text-white md:text-6xl">Yuk, bikin bisnis Anda lebih mudah ditemukan.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100">Ceritakan kebutuhan Anda. Konsultasi awal gratis, tanpa jargon teknis dan tanpa komitmen.</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><Link href={site.whatsapp} className="button-white h-14 px-8 text-base">Chat via WhatsApp <span>→</span></Link><Link href="/harga-paket" className="button-ghost h-14 px-8 text-base">Lihat Paket Harga</Link></div>
        </div>
      </section>
    </>
  );
}
