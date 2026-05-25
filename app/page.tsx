import Link from "next/link";
import { Button, Card, JsonLd, PageHero, Section } from "./components";
import {
  blogIdeas,
  pricing,
  seoMatrix,
  services,
  site,
  sitemapPlan,
} from "./site-data";

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
          serviceType: [
            "Jasa pembuatan website",
            "Website company profile",
            "Landing page promosi",
            "Website toko online",
          ],
        }}
      />
      <PageHero
        eyebrow="Jasa website lokal Yogyakarta"
        title="Bikin Website Jogja yang rapi, cepat online, dan gampang dipakai."
        description="Kami membantu UMKM, bisnis lokal, dan profesional di Jogja punya website company profile, landing page promosi, atau toko online yang jelas pesannya, enak dibuka di HP, dan siap diarahkan ke WhatsApp."
      />

      <Section
        title="Layanan utama"
        description="Pilih jenis website sesuai tujuan bisnis. Kami bantu dari struktur, copywriting, desain, hingga SEO dasar."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.href} title={service.title}>
              <p>{service.summary}</p>
              <ul className="mt-4 grid gap-2">
                {service.bullets.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-5 inline-flex font-semibold text-emerald-800"
              >
                Lihat detail
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Kenapa memilih kami?"
        description="Kami menggabungkan eksekusi teknis, copywriting B2C, dan pemahaman cara pelanggan lokal mengambil keputusan."
      >
        <div className="grid gap-5 md:grid-cols-4">
          {[
            "Bahasa ramah, bebas jargon rumit",
            "Struktur halaman siap konversi",
            "SEO lokal untuk wilayah Yogyakarta",
            "Proses jelas dari awal sampai tayang",
          ].map((item) => (
            <Card key={item} title={item}>
              <p>
                Pendekatannya praktis: kebutuhan bisnis dipetakan, pesan
                dibuat jelas, lalu website dibangun agar mudah dipakai pelanggan.
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Arsitektur website lengkap"
        description="Rancangan sitemap ini disiapkan untuk membangun kepercayaan, menangkap pencarian lokal, dan mengarahkan pengunjung ke konsultasi."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {sitemapPlan.map((group) => (
            <Card key={group.group} title={group.group}>
              <div className="grid gap-4">
                {group.pages.map((page) => (
                  <div key={page.href}>
                    <Link href={page.href} className="font-semibold text-emerald-800">
                      {page.title}
                    </Link>
                    <p>{page.purpose}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Paket populer" description="Mulai dari sederhana sampai siap scale. Harga final mengikuti kebutuhan halaman, fitur, dan materi.">
        <div className="grid gap-5 md:grid-cols-3">
          {pricing.map((plan) => (
            <Card key={plan.name} title={`Paket ${plan.name}`}>
              <p className="text-2xl font-bold text-emerald-900">{plan.price}</p>
              <p className="mt-2">{plan.fit}</p>
              <ul className="mt-4 grid gap-2">
                {plan.features.slice(0, 5).map((feature) => (
                  <li key={feature}>- {feature}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Kerangka Local SEO"
        description="Matrix ini menjadi arahan metadata halaman utama agar kata kunci lokal tetap fokus."
      >
        <div className="overflow-x-auto rounded-lg border border-stone-200 bg-white">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-stone-100 text-stone-900">
              <tr>
                <th className="p-4">Halaman</th>
                <th className="p-4">Meta Title</th>
                <th className="p-4">Meta Description</th>
                <th className="p-4">Keyword</th>
              </tr>
            </thead>
            <tbody>
              {seoMatrix.map((row) => (
                <tr key={row.page} className="border-t border-stone-200">
                  <td className="p-4 font-semibold">{row.page}</td>
                  <td className="p-4">{row.title}</td>
                  <td className="p-4">{row.description}</td>
                  <td className="p-4">{row.keyword}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Topical authority blog"
        description="Konten edukasi ditujukan untuk menarik UMKM yang sedang mencari solusi digital di Jogja."
      >
        <div className="grid gap-3">
          {blogIdeas.map((idea) => (
            <div key={idea} className="rounded-lg border border-stone-200 bg-white p-5">
              <p className="font-semibold text-stone-950">{idea}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-amber-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-stone-950">
              Siap ngobrol soal website bisnis Anda?
            </h2>
            <p className="mt-3 text-stone-700">
              Ceritakan usaha, target pelanggan, dan halaman yang dibutuhkan.
              Kami bantu susun langkah paling masuk akal.
            </p>
          </div>
          <Button href={site.whatsapp} label="Mulai Konsultasi WhatsApp" variant="solid" />
        </div>
      </section>
    </>
  );
}
