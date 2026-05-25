import type { Metadata } from "next";
import Link from "next/link";
import { Button, Card, PageHero, Section } from "../components";
import { site } from "../site-data";

export const metadata: Metadata = {
  title: "Kontak Bikin Website Jogja | Konsultasi Gratis",
  description:
    "Hubungi Bikin Website Jogja untuk konsultasi gratis via WhatsApp. Melayani Sleman, Bantul, Kota Jogja, dan sekitarnya.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Hubungi kami"
        title="Ceritakan kebutuhan website Anda, kami bantu petakan paketnya."
        description="Konsultasi awal bisa lewat WhatsApp. Sampaikan jenis usaha, target pelanggan, contoh website yang disukai, dan fitur yang dibutuhkan."
      />
      <Section title="Kontak dan lokasi">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="WhatsApp">
            <p>{site.phone}</p>
            <div className="mt-4">
              <Button href={site.whatsapp} label="Chat Sekarang" variant="solid" />
            </div>
          </Card>
          <Card title="Email">
            <Link href={`mailto:${site.email}`} className="font-semibold text-emerald-800">
              {site.email}
            </Link>
          </Card>
          <Card title="Area layanan">
            <p>{site.address}</p>
            <Link href={site.mapUrl} className="mt-4 inline-flex font-semibold text-emerald-800">
              Buka Google Maps
            </Link>
          </Card>
        </div>
      </Section>
      <Section title="Form konsultasi singkat">
        <form className="grid gap-4 rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
          <input className="h-12 rounded-md border border-stone-300 px-4" placeholder="Nama" />
          <input className="h-12 rounded-md border border-stone-300 px-4" placeholder="Nomor WhatsApp" />
          <input className="h-12 rounded-md border border-stone-300 px-4" placeholder="Jenis usaha" />
          <textarea className="min-h-32 rounded-md border border-stone-300 p-4" placeholder="Ceritakan kebutuhan website Anda" />
          <Button href={site.whatsapp} label="Kirim via WhatsApp" variant="solid" />
        </form>
      </Section>
    </>
  );
}
