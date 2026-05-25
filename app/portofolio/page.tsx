import type { Metadata } from "next";
import { Card, PageHero, Section } from "../components";

export const metadata: Metadata = {
  title: "Portofolio Klien Website Jogja",
  description:
    "Contoh kategori proyek website untuk UMKM, profesional, dan bisnis lokal di Yogyakarta.",
};

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
