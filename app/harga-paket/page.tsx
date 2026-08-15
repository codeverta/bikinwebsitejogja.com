import type { Metadata } from "next";
import Link from "next/link";
import { Button, JsonLd, Section } from "../components";
import { pricing, site } from "../site-data";
import { createMetadata } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Harga Paket Website Jogja | Basic, Pro, Bisnis",
  description:
    "Harga jasa pembuatan website Jogja mulai Rp1,5 juta. Bandingkan paket Basic, Pro, dan Bisnis untuk UMKM di Sleman, Bantul, dan Yogyakarta.",
  path: "/harga-paket",
  keywords: ["harga website Jogja", "biaya bikin website Jogja", "paket website UMKM Jogja"],
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={{
        "@context":"https://schema.org",
        "@type":"OfferCatalog",
        name:"Paket Jasa Pembuatan Website Jogja",
        url:`${site.url}/harga-paket`,
        itemListElement:pricing.map((plan,index)=>({
          "@type":"Offer",
          position:index+1,
          name:`Paket Website ${plan.name}`,
          priceCurrency:"IDR",
          price:[1500000,3500000,6500000][index],
          availability:"https://schema.org/InStock",
          url:`${site.url}/harga-paket#paket`,
          itemOffered:{"@type":"Service",name:`Jasa Pembuatan Website ${plan.name}`,provider:{"@id":`${site.url}/#business`}},
        })),
      }}/>
      <section className="pricing-hero">
        <div className="pricing-orb pricing-orb-one" /><div className="pricing-orb pricing-orb-two" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <span className="pricing-badge">PAKET WEBSITE JOGJA · MULAI RP1,5 JUTA</span>
          <h1 className="mt-7 text-balance text-5xl font-extrabold leading-[1.04] tracking-[-.05em] text-white md:text-7xl">Harga jelas. Website siap bekerja untuk bisnis.</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-violet-100">Pilih paket awal yang paling dekat dengan kebutuhan Anda. Lingkup final tetap fleksibel setelah konsultasi.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="#paket" className="button-white h-14 px-8">Bandingkan Paket ↓</Link><Link href={site.whatsapp} className="button-ghost h-14 px-8">Tanya via WhatsApp →</Link></div>
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
