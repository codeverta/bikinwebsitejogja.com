import type { Metadata } from "next";
import { Card, PageHero, Section } from "../../components";

export const metadata: Metadata = {
  title: "Jasa Website Toko Online Jogja",
  description:
    "Bikin website toko online Jogja dengan katalog produk, order WhatsApp, dan opsi payment gateway untuk UMKM.",
};

export default function OnlineStorePage() {
  return (
    <>
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
