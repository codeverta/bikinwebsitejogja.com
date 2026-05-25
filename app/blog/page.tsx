import type { Metadata } from "next";
import { Card, PageHero, Section } from "../components";
import { blogIdeas } from "../site-data";

export const metadata: Metadata = {
  title: "Blog Website dan Digital Marketing UMKM Jogja",
  description:
    "Artikel edukasi untuk UMKM Jogja tentang website, Local SEO, landing page, dan toko online.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog UMKM"
        title="Artikel edukasi untuk membantu bisnis Jogja naik kelas digital."
        description="Topik blog disusun untuk menjawab pertanyaan calon klien sekaligus membangun kepercayaan di pencarian lokal."
      />
      <Section title="Rencana konten topical authority">
        <div className="grid gap-5 md:grid-cols-2">
          {blogIdeas.map((idea) => (
            <Card key={idea} title={idea}>
              <p>
                Fokus intent: informasional dan lokal. Artikel dapat diarahkan
                ke konsultasi paket website yang paling relevan.
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
