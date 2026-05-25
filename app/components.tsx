import Link from "next/link";
import { navigation, site } from "./site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-5">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-sm font-bold tracking-widest text-gray-900 uppercase">
            {site.name}
          </span>
          <span className="mt-0.5 text-xs tracking-wider text-gray-400 uppercase">
            PT Zenit Technology Solution
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-semibold tracking-widest text-gray-500 uppercase md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-transparent pb-0.5 transition-colors hover:border-gray-900 hover:text-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href={site.whatsapp} label="Konsultasi" variant="solid" />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-gray-400">
      <div className="mx-auto grid max-w-7xl gap-12 px-8 py-16 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="text-xs font-bold tracking-widest text-white uppercase">
            {site.name}
          </p>
          <div className="mt-1 h-px w-8 bg-amber-500" />
          <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
            Solusi website terjangkau, cepat, bersahabat, dan profesional untuk
            UMKM, bisnis lokal, dan profesional di Yogyakarta.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-widest text-white uppercase">
            Halaman
          </p>
          <div className="mt-1 h-px w-8 bg-amber-500" />
          <div className="mt-6 grid gap-3 text-sm">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold tracking-widest text-white uppercase">
            Legal
          </p>
          <div className="mt-1 h-px w-8 bg-amber-500" />
          <div className="mt-6 grid gap-3 text-sm">
            <Link
              href="/kebijakan-privasi"
              className="transition-colors hover:text-white"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/syarat-ketentuan"
              className="transition-colors hover:text-white"
            >
              Syarat & Ketentuan
            </Link>
            <Link
              href="/disclaimer"
              className="transition-colors hover:text-white"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-8 py-5">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Button({
  href,
  label,
  variant = "outline",
}: {
  href: string;
  label: string;
  variant?: "solid" | "outline";
}) {
  const styles =
    variant === "solid"
      ? "bg-amber-500 text-gray-950 hover:bg-amber-400"
      : "border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white";

  return (
    <Link
      href={href}
      className={`inline-flex h-10 items-center justify-center rounded-none px-6 text-xs font-bold tracking-widest uppercase transition-colors ${styles}`}
    >
      {label}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryLabel = "Konsultasi via WhatsApp",
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel?: string;
}) {
  return (
    <section className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-8 py-20 md:py-28">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-amber-500" />
          <p className="text-xs font-bold tracking-widest text-amber-500 uppercase">
            {eyebrow}
          </p>
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        <div className="mt-6 h-px max-w-4xl bg-gray-800" />
        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href={site.whatsapp} label={primaryLabel} variant="solid" />
          <Button href="/harga-paket" label="Lihat Paket Harga" />
        </div>
      </div>
    </section>
  );
}

export function Section({
  title,
  description,
  children,
  dark = false,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-gray-950 text-white" : "bg-white"}>
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="flex gap-8 border-b border-gray-200 pb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-amber-500" />
              <p className="text-xs font-bold tracking-widest text-amber-600 uppercase">
                Layanan
              </p>
            </div>
            <h2
              className={`mt-3 text-3xl font-extrabold tracking-tight md:text-4xl ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </h2>
          </div>
          {description ? (
            <p
              className={`max-w-lg text-sm leading-7 md:text-right ${
                dark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Card({
  title,
  children,
  index,
}: {
  title: string;
  children: React.ReactNode;
  index?: number;
}) {
  return (
    <article className="border border-gray-200 bg-white p-8">
      {index !== undefined && (
        <p className="mb-4 text-xs font-bold tracking-widest text-gray-300">
          {String(index + 1).padStart(2, "0")}
        </p>
      )}
      <h3 className="text-lg font-extrabold text-gray-900">{title}</h3>
      <div className="mt-1 h-px w-6 bg-amber-500" />
      <div className="mt-4 text-sm leading-7 text-gray-500">{children}</div>
    </article>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
