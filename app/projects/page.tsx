import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import projectData from "../../projects.json";
import { createMetadata } from "../seo";

export const metadata: Metadata = createMetadata({
  title: "Project Website & Sistem Bisnis Jogja",
  description:
    "Lihat project website, POS, ERP, aplikasi, dan sistem manajemen untuk UMKM serta perusahaan di Jogja dan seluruh Daerah Istimewa Yogyakarta.",
  path: "/projects",
  keywords: ["portofolio website Jogja", "aplikasi bisnis Jogja", "software house Jogja"],
});

export default function ProjectsPage() {
  return (
    <>
      <section className="projects-hero text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:py-28">
          <div><p className="section-kicker text-cyan-300">23 project · PT Zenit Technology Solution</p><h1 className="mt-5 max-w-4xl text-balance text-5xl font-extrabold leading-[1.05] tracking-[-.045em] md:text-7xl">Sistem digital yang tumbuh bersama bisnis Jogja.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">Website, POS, ERP, dan aplikasi operasional yang dapat disesuaikan untuk UMKM hingga perusahaan di Yogyakarta.</p><Link href="#daftar-project" className="mt-9 inline-flex font-bold text-cyan-300">Jelajahi project ↓</Link></div>
          <div className="projects-hero-stack">
            {projectData.projects.slice(0,3).map(({product},index)=><Link href={`/projects/${product.id}`} key={product.id} className={`projects-hero-card card-${index+1}`}><div className="relative h-28 w-36 shrink-0 overflow-hidden rounded-xl"><Image src={product.image} alt={product.name} fill sizes="144px" /></div><div><small>{product.category}</small><strong>{product.name}</strong><span>Lihat detail →</span></div></Link>)}
          </div>
        </div>
      </section>

      <section className="section-light" id="daftar-project">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div><p className="section-kicker">Daftar project</p><h2 className="mt-3 text-3xl font-extrabold tracking-[-.035em] md:text-5xl">Pilih solusi sesuai bisnis Anda</h2></div>
            <p className="max-w-md text-sm leading-7 text-slate-600">Seluruh project dapat dikembangkan dan disesuaikan dengan proses bisnis lokal Anda di Jogja.</p>
          </div>
          <div className="projects-grid mt-12">
            {projectData.projects.map(({ product }) => (
              <Link href={`/projects/${product.id}`} key={product.id} className="catalog-card">
                <div className="catalog-image"><Image src={product.image} alt={`${product.name} untuk bisnis Jogja`} fill sizes="(max-width: 640px) 92vw, (max-width: 900px) 46vw, 30vw" /></div>
                <span className="catalog-card-tag">{product.category}</span>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <span className="catalog-link">Lihat detail project →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
