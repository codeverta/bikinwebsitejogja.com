import type { Metadata } from "next";
import { Footer, Header } from "./components";
import "./globals.css";
import { site } from "./site-data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Jasa Bikin Website Jogja untuk Bisnis Lokal",
    template: "%s | Bikin Website Jogja",
  },
  description:
    "Jasa bikin website Jogja untuk UMKM dan bisnis lokal. Desain profesional, SEO lokal, dan siap mendatangkan chat WhatsApp.",
  alternates: {
    canonical: "/",
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
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"></link>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
