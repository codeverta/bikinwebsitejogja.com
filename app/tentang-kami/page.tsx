import type { Metadata } from "next";
import { Card, PageHero, Section } from "../components";
import { createMetadata } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Tentang Bikin Website Jogja | PT Zenit",
  description:
    "Kenali Bikin Website Jogja dari PT Zenit Technology Solution, partner digital untuk UMKM di Kota Jogja, Sleman, Bantul, Kulon Progo, dan Gunungkidul.",
  path: "/tentang-kami",
  keywords: ["web developer Jogja", "perusahaan IT Jogja", "PT Zenit Technology Solution"],
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang kami"
        title="Partner digital lokal yang paham cara bisnis Jogja bertumbuh."
        description="Bikin Website Jogja adalah bagian dari PT Zenit Technology Solution. Kami hadir untuk membantu UMKM, bisnis lokal, dan profesional memiliki website yang terasa manusiawi, jelas, dan bisa langsung dipakai untuk jualan atau membangun kepercayaan."
      />
      <Section title="Cerita singkat" description="Kami melihat banyak usaha lokal punya produk bagus, layanan apik, dan pelanggan setia, tetapi belum punya rumah digital yang rapi. Dari situ Bikin Website Jogja dibangun: layanan website yang tidak bikin pusing dan tetap profesional.">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Visi">
            <p>
              Menjadi partner digital terpercaya bagi UMKM dan bisnis lokal
              Yogyakarta agar lebih mudah ditemukan, dipercaya, dan dihubungi.
            </p>
          </Card>
          <Card title="Misi">
            <p>
              Membuat website yang terjangkau, cepat online, mudah dipahami,
              serta didukung copywriting dan SEO lokal yang relevan.
            </p>
          </Card>
          <Card title="Legalitas">
            <p>
              Dikelola oleh PT Zenit Technology Solution sebagai bentuk komitmen
              layanan yang profesional, tertata, dan dapat dipertanggungjawabkan.
            </p>
          </Card>
        </div>
      </Section>
      <Section title="Nilai perusahaan">
        <div className="grid gap-5 md:grid-cols-4">
          {["Ramah", "Terbuka", "Solutif", "Tepat guna"].map((value) => (
            <Card key={value} title={value}>
              <p>
                Kami menjaga komunikasi tetap jelas, menghargai anggaran klien,
                dan memilih solusi yang benar-benar membantu tujuan bisnis.
              </p>
            </Card>
          ))}
        </div>
      </Section>
      <Section title="Komitmen untuk UMKM Jogja">
        <div className="rounded-lg bg-white p-7 text-lg leading-8 text-stone-700 shadow-sm">
          <p>
            Kami ingin lebih banyak usaha di Sleman, Bantul, Gunungkidul, Kulon
            Progo, dan Kota Jogja punya website yang bisa menjadi etalase,
            katalog, pusat informasi, dan jalur komunikasi yang dipercaya calon
            pelanggan. Prinsipnya sederhana: website harus membantu orang
            memahami bisnis Anda dan memudahkan mereka mengambil langkah berikutnya.
          </p>
        </div>
      </Section>
    </>
  );
}
