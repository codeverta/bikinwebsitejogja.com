import type { Metadata } from "next";
import { JsonLd, PageHero, Section } from "../components";
import { faqs } from "../site-data";
import { createMetadata } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "FAQ Bikin Website Jogja",
  description:
    "Jawaban pertanyaan umum jasa pembuatan website Jogja: harga, proses, domain, hosting, revisi, maintenance, dan Local SEO.",
  path: "/faq",
  keywords: ["FAQ website Jogja", "biaya dan proses website Jogja"],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Pertanyaan yang sering muncul sebelum bikin website."
        description="Jawaban singkat untuk membantu Anda mengambil keputusan dengan tenang."
      />
      <Section title="Tanya jawab">
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-stone-200 bg-white p-5">
              <summary className="cursor-pointer font-bold text-stone-950">
                {faq.question}
              </summary>
              <p className="mt-3 leading-7 text-stone-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
