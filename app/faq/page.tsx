import type { Metadata } from "next";
import { PageHero, Section } from "../components";
import { faqs } from "../site-data";

export const metadata: Metadata = {
  title: "FAQ Bikin Website Jogja",
  description:
    "Pertanyaan umum tentang jasa pembuatan website di Jogja, proses kerja, harga, domain, hosting, revisi, dan SEO.",
};

export default function FaqPage() {
  return (
    <>
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
