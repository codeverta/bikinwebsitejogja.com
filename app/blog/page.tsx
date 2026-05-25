import type { Metadata } from "next";
import { JsonLd, PageHero, Section } from "../components";
import { site } from "../site-data";
import { BlogCard, Pagination } from "./blog-components";
import { getAllPosts, getPaginatedPosts, getTotalBlogPages } from "./blog-data";

export const metadata: Metadata = {
  title: "Blog Website dan Digital Marketing UMKM Jogja",
  description:
    "Artikel edukasi untuk UMKM Jogja tentang website, Local SEO, landing page, toko online, dan strategi traffic organik.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const posts = getPaginatedPosts(1);
  const totalPages = getTotalBlogPages();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog Bikin Website Jogja",
          url: `${site.url}/blog`,
          publisher: {
            "@type": "Organization",
            name: site.company,
          },
          blogPost: getAllPosts().map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: `${site.url}/blog/${post.slug}`,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
          })),
        }}
      />
      <PageHero
        eyebrow="Blog UMKM Jogja"
        title="Panduan website, Local SEO, dan digital marketing untuk bisnis lokal."
        description="Artikel disusun untuk menjawab pertanyaan calon klien, menangkap pencarian lokal, dan membantu UMKM Jogja mengambil keputusan digital dengan lebih percaya diri."
      />
      <Section
        title="Artikel terbaru"
        description="Konten evergreen dengan intent lokal dan informasional untuk membangun topical authority di Yogyakarta."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <Pagination currentPage={1} totalPages={totalPages} />
      </Section>
    </>
  );
}
