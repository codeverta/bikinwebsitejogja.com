import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projectData from "../../../projects.json";
import { site } from "../../site-data";
import { createMetadata } from "../../seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectData.projects.map(({ product }) => ({ slug: product.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectData.projects.find(({ product }) => product.id === slug);
  if (!project) return {};
  return createMetadata({
    title: `${project.product.name} untuk Bisnis Jogja`,
    description: `${project.product.description} Solusi dapat disesuaikan untuk bisnis di Yogyakarta.`,
    path: `/projects/${slug}`,
    image: project.product.image,
    keywords: [
      `${project.product.name} Jogja`,
      `${project.product.category} Yogyakarta`,
      "aplikasi bisnis Jogja",
    ],
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projectData.projects.find(({ product }) => product.id === slug);
  if (!project) notFound();

  const { product, overview, features, workflow } = project;
  return (
    <>
      <section className="projects-hero text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_.9fr] lg:items-center lg:py-28">
          <div>
            <Link href="/projects" className="text-sm font-bold text-violet-300">← Semua project</Link>
            <p className="section-kicker mt-10 text-violet-300">{product.category} · Solusi Bisnis Jogja</p>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] tracking-[-.045em] md:text-6xl">{product.name}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">{product.fullDescription}</p>
            <div className="mt-9 flex flex-wrap gap-3"><Link href={site.whatsapp} className="button-primary h-14 px-7">Konsultasi Project <span>→</span></Link><Link href="/harga-paket" className="button-ghost h-14 px-7">Lihat Estimasi Harga</Link></div>
          </div>
          <div className="project-detail-cover"><Image src={product.image} alt={`${product.name} untuk bisnis di Jogja`} width={1200} height={800} sizes="(max-width: 1024px) 92vw, 44vw" priority /></div>
        </div>
      </section>

      <section className="section-light">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="section-kicker">Detail project</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-.035em] md:text-5xl">Siap disesuaikan untuk operasional lokal.</h2>
              <p className="mt-5 text-sm leading-7 text-slate-600">Implementasi dapat menyesuaikan skala usaha, alur kerja, cabang, dan target pelanggan di Kota Jogja, Sleman, Bantul, Kulon Progo, maupun Gunungkidul.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="project-fact"><small>Status</small><strong>{product.status}</strong></div>
              <div className="project-fact"><small>Estimasi pengembangan</small><strong>{product.duration}</strong></div>
              <div className="project-fact"><small>Teknologi</small><strong>{product.technologies.join(", ")}</strong></div>
              <div className="project-fact"><small>Pembaruan terakhir</small><strong>{product.lastUpdated}</strong></div>
            </div>
          </div>

          <div className="mt-20">
            <p className="section-kicker">Fitur unggulan</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-[-.035em] md:text-5xl">Yang tersedia di dalam sistem</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => <article className="detail-feature" key={feature.title}><h3>{feature.title}</h3><p>{feature.description}</p></article>)}
            </div>
          </div>

          {workflow?.steps?.length ? (
            <div className="mt-20 rounded-[26px] bg-[#110b31] p-7 text-white md:p-12">
              <p className="section-kicker text-violet-300">Alur penggunaan</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-.035em] md:text-5xl">{workflow.title}</h2>
              <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{workflow.steps.map((step) => <article key={step.step} className="rounded-2xl border border-white/10 bg-white/5 p-5"><span className="text-xs font-bold text-violet-300">0{step.step}</span><h3 className="mt-5 font-extrabold">{step.title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p></article>)}</div>
            </div>
          ) : null}

          {overview?.projectDescription?.paragraphs?.length ? (
            <div className="mx-auto mt-20 max-w-4xl"><p className="section-kicker">Tujuan bisnis</p><h2 className="mt-4 text-3xl font-extrabold tracking-[-.035em] md:text-5xl">{overview.projectDescription.title}</h2><div className="mt-7 grid gap-5">{overview.projectDescription.paragraphs.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-slate-600">{paragraph}</p>)}</div></div>
          ) : null}
        </div>
      </section>
    </>
  );
}
