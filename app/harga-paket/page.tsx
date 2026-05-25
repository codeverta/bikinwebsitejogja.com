import type { Metadata } from "next";
import { Button, PageHero, Section } from "../components";
import { pricing, site } from "../site-data";

export const metadata: Metadata = {
  title: "Harga Paket Website Jogja | Basic, Pro, Bisnis",
  description:
    "Bandingkan paket website Basic, Pro, dan Bisnis untuk UMKM Jogja. Pilih sesuai kebutuhan dan anggaran.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Harga & paket"
        title="Paket website yang jelas, fleksibel, dan bisa disesuaikan."
        description="Mulai dari website sederhana untuk validasi bisnis sampai toko online dengan katalog dan alur order. Semua paket dibuat agar pemilik usaha mudah memahami apa yang didapat."
      />
      <Section title="Tabel paket harga" description="Harga berikut adalah estimasi awal. Setelah konsultasi, kami susun ruang lingkup final agar tidak ada biaya yang samar.">
        <div className="overflow-x-auto rounded-lg border border-stone-200 bg-white">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead className="bg-stone-100 text-stone-900">
              <tr>
                <th className="p-4">Paket</th>
                <th className="p-4">Harga</th>
                <th className="p-4">Paling cocok untuk</th>
                <th className="p-4">Fitur</th>
                <th className="p-4">CTA</th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((plan) => (
                <tr key={plan.name} className="border-t border-stone-200 align-top">
                  <td className="p-4 text-lg font-bold text-emerald-900">{plan.name}</td>
                  <td className="p-4 font-semibold">{plan.price}</td>
                  <td className="p-4">{plan.fit}</td>
                  <td className="p-4">
                    <ul className="grid gap-2">
                      {plan.features.map((feature) => (
                        <li key={feature}>- {feature}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-4">
                    <Button href={site.whatsapp} label="Tanya Paket" variant="solid" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </>
  );
}
