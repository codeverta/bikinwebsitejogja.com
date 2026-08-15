import type { Metadata } from "next";
import { PageHero, Section } from "../components";
import { site } from "../site-data";
import { createMetadata } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi Bikin Website Jogja mengenai data klien, cookies, keamanan, dan penggunaan informasi layanan.",
  path: "/kebijakan-privasi",
  keywords: [],
  includeLocalKeywords: false,
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Kebijakan Privasi"
        description="Draft singkat perlindungan data klien untuk layanan Bikin Website Jogja."
      />
      <Section title="Perlindungan data klien">
        <div className="prose prose-stone max-w-none rounded-lg bg-white p-7 leading-8 shadow-sm">
          <p>
            Kami mengumpulkan informasi yang diberikan secara sukarela, seperti
            nama, nomor WhatsApp, email, nama bisnis, materi konten, dan kebutuhan
            proyek. Data tersebut digunakan untuk konsultasi, penyusunan penawaran,
            pengerjaan website, komunikasi layanan, dan dukungan setelah website tayang.
          </p>
          <p>
            Website dapat menggunakan cookies atau teknologi serupa untuk memahami
            performa kunjungan, sumber traffic, dan pengalaman pengguna. Data
            analitik digunakan secara agregat dan tidak ditujukan untuk menjual
            informasi pribadi kepada pihak lain.
          </p>
          <p>
            Kami menerapkan langkah keamanan yang wajar untuk menjaga informasi
            klien, termasuk pembatasan akses internal dan penggunaan layanan
            pihak ketiga yang relevan. Meski demikian, tidak ada sistem digital
            yang sepenuhnya bebas risiko.
          </p>
          <p>
            Klien dapat meminta pembaruan atau penghapusan data tertentu dengan
            menghubungi {site.email}. Kebijakan ini dapat diperbarui sesuai
            kebutuhan operasional, hukum, atau pengembangan layanan.
          </p>
        </div>
      </Section>
    </>
  );
}
