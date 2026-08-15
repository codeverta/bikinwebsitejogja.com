import type { Metadata } from "next";
import { PageHero, Section } from "../components";
import { createMetadata } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Disclaimer",
  description:
    "Penyangkalan layanan Bikin Website Jogja terkait hasil bisnis, konten klien, dan layanan pihak ketiga.",
  path: "/disclaimer",
  keywords: [],
  includeLocalKeywords: false,
});

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Penyangkalan"
        description="Batas tanggung jawab layanan agar ekspektasi proyek tetap sehat dan transparan."
      />
      <Section title="Batas tanggung jawab">
        <div className="rounded-lg bg-white p-7 text-lg leading-8 text-stone-700 shadow-sm">
          <p>
            Kami berupaya membuat website yang baik secara struktur, tampilan,
            copywriting, dan SEO dasar. Namun, hasil bisnis seperti jumlah
            penjualan, peringkat Google, atau volume inquiry dapat dipengaruhi
            banyak faktor di luar kendali kami, termasuk kualitas penawaran,
            anggaran promosi, persaingan pasar, reputasi brand, dan aktivitas
            pemasaran lanjutan.
          </p>
          <p className="mt-4">
            Klien bertanggung jawab atas keakuratan materi, legalitas konten,
            hak penggunaan foto, dan klaim yang dipublikasikan di website.
            Layanan pihak ketiga mengikuti kebijakan masing-masing penyedia.
          </p>
        </div>
      </Section>
    </>
  );
}
