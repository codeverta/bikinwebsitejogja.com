import type { Metadata } from "next";
import { Card, PageHero, Section } from "../components";

export const metadata: Metadata = {
  title: "Testimoni Klien Bikin Website Jogja",
  description:
    "Kumpulan testimoni klien Bikin Website Jogja untuk membangun kepercayaan calon pelanggan lokal.",
};

export default function TestimonialsPage() {
  const testimonials = [
    "Prosesnya jelas dari awal. Kami jadi punya website yang mudah dikirim ke calon pelanggan.",
    "Bahasanya enak, tidak teknis berlebihan. Website jadi terasa cocok untuk usaha kami.",
    "Tombol WhatsApp dan halaman layanan membantu pelanggan lebih cepat bertanya.",
  ];

  return (
    <>
      <PageHero
        eyebrow="Testimoni"
        title="Kepercayaan dibangun dari proses yang enak dan hasil yang bisa dipakai."
        description="Halaman ini menampung ulasan klien, nama bisnis, wilayah, dan jenis proyek untuk memperkuat social proof."
      />
      <Section title="Contoh format testimoni">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((quote, index) => (
            <Card key={quote} title={`Klien ${index + 1}`}>
              <p>&quot;{quote}&quot;</p>
              <p className="mt-4 font-semibold text-stone-950">UMKM Yogyakarta</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
