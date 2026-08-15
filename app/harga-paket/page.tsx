import type { Metadata } from "next";
import Link from "next/link";
import { Button, Section } from "../components";
import { pricing, site } from "../site-data";
import { PageHeroCarousel } from "../page-hero-carousel";

const pricingSlides = [
  { image: "/assets/property-listing/preview.png", label: "PAKET BASIC", title: "Website profesional untuk mulai dikenal" },
  { image: "/assets/e-commerce/landing-page.png", label: "PAKET PRO", title: "Website lengkap yang siap dipromosikan" },
  { image: "/assets/erp/homepage.png", label: "PAKET BISNIS", title: "Sistem khusus untuk operasional yang lebih besar" },
];

export const metadata: Metadata = {
  title: "Harga Paket Website Jogja | Basic, Pro, Bisnis",
  description:
    "Bandingkan paket website Basic, Pro, dan Bisnis untuk UMKM Jogja. Pilih sesuai kebutuhan dan anggaran.",
};

export default function PricingPage() {
  return (
    <>
      <section className="pricing-hero">
        <div className="pricing-orb pricing-orb-one" /><div className="pricing-orb pricing-orb-two" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <div className="mx-auto max-w-4xl"><span className="pricing-badge">PAKET WEBSITE JOGJA · MULAI RP1,5 JUTA</span><h1 className="mt-7 text-balance text-5xl font-extrabold leading-[1.04] tracking-[-.05em] text-white md:text-7xl">Harga jelas. Website siap bekerja untuk bisnis.</h1><p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-violet-100">Pilih paket awal yang paling dekat dengan kebutuhan Anda. Lingkup final tetap fleksibel setelah konsultasi.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="#paket" className="button-white h-14 px-8">Bandingkan Paket ↓</Link><Link href={site.whatsapp} className="button-ghost h-14 px-8">Tanya via WhatsApp →</Link></div></div>
          <div className="mx-auto mt-14 max-w-4xl"><PageHeroCarousel slides={pricingSlides} tone="pricing" /></div>
        </div>
      </section>
      <div id="paket"><Section title="Tabel paket harga" description="Harga berikut adalah estimasi awal. Setelah konsultasi, kami susun ruang lingkup final agar tidak ada biaya yang samar.">
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
      </Section></div>
    </>
  );
}
