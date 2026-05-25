import type { Metadata } from "next";
import { Card, PageHero, Section } from "../../components";

export const metadata: Metadata = {
  title: "Jasa Website Company Profile Jogja",
  description:
    "Bikin website company profile untuk bisnis Jogja. Profil usaha, layanan, kontak, dan SEO lokal dalam satu website profesional.",
};

export default function CompanyProfilePage() {
  return (
    <>
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
