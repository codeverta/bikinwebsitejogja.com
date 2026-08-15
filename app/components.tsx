import Link from "next/link";
import Image from "next/image";
import { navigation, site } from "./site-data";
import { MegaMenu } from "./mega-menu";
import { localAreas } from "./seo";
import { WhatsAppIcon } from "./icons";

export function Header() {
  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 leading-tight">
          <span className="brand-logo"><Image src="/assets/logo-zenit.png" alt="Logo PT Zenit Technology Solution" width={701} height={701} priority /></span>
          <span className="flex flex-col"><strong className="text-[15px] tracking-[-.02em] text-white">Bikin Website Jogja</strong><small className="brand-subtitle text-[10px] font-bold tracking-[.08em]">PT ZENIT TECHNOLOGY SOLUTION</small></span>
        </Link>
        <nav className="hidden items-center gap-7 text-[13px] font-semibold lg:flex" aria-label="Navigasi utama">
          <MegaMenu />
          <Link href="/harga-paket" className="nav-link">Harga</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/tentang-kami" className="nav-link">Tentang</Link>
        </nav>
        <Link href={site.whatsapp} className="site-cta h-10 px-5 text-xs"><WhatsAppIcon /> WhatsApp Sekarang</Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr]">
        <div><Link href="/" className="flex items-center gap-3"><span className="brand-logo"><Image src="/assets/logo-zenit.png" alt="Logo PT Zenit Technology Solution" width={701} height={701} /></span><strong className="text-white">Bikin Website Jogja</strong></Link><p className="mt-5 max-w-sm text-sm leading-7">Jasa pembuatan website untuk UMKM, profesional, dan bisnis lokal di Yogyakarta.</p><p className="mt-5 text-sm">Kota Jogja · Sleman · Bantul · Kulon Progo · Gunungkidul</p></div>
        <div><p className="footer-heading text-sm font-bold">Jelajahi</p><div className="mt-5 grid gap-3 text-sm">{navigation.map((item)=><Link key={item.href} href={item.href} className="footer-link">{item.label}</Link>)}</div></div>
        <div><p className="footer-heading text-sm font-bold">Informasi</p><div className="mt-5 grid gap-3 text-sm"><Link href="/portofolio" className="footer-link">Portofolio</Link><Link href="/faq" className="footer-link">FAQ</Link><Link href="/kebijakan-privasi" className="footer-link">Kebijakan Privasi</Link><Link href="/syarat-ketentuan" className="footer-link">Syarat & Ketentuan</Link></div></div>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Bikin Website Jogja.</p><p>Bagian dari <Link href="https://codeverta.com" className="footer-link font-semibold" target="_blank" rel="noreferrer">PT Zenit Technology Solution</Link></p></div></div>
    </footer>
  );
}

export function Button({href,label,variant="outline"}:{href:string;label:string;variant?:"solid"|"outline"}) { return <Link href={href} className={variant === "solid" ? "button-primary h-11 px-6 text-sm" : "inline-flex h-11 items-center justify-center rounded-[10px] border border-slate-300 px-6 text-sm font-bold text-slate-800 transition hover:border-violet-500 hover:text-violet-700"}>{label}</Link>; }

export function PageHero({eyebrow,title,description,primaryLabel="Konsultasi via WhatsApp"}:{eyebrow:string;title:string;description:string;primaryLabel?:string}) { return <section className="section-dark"><div className="mx-auto max-w-7xl px-6 py-24 md:py-28"><p className="section-kicker text-violet-300">{eyebrow}</p><h1 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-tight tracking-[-.04em] text-white md:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">{description}</p><div className="mt-9 flex flex-wrap gap-3"><Button href={site.whatsapp} label={primaryLabel} variant="solid"/><Link href="/harga-paket" className="button-ghost h-11 px-6 text-sm">Lihat Paket Harga</Link></div></div></section>; }

export function Section({title,description,children,dark=false}:{title:string;description?:string;children:React.ReactNode;dark?:boolean}) { return <section className={dark?"section-dark":"section-light"}><div className="mx-auto max-w-7xl px-6 py-20 md:py-24"><p className={`section-kicker ${dark?"text-violet-300":""}`}>Layanan</p><div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><h2 className={`text-3xl font-extrabold tracking-[-.035em] md:text-5xl ${dark?"text-white":""}`}>{title}</h2>{description&&<p className={`max-w-lg text-sm leading-7 ${dark?"text-slate-300":"text-slate-500"}`}>{description}</p>}</div><div className="mt-12">{children}</div></div></section>; }

export function Card({title,children,index}:{title:string;children:React.ReactNode;index?:number}) { return <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">{index!==undefined&&<p className="mb-4 text-xs font-bold text-violet-500">{String(index+1).padStart(2,"0")}</p>}<h3 className="text-lg font-extrabold">{title}</h3><div className="mt-3 text-sm leading-7 text-slate-600">{children}</div></article>; }
export function JsonLd({data}:{data:object}) { return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data)}}/>; }

export function LocalServiceJsonLd({name,description,path}:{name:string;description:string;path:string}) {
  const url = `${site.url}${path}`;
  return <>
    <JsonLd data={{
      "@context":"https://schema.org",
      "@type":"Service",
      "@id":`${url}/#service`,
      name,
      description,
      url,
      provider:{"@id":`${site.url}/#business`},
      serviceType:name,
      areaServed:localAreas.map((area)=>({"@type":area==="Kota Yogyakarta"?"City":"AdministrativeArea",name:area})),
      availableChannel:{"@type":"ServiceChannel",serviceUrl:url,servicePhone:site.phone},
    }}/>
    <JsonLd data={{
      "@context":"https://schema.org",
      "@type":"BreadcrumbList",
      itemListElement:[
        {"@type":"ListItem",position:1,name:"Beranda",item:site.url},
        {"@type":"ListItem",position:2,name:"Layanan",item:`${site.url}/#layanan`},
        {"@type":"ListItem",position:3,name,item:url},
      ],
    }}/>
  </>;
}
