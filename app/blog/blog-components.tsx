import Link from "next/link";
import { Button, Card } from "../components";
import { site } from "../site-data";
import type { BlogPost } from "./blog-data";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-800">
        <span>{post.category}</span>
        <span className="text-stone-400">/</span>
        <span>{post.readingTime}</span>
      </div>
      <h2 className="mt-3 text-2xl font-bold leading-snug text-stone-950">
        <Link href={`/blog/${post.slug}`} className="hover:text-emerald-800">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 leading-7 text-stone-600">{post.excerpt}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-stone-100 px-3 py-1 text-xs text-stone-700">
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-5 inline-flex font-semibold text-emerald-800"
      >
        Baca artikel
      </Link>
    </article>
  );
}

export function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const pageHref = (page: number) => (page === 1 ? "/blog" : `/blog/page/${page}`);

  return (
    <nav className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-stone-200 pt-6">
      <div className="text-sm text-stone-600">
        Halaman {currentPage} dari {totalPages}
      </div>
      <div className="flex flex-wrap gap-2">
        {currentPage > 1 ? (
          <Link
            href={pageHref(currentPage - 1)}
            className="rounded-md border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-100"
          >
            Sebelumnya
          </Link>
        ) : null}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <Link
            key={page}
            href={pageHref(page)}
            className={`rounded-md border px-4 py-2 text-sm font-semibold ${
              page === currentPage
                ? "border-emerald-700 bg-emerald-700 text-white"
                : "border-stone-300 text-stone-800 hover:bg-stone-100"
            }`}
          >
            {page}
          </Link>
        ))}
        {currentPage < totalPages ? (
          <Link
            href={pageHref(currentPage + 1)}
            className="rounded-md border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-800 hover:bg-stone-100"
          >
            Berikutnya
          </Link>
        ) : null}
      </div>
    </nav>
  );
}

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {posts.map((post) => (
        <Card key={post.slug} title={post.title}>
          <p>{post.excerpt}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="mt-4 inline-flex font-semibold text-emerald-800"
          >
            Baca juga
          </Link>
        </Card>
      ))}
    </div>
  );
}

export function BlogCta({ text }: { text: string }) {
  return (
    <aside className="rounded-lg bg-amber-100 p-6">
      <h2 className="text-2xl font-bold text-stone-950">Butuh versi praktis untuk bisnis Anda?</h2>
      <p className="mt-3 leading-7 text-stone-700">{text}</p>
      <div className="mt-5">
        <Button href={site.whatsapp} label="Konsultasi via WhatsApp" variant="solid" />
      </div>
    </aside>
  );
}
