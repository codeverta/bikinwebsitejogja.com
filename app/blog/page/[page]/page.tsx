import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero, Section } from "../../../components";
import { site } from "../../../site-data";
import { BlogCard, Pagination } from "../../blog-components";
import { getPaginatedPosts, getTotalBlogPages } from "../../blog-data";

type Props = {
  params: Promise<{ page: string }>;
};

export function generateStaticParams() {
  return Array.from({ length: getTotalBlogPages() - 1 }, (_, index) => ({
    page: String(index + 2),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const pageNumber = Number(page);

  return {
    title: `Blog Website UMKM Jogja - Halaman ${pageNumber}`,
    description:
      "Lanjutan artikel edukasi website, Local SEO, landing page, dan toko online untuk UMKM di Yogyakarta.",
    alternates: {
      canonical: `/blog/page/${pageNumber}`,
    },
  };
}

export default async function BlogPaginationPage({ params }: Props) {
  const { page } = await params;
  const pageNumber = Number(page);
  const totalPages = getTotalBlogPages();

  if (!Number.isInteger(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    notFound();
  }

  const posts = getPaginatedPosts(pageNumber);

  return (
    <>
      <PageHero
        eyebrow="Blog UMKM Jogja"
        title={`Artikel website dan Local SEO - halaman ${pageNumber}.`}
        description={`Kumpulan artikel lanjutan dari ${site.name} untuk membantu bisnis lokal Yogyakarta bertumbuh lewat website dan traffic organik.`}
      />
      <Section title="Artikel lainnya">
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <Pagination currentPage={pageNumber} totalPages={totalPages} />
      </Section>
    </>
  );
}
