import type { Metadata } from "next";
import { Footer, Header } from "./components";
import "./globals.css";
import { site } from "./site-data";
import { coreLocalKeywords } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Jasa Bikin Website Jogja untuk Bisnis Lokal",
    template: "%s | Bikin Website Jogja",
  },
  description:
    "Jasa pembuatan website Jogja untuk UMKM dan bisnis di Kota Yogyakarta, Sleman, Bantul, Kulon Progo, dan Gunungkidul.",
  applicationName: site.name,
  authors: [{ name: site.company, url: site.url }],
  creator: site.company,
  publisher: site.company,
  category: "Jasa Pembuatan Website",
  keywords: [...coreLocalKeywords],
  referrer: "origin-when-cross-origin",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Jasa Bikin Website Jogja untuk Bisnis Lokal",
    description:
      "Website profesional, mudah ditemukan, dan siap mendatangkan pelanggan untuk bisnis lokal Yogyakarta.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Bikin Website Jogja" }],
    url: site.url,
    siteName: site.name,
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  twitter: { card: "summary_large_image", title: "Jasa Bikin Website Jogja", description: "Website profesional untuk bisnis lokal Yogyakarta.", images: ["/og-image.png"] },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
