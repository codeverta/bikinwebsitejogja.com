import type { Metadata } from "next";
import { Card, LocalServiceJsonLd, PageHero, Section } from "../../components";
import { createMetadata } from "../../seo";

export const metadata: Metadata = createMetadata({
  title: "Jasa Website Company Profile Jogja",
  description:
    "Jasa website company profile profesional untuk bisnis di Jogja, Sleman, Bantul, Kulon Progo, dan Gunungkidul, lengkap dengan kontak dan SEO lokal.",
  path: "/layanan/company-profile",
  keywords: ["jasa company profile Jogja", "website perusahaan Jogja", "website profil usaha Sleman"],
});

export default function CompanyProfilePage() {
  return (
    <>
      <LocalServiceJsonLd name="Jasa Website Company Profile Jogja" description="Pembuatan website company profile profesional untuk bisnis lokal di Daerah Istimewa Yogyakarta." path="/layanan/company-profile" />
      <PageHero
        eyebrow="Layanan"
        title="Website company profile untuk bisnis yang ingin terlihat lebih dipercaya."
        description="Cocok untuk jasa profesional, kantor, sekolah, kontraktor, klinik, vendor event, dan usaha lokal yang butuh profil resmi di internet."
      />
      <Section title="Isi halaman yang disiapkan">
        <div className="grid gap-5 md:grid-cols-3">
          {["Profil bisnis", "Layanan utama", "Kontak dan area layanan"].map((item) => (
            <Card key={item} title={item}>
              <p>
                Copy dibuat ringkas dan meyakinkan agar calon pelanggan cepat
                paham siapa Anda, apa yang ditawarkan, dan cara menghubungi.
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
