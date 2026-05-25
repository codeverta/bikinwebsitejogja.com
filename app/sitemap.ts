import type { MetadataRoute } from "next";
import { sitemapPlan, site } from "./site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return sitemapPlan.flatMap((group) =>
    group.pages.map((page) => ({
      url: `${site.url}${page.href === "/" ? "" : page.href}`,
      lastModified: now,
      changeFrequency: page.href === "/" ? "weekly" : "monthly",
      priority: page.href === "/" ? 1 : 0.7,
    })),
  );
}
