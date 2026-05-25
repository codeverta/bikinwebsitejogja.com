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

      {/* Thin rule / statistics bar */}
      <div className="border-b border-t border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl divide-x divide-gray-100 px-8 md:grid-cols-4">
          {[
            { value: "100+", label: "Proyek selesai" },
            { value: "5 th", label: "Pengalaman operasional" },
            { value: "3 hari", label: "Rata-rata waktu revisi" },
            { value: "100%", label: "Klien mendapatkan akses penuh" },
          ].map((stat) => (
            <div key={stat.label} className="px-8 py-8 first:pl-0 last:pr-0">
              <p className="text-3xl font-extrabold text-gray-900">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <Section
        title="Layanan utama"
        description="Pilih jenis website sesuai tujuan bisnis. Kami bantu dari struktur, copywriting, desain, hingga SEO dasar."
      >
        <div className="grid divide-x divide-gray-200 border border-gray-200 md:grid-cols-3">
          {services.map((service, i) => (
            <div key={service.href} className="p-8">
              <p className="text-xs font-bold tracking-widest text-gray-300">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl font-extrabold text-gray-900">
                {service.title}
              </h3>
              <div className="mt-2 h-px w-6 bg-amber-500" />
              <p className="mt-4 text-sm leading-7 text-gray-500">
                {service.summary}
              </p>
              <ul className="mt-6 grid gap-2 border-t border-gray-100 pt-6">
                {service.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-500"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-none bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={service.href}
                className="mt-8 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gray-900 uppercase transition-opacity hover:opacity-60"
              >
                Lihat detail
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Why us — dark section */}
      <section className="bg-gray-950">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="border-b border-gray-800 pb-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-amber-500" />
              <p className="text-xs font-bold tracking-widest text-amber-500 uppercase">
                Keunggulan
              </p>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Kenapa memilih kami?
            </h2>
          </div>
          <div className="mt-12 grid gap-px bg-gray-800 md:grid-cols-4">
            {[
              {
                num: "01",
                title: "Bahasa ramah, bebas jargon rumit",
                body: "Komunikasi yang jelas sejak hari pertama hingga website tayang.",
              },
              {
                num: "02",
                title: "Struktur halaman siap konversi",
                body: "Setiap elemen ditempatkan agar pengunjung tahu langkah selanjutnya.",
              },
              {
                num: "03",
                title: "SEO lokal Yogyakarta",
                body: "Halaman dioptimasi agar muncul di pencarian pelanggan terdekat.",
              },
              {
                num: "04",
                title: "Proses jelas dari awal sampai tayang",
                body: "Tidak ada kejutan biaya atau waktu—semua terdokumentasi.",
              },
            ].map((item) => (
              <div key={item.num} className="bg-gray-950 p-8">
                <p className="text-xs font-bold tracking-widest text-gray-600">
                  {item.num}
                </p>
                <h3 className="mt-4 text-base font-bold text-white">
                  {item.title}
                </h3>
                <div className="mt-2 h-px w-6 bg-amber-500" />
                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sitemap */}
      <Section
        title="Arsitektur website lengkap"
        description="Rancangan sitemap ini disiapkan untuk membangun kepercayaan, menangkap pencarian lokal, dan mengarahkan pengunjung ke konsultasi."
      >
        <div className="grid gap-px bg-gray-200 md:grid-cols-2">
          {sitemapPlan.map((group) => (
            <div key={group.group} className="bg-white p-8">
              <p className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                {group.group}
              </p>
              <div className="mt-6 grid gap-5">
                {group.pages.map((page) => (
                  <div
                    key={page.href}
                    className="border-l-2 border-gray-100 pl-4 transition-colors hover:border-amber-500"
                  >
                    <Link
                      href={page.href}
                      className="text-sm font-bold text-gray-900 hover:text-amber-700"
                    >
                      {page.title}
                    </Link>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {page.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="border-b border-gray-200 pb-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-amber-500" />
              <p className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                Investasi
              </p>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Paket populer
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-gray-500">
              Mulai dari sederhana sampai siap scale. Harga final mengikuti
              kebutuhan halaman, fitur, dan materi.
            </p>
          </div>
          <div className="mt-12 grid border border-gray-200 md:grid-cols-3">
            {pricing.map((plan, i) => (
              <div
                key={plan.name}
                className={`p-8 ${
                  i < pricing.length - 1
                    ? "border-b border-gray-200 md:border-b-0 md:border-r"
                    : ""
                } ${i === 1 ? "bg-gray-950 text-white" : "bg-white"}`}
              >
                <p
                  className={`text-xs font-bold tracking-widest uppercase ${
                    i === 1 ? "text-amber-400" : "text-amber-600"
                  }`}
                >
                  Paket {plan.name}
                </p>
                <p
                  className={`mt-4 text-4xl font-extrabold ${
                    i === 1 ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.price}
                </p>
                <p
                  className={`mt-2 text-sm ${
                    i === 1 ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {plan.fit}
                </p>
                <div
                  className={`mt-6 border-t pt-6 ${
                    i === 1 ? "border-gray-700" : "border-gray-100"
                  }`}
                >
                  <ul className="grid gap-3">
                    {plan.features.slice(0, 5).map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-2 text-sm ${
                          i === 1 ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 bg-amber-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Button
                    href={site.whatsapp}
                    label="Tanya paket ini"
                    variant={i === 1 ? "solid" : "outline"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Matrix */}
      <Section
        title="Kerangka Local SEO"
        description="Matrix ini menjadi arahan metadata halaman utama agar kata kunci lokal tetap fokus."
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse border border-gray-200 text-left text-sm">
            <thead>
              <tr className="bg-gray-950 text-white">
                <th className="border-r border-gray-700 p-5 text-xs font-bold tracking-widest uppercase">
                  Halaman
                </th>
                <th className="border-r border-gray-700 p-5 text-xs font-bold tracking-widest uppercase">
                  Meta Title
                </th>
                <th className="border-r border-gray-700 p-5 text-xs font-bold tracking-widest uppercase">
                  Meta Description
                </th>
                <th className="p-5 text-xs font-bold tracking-widest uppercase">
                  Keyword
                </th>
              </tr>
            </thead>
            <tbody>
              {seoMatrix.map((row, i) => (
                <tr
                  key={row.page}
                  className={`border-t border-gray-200 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="border-r border-gray-200 p-5 text-xs font-bold tracking-wide text-gray-900">
                    {row.page}
                  </td>
                  <td className="border-r border-gray-200 p-5 text-xs text-gray-600">
                    {row.title}
                  </td>
                  <td className="border-r border-gray-200 p-5 text-xs text-gray-600">
                    {row.description}
                  </td>
                  <td className="p-5">
                    <span className="bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-800">
                      {row.keyword}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Blog ideas — dark */}
      <section className="bg-gray-950">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="border-b border-gray-800 pb-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-amber-500" />
              <p className="text-xs font-bold tracking-widest text-amber-500 uppercase">
                Content Strategy
              </p>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              Topical authority blog
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-gray-400">
              Konten edukasi ditujukan untuk menarik UMKM yang sedang mencari
              solusi digital di Jogja.
            </p>
          </div>
          <div className="mt-12 grid gap-px bg-gray-800 md:grid-cols-2">
            {blogIdeas.map((idea, i) => (
              <div
                key={idea}
                className="flex items-start gap-5 bg-gray-950 p-7"
              >
                <p className="pt-0.5 text-xs font-bold tabular-nums text-gray-600">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="text-sm font-semibold leading-6 text-gray-200">
                  {idea}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-8 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold tracking-widest text-amber-900 uppercase">
              Langkah berikutnya
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-950 md:text-4xl">
              Siap ngobrol soal website bisnis Anda?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-amber-900">
              Ceritakan usaha, target pelanggan, dan halaman yang dibutuhkan.
              Kami bantu susun langkah paling masuk akal.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href={site.whatsapp}
              className="inline-flex h-12 items-center gap-3 bg-gray-950 px-8 text-xs font-bold tracking-widest text-white uppercase transition-opacity hover:opacity-80"
            >
              Mulai Konsultasi WhatsApp
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
