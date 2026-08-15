import type { Metadata } from "next";
import { JsonLd, Section } from "../components";
import { site } from "../site-data";
import { BlogCard, Pagination } from "./blog-components";
import { getAllPosts, getPaginatedPosts, getTotalBlogPages } from "./blog-data";
import { PageHeroCarousel } from "../page-hero-carousel";

const blogSlides = [
  { image: "/assets/images/openai-codex.png", label: "TEKNOLOGI", title: "AI untuk mempercepat pertumbuhan bisnis lokal" },
  { image: "/assets/images/meeting.jpeg", label: "STRATEGI", title: "Dari ide menjadi website yang siap dipasarkan" },
  { image: "/assets/images/homepage-souvenirlilin-id.png", label: "STUDI KASUS", title: "Membangun kepercayaan melalui pengalaman digital" },
];

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
      <section className="blog-hero">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_.9fr] lg:items-center lg:py-28">
          <div><p className="section-kicker text-fuchsia-700">Insight bisnis lokal</p><h1 className="mt-5 max-w-4xl text-balance text-5xl font-extrabold leading-[1.06] tracking-[-.045em] md:text-7xl">Ide yang membuat bisnis Jogja lebih mudah ditemukan.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">Panduan website, Local SEO, dan strategi digital praktis untuk pemilik usaha di Yogyakarta.</p></div>
          <PageHeroCarousel slides={blogSlides} tone="blog" />
        </div>
      </section>
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
