import Link from "next/link";
import { Button, JsonLd, PageHero, Section } from "./components";
import { pricing, services, site } from "./site-data";

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

      {/* Portfolio preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="border-b border-gray-200 pb-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-amber-500" />
              <p className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                Portofolio
              </p>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Yang pernah kami kerjakan
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-7 text-gray-500">
              Dari UMKM hingga event skala nasional — setiap proyek dikerjakan
              dengan pendekatan yang sama: jelas, rapi, dan siap konversi.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Bapperida Papua",
                tag: "Pemerintahan",
              },
              {
                title: "Malabar Trail Run",
                tag: "Event & Ticketing",
              },
              {
                title: "Roxgym",
                tag: "Fitness & Wellness",
              },
              {
                title: "NSC Bantu Perizinan",
                tag: "Jasa & Konsultasi",
              },
              {
                title: "Million Candles",
                tag: "E-commerce",
              },
              {
                title: "Global Inti Sekawan",
                tag: "Enterprise",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href="/portofolio"
                className="group border border-gray-200 p-7 transition-all hover:border-amber-500 hover:shadow-lg"
              >
                <p className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                  {item.tag}
                </p>
                <h3 className="mt-3 text-lg font-extrabold text-gray-900 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/portofolio"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gray-900 uppercase hover:text-amber-700 transition-colors"
            >
              Lihat semua portofolio
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial highlight */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-8 py-20">
          <div className="border-b border-gray-200 pb-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-amber-500" />
              <p className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                Testimoni
              </p>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Kata mereka yang sudah pakai
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote: "Prosesnya cepat, hasilnya rapi. Saya langsung dapat pesanan baru setelah website tayang.",
                author: "Pemilik Laundry, Sleman",
              },
              {
                quote: "Akhirnya punya website yang gak ribet. Tim-nya sabar banget ngajarin saya kelola sendiri.",
                author: "Pemilik Gym, Depok",
              },
              {
                quote: "Dari diskusi pertama sampai tayang cuma 5 hari. Harga jelas, revisi cepat. Recommended!",
                author: "Event Organizer, Jogja",
              },
            ].map((item) => (
              <div key={item.author} className="bg-white border border-gray-200 p-7">
                <p className="text-4xl font-serif text-amber-500 leading-none">&ldquo;</p>
                <p className="mt-2 text-sm leading-7 text-gray-600 italic">
                  {item.quote}
                </p>
                <div className="mt-6 h-px w-6 bg-amber-500" />
                <p className="mt-4 text-xs font-bold tracking-wide text-gray-900">
                  {item.author}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/testimoni"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gray-900 uppercase hover:text-amber-700 transition-colors"
            >
              Baca testimoni lengkap
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-8 py-20">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-amber-500" />
              <p className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                FAQ
              </p>
              <div className="h-px w-8 bg-amber-500" />
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
              Pertanyaan umum
            </h2>
          </div>
          <div className="mt-12 grid gap-4">
            {[
              {
                q: "Berapa lama proses pembuatan website?",
                a: "Rata-rata 5-10 hari kerja tergantung kompleksitas halaman dan konten yang perlu disiapkan.",
              },
              {
                q: "Apakah domain dan hosting sudah termasuk?",
                a: "Ya, tahun pertama domain dan hosting sudah termasuk dalam paket. Perpanjangan tahun berikutnya dikenakan biaya terpisah.",
              },
              {
                q: "Apakah bisa minta revisi setelah website tayang?",
                a: "Setiap paket sudah termasuk 3-5 kali revisi. Revisi tambahan di luar paket dikenakan biaya sesuai kesepakatan.",
              },
              {
                q: "Website saya bisa diurus sendiri setelah jadi?",
                a: "Bisa. Kami berikan akses penuh ke dashboard admin dan panduan singkat. Tidak ada lock-in vendor.",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group border border-gray-200 p-5 open:border-amber-500 transition-colors"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-bold text-gray-900 list-none">
                  {item.q}
                  <span className="shrink-0 text-xs text-gray-400 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-gray-500 border-t border-gray-100 pt-4">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gray-900 uppercase hover:text-amber-700 transition-colors"
            >
              Lihat semua FAQ
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

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
