import Link from "next/link";
import { navigation, site } from "./site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-base font-bold text-emerald-900">{site.name}</span>
          <span className="text-xs text-stone-500">by PT Zenit Technology Solution</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-stone-700 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-emerald-800">
              {item.label}
            </Link>
          ))}
        </nav>
        <Button href={site.whatsapp} label="WhatsApp" variant="solid" />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-lg font-bold text-white">{site.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-stone-300">
            Solusi website terjangkau, cepat, bersahabat, dan profesional untuk
            UMKM, bisnis lokal, dan profesional di Yogyakarta.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Halaman</p>
          <div className="mt-3 grid gap-2 text-sm">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Legal</p>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/kebijakan-privasi" className="hover:text-white">
              Kebijakan Privasi
            </Link>
            <Link href="/syarat-ketentuan" className="hover:text-white">
              Syarat & Ketentuan
            </Link>
            <Link href="/disclaimer" className="hover:text-white">
              Disclaimer
            </Link>
          </div>
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
      ? "bg-emerald-700 text-white hover:bg-emerald-800"
      : "border border-emerald-800 text-emerald-900 hover:bg-emerald-50";

  return (
    <Link
      href={href}
      className={`inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition ${styles}`}
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
    <section className="bg-emerald-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
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
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-14">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-stone-950 md:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-4 text-lg leading-8 text-stone-600">{description}</p>
        ) : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-stone-950">{title}</h3>
      <div className="mt-3 text-sm leading-6 text-stone-600">{children}</div>
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
