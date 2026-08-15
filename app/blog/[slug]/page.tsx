import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogCta, RelatedPosts } from "../blog-components";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "../blog-data";
import { MarkdownContent } from "../markdown-content";
import { JsonLd, Section } from "../../components";
import { site } from "../../site-data";
import { coreLocalKeywords } from "../../seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.keyword, ...post.tags, ...coreLocalKeywords],
    alternates: {
      canonical: `${site.url}/blog/${post.slug}`,
      languages: {
        "id-ID": `${site.url}/blog/${post.slug}`,
        "x-default": `${site.url}/blog/${post.slug}`,
      },
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${site.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [site.company],
      tags: post.tags,
      siteName: site.name,
      locale: "id_ID",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);
  const articleUrl = `${site.url}/blog/${post.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url: articleUrl,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          author: {
            "@type": "Organization",
            name: site.company,
          },
          publisher: {
            "@type": "Organization",
            name: site.company,
            logo: {
              "@type": "ImageObject",
              url: `${site.url}/assets/logo-zenit.png`,
            },
          },
          image: `${site.url}/og-image.png`,
          inLanguage: "id-ID",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": articleUrl,
          },
          keywords: [post.keyword, ...post.tags].join(", "),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Beranda",
              item: site.url,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: `${site.url}/blog`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: post.title,
              item: articleUrl,
            },
          ],
        }}
      />

      <article>
        <header className="bg-emerald-950 text-white">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
              {post.category} / {post.readingTime}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-emerald-50">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm text-emerald-50">
              <span>Dipublikasikan {formatDate(post.publishedAt)}</span>
              <span>/</span>
              <span>Keyword: {post.keyword}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            <div className="rounded-lg bg-white p-6 text-lg leading-8 text-stone-700 shadow-sm md:p-9">
              {post.contentMarkdown ? (
                <MarkdownContent content={post.contentMarkdown} />
              ) : (
                <>
                  <p className="text-xl leading-9 text-stone-800">{post.intro}</p>
                  {post.sections.map((section) => (
                    <section key={section.heading} className="mt-10">
                      <h2 className="text-3xl font-bold leading-tight text-stone-950">
                        {section.heading}
                      </h2>
                      <div className="mt-4 grid gap-4">
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      {section.list ? (
                        <ul className="mt-5 grid gap-3 rounded-lg bg-stone-50 p-5">
                          {section.list.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-emerald-700" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  ))}
                </>
              )}

              <section className="mt-10">
                <h2 className="text-3xl font-bold text-stone-950">FAQ singkat</h2>
                <div className="mt-5 grid gap-4">
                  {post.faq.map((item) => (
                    <details
                      key={item.question}
                      className="rounded-lg border border-stone-200 p-5"
                    >
                      <summary className="cursor-pointer font-bold text-stone-950">
                        {item.question}
                      </summary>
                      <p className="mt-3 text-base leading-7">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <div className="mt-10">
                <BlogCta text={post.cta} />
              </div>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-800">
                Ringkasan SEO
              </p>
              <dl className="mt-4 grid gap-3 text-sm text-stone-600">
                <div>
                  <dt className="font-semibold text-stone-950">Target keyword</dt>
                  <dd>{post.keyword}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-stone-950">Kategori</dt>
                  <dd>{post.category}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-stone-950">Tag</dt>
                  <dd>{post.tags.join(", ")}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </article>

      <Section
        title="Rekomendasi bacaan lain"
        description="Artikel terkait dipilih dari kategori dan tag yang paling dekat dengan topik yang sedang dibaca."
      >
        <RelatedPosts posts={relatedPosts} />
      </Section>
    </>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
