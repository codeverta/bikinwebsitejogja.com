import type { Metadata } from "next";
import { Card, LocalServiceJsonLd, PageHero, Section } from "../../components";
import { createMetadata } from "../../seo";

export const metadata: Metadata = createMetadata({
  title: "Jasa Landing Page Promosi Jogja",
  description:
    "Jasa landing page Jogja untuk iklan, event, dan promosi bisnis lokal. Dilengkapi copywriting, desain responsif, dan CTA WhatsApp.",
  path: "/layanan/landing-page",
  keywords: ["jasa landing page Jogja", "landing page Sleman", "landing page iklan Yogyakarta"],
});

export default function LandingPageService() {
  return (
    <>
      <LocalServiceJsonLd name="Jasa Landing Page Jogja" description="Pembuatan landing page promosi dan iklan untuk bisnis lokal di Daerah Istimewa Yogyakarta." path="/layanan/landing-page" />
      <PageHero
        eyebrow="Layanan"
        title="Landing page promosi yang fokus pada satu tujuan: membuat orang bertindak."
        description="Untuk iklan Meta, Google Ads, promo kuliner, workshop, pendaftaran, launching produk, atau penawaran jasa musiman di Jogja."
      />
      <Section title="Struktur landing page">
        <div className="grid gap-5 md:grid-cols-4">
          {["Headline kuat", "Manfaat jelas", "Bukti percaya", "CTA WhatsApp"].map((item) => (
            <Card key={item} title={item}>
              <p>
                Setiap section diarahkan untuk menjawab keraguan pengunjung dan
                membawa mereka ke aksi berikutnya.
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
