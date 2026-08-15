import type { Metadata } from "next";
import { Card, PageHero, Section } from "../components";
import { createMetadata } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Portofolio Klien Website Jogja",
  description:
    "Portofolio pembuatan website untuk UMKM, profesional, sekolah, kuliner, dan bisnis lokal di Jogja serta wilayah DIY.",
  path: "/portofolio",
  keywords: ["portofolio web design Jogja", "contoh website UMKM Jogja"],
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portofolio"
        title="Contoh arah pekerjaan untuk bisnis lokal yang ingin tampil lebih rapi."
        description="Bagian ini disiapkan sebagai ruang studi kasus klien: sebelum-sesudah, tujuan proyek, fitur utama, dan hasil yang ingin dicapai."
      />
      <Section title="Kategori portofolio">
        <div className="grid gap-5 md:grid-cols-3">
          {["Jasa profesional", "Kuliner dan retail", "Sekolah dan komunitas"].map((item) => (
            <Card key={item} title={item}>
              <p>
                Studi kasus dapat memuat tantangan, solusi halaman, CTA utama,
                dan metrik sederhana seperti jumlah inquiry atau traffic lokal.
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
