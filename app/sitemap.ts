import type { MetadataRoute } from "next";
import { getAllPosts, getTotalBlogPages } from "./blog/blog-data";
import { sitemapPlan, site } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = sitemapPlan.flatMap((group) =>
    group.pages.map((page) => ({
      url: `${site.url}${page.href === "/" ? "" : page.href}`,
      lastModified: now,
      changeFrequency: page.href === "/" ? "weekly" : "monthly",
      priority: page.href === "/" ? 1 : 0.7,
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
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    }),
  );

  return [...staticPages, ...paginatedBlogPages, ...blogPages];
}
