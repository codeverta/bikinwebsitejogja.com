import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd, Section } from "../components";
import { site } from "../site-data";
import { BlogCard, Pagination } from "./blog-components";
import { getAllPosts, getPaginatedPosts, getTotalBlogPages } from "./blog-data";
import { createMetadata } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Blog Website dan Digital Marketing UMKM Jogja",
  description:
    "Panduan website, Local SEO, landing page, toko online, dan pemasaran digital untuk UMKM di Jogja, Sleman, Bantul, Kulon Progo, dan Gunungkidul.",
  path: "/blog",
  keywords: ["blog UMKM Jogja", "Local SEO Jogja", "digital marketing Yogyakarta"],
});

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
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_.85fr] lg:items-end lg:py-28">
          <div><p className="section-kicker text-fuchsia-700">Insight bisnis lokal</p><h1 className="mt-5 max-w-4xl text-balance text-5xl font-extrabold leading-[1.06] tracking-[-.045em] md:text-7xl">Ide yang membuat bisnis Jogja lebih mudah ditemukan.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">Panduan website, Local SEO, dan strategi digital praktis untuk pemilik usaha di Yogyakarta.</p></div>
          {posts[0] ? <Link href={`/blog/${posts[0].slug}`} className="blog-featured"><span>ARTIKEL PILIHAN</span><h2>{posts[0].title}</h2><p>{posts[0].excerpt}</p><b>Baca artikel →</b></Link> : null}
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
