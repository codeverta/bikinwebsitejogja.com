import type { Metadata } from "next";
import { Card, PageHero, Section } from "../components";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description:
    "Syarat dan ketentuan layanan Bikin Website Jogja mencakup ruang lingkup, pembayaran, revisi, dan hak cipta.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Syarat & Ketentuan"
        description="Aturan dasar kerja sama agar ruang lingkup proyek, pembayaran, revisi, dan serah terima berjalan jelas."
      />
      <Section title="Ringkasan ketentuan">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            "Ruang lingkup pekerjaan disepakati sebelum proyek dimulai.",
            "Jadwal pengerjaan bergantung pada kelengkapan materi dari klien.",
            "Jumlah revisi mengikuti paket atau penawaran yang disetujui.",
            "Biaya pihak ketiga seperti domain, hosting, plugin, dan payment gateway dapat ditagihkan terpisah.",
          ].map((item) => (
            <Card key={item} title={item}>
              <p>
                Detail final dapat dituangkan dalam invoice, proposal, atau
                dokumen kerja sama sesuai kebutuhan proyek.
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
