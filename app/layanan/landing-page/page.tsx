import type { Metadata } from "next";
import { Card, PageHero, Section } from "../../components";

export const metadata: Metadata = {
  title: "Jasa Landing Page Promosi Jogja",
  description:
    "Bikin landing page promosi untuk iklan, event, dan campaign bisnis lokal Jogja dengan copywriting dan CTA WhatsApp.",
};

export default function LandingPageService() {
  return (
    <>
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
