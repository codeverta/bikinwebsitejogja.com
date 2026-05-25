import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Header } from "./components";
import "./globals.css";
import { site } from "./site-data";
import { DM_Sans } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Bikin Website Jogja | Murah, Cepat, Profesional",
    template: "%s | Bikin Website Jogja",
  },
  description:
    "Jasa bikin website Jogja untuk UMKM, company profile, landing page, dan toko online. Cepat, ramah, profesional.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bikin Website Jogja",
    description:
      "Solusi website terjangkau, cepat, bersahabat, dan profesional untuk bisnis lokal Yogyakarta.",
    url: site.url,
    siteName: site.name,
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-dm-sans",
  display: "swap",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-scroll-behavior="smooth" className={dmSans.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
