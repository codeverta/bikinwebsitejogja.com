import type { Metadata } from "next";
import { site } from "./site-data";

export const localAreas = [
  "Kota Yogyakarta",
  "Sleman",
  "Bantul",
  "Kulon Progo",
  "Gunungkidul",
] as const;

export const coreLocalKeywords = [
  "jasa pembuatan website Jogja",
  "bikin website Jogja",
  "jasa website Yogyakarta",
  "jasa website Sleman",
  "jasa website Bantul",
  "jasa website Kulon Progo",
  "jasa website Gunungkidul",
  "website UMKM Jogja",
] as const;

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  includeLocalKeywords?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/og-image.png",
  includeLocalKeywords = true,
}: MetadataInput): Metadata {
  const canonical = path === "/" ? site.url : `${site.url}${path}`;
  const allKeywords = [
    ...new Set([...keywords, ...(includeLocalKeywords ? coreLocalKeywords : [])]),
  ];

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical,
      languages: {
        "id-ID": canonical,
        "x-default": canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - ${site.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
