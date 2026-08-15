import type { Metadata } from "next";
import { Card, LocalServiceJsonLd, PageHero, Section } from "../../components";
import { createMetadata } from "../../seo";

export const metadata: Metadata = createMetadata({
  title: "Jasa Website Toko Online Jogja",
  description:
    "Jasa pembuatan toko online Jogja untuk UMKM, lengkap dengan katalog produk, order WhatsApp, dan opsi payment gateway.",
  path: "/layanan/toko-online",
  keywords: ["jasa toko online Jogja", "website UMKM Bantul", "katalog online Yogyakarta"],
});

export default function OnlineStorePage() {
  return (
    <>
      <LocalServiceJsonLd name="Jasa Website Toko Online Jogja" description="Pembuatan toko online dan katalog produk untuk UMKM di Daerah Istimewa Yogyakarta." path="/layanan/toko-online" />
      <PageHero
        eyebrow="Layanan"
        title="Toko online sederhana untuk menampilkan produk dan menerima pesanan lebih rapi."
        description="Cocok untuk UMKM makanan, fashion, kerajinan, produk lokal, dan katalog B2B yang ingin pelanggan mudah melihat produk sebelum menghubungi."
      />
      <Section title="Pilihan alur toko">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Katalog WhatsApp">
            <p>
              Produk ditampilkan rapi, lalu tombol order mengarah ke WhatsApp
              dengan format pesan yang sudah disiapkan.
            </p>
          </Card>
          <Card title="Katalog lengkap">
            <p>
              Kategori, detail produk, foto, harga, dan informasi stok awal
              dibuat mudah dipindai dari HP.
            </p>
          </Card>
          <Card title="Payment gateway">
            <p>
              Untuk kebutuhan checkout yang lebih mandiri, website dapat
              dikembangkan dengan integrasi pembayaran pihak ketiga.
            </p>
          </Card>
        </div>
      </Section>
    </>
  );
}
