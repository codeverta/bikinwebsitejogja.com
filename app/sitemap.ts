import type { MetadataRoute } from "next";
import { getAllPosts, getTotalBlogPages } from "./blog/blog-data";
import { sitemapPlan, site } from "./site-data";
import projectData from "../projects.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const contentUpdatedAt = new Date("2026-08-15T00:00:00+07:00");
  const latestBlogUpdate = new Date(
    Math.max(...getAllPosts().map((post) => new Date(post.updatedAt).getTime())),
  );

  const priorities: Record<string, number> = {
    "/": 1,
    "/harga-paket": 0.9,
    "/hubungi-kami": 0.9,
    "/layanan/company-profile": 0.9,
    "/layanan/landing-page": 0.9,
    "/layanan/toko-online": 0.9,
    "/blog": 0.8,
    "/portofolio": 0.8,
    "/tentang-kami": 0.7,
    "/faq": 0.7,
    "/testimoni": 0.7,
  };

  const staticPages: MetadataRoute.Sitemap = sitemapPlan.flatMap((group) =>
    group.pages.map((page) => ({
      url: `${site.url}${page.href === "/" ? "" : page.href}`,
      lastModified: contentUpdatedAt,
      changeFrequency: page.href === "/" ? "weekly" : "monthly",
      priority: priorities[page.href] ?? 0.4,
      images: page.href === "/" ? [`${site.url}/og-image.png`] : undefined,
      alternates: {
        languages: {
          "id-ID": `${site.url}${page.href === "/" ? "" : page.href}`,
        },
      },
    })),
  );

  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const paginatedBlogPages: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(getTotalBlogPages() - 1, 0) },
    (_, index) => ({
      url: `${site.url}/blog/page/${index + 2}`,
      lastModified: latestBlogUpdate,
      changeFrequency: "weekly",
      priority: 0.5,
    }),
  );

  const projectPages: MetadataRoute.Sitemap = [
    {
      url: `${site.url}/projects`,
      lastModified: contentUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectData.projects.map(({ product }) => ({
      url: `${site.url}/projects/${product.id}`,
      lastModified: contentUpdatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${site.url}${product.image}`],
    })),
  ];

  return [...staticPages, ...projectPages, ...paginatedBlogPages, ...blogPages];
}
