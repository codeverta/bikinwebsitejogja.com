"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "./site-data";

const slides = [
  { eyebrow:"Jasa Website Lokal Yogyakarta", title:"Website yang bikin bisnis Jogja", accent:"makin kelihatan.", description:"Tampil profesional, mudah ditemukan di Google, dan arahkan calon pelanggan langsung ke WhatsApp.", image:"/assets/property-listing/preview.png", label:"Website Properti & Listing" },
  { eyebrow:"Dari UMKM untuk pasar lokal", title:"Ubah pencarian lokal jadi", accent:"pelanggan nyata.", description:"Struktur halaman, copywriting, dan Local SEO disiapkan untuk menjangkau Kota Jogja dan sekitarnya.", image:"/assets/e-commerce/landing-page.png", label:"E-commerce & Toko Online" },
  { eyebrow:"Website & sistem bisnis", title:"Lebih dari desain yang", accent:"sekadar bagus.", description:"Bangun website, POS, katalog, hingga sistem operasional yang sesuai dengan cara bisnis Anda bekerja.", image:"/assets/erp/homepage.png", label:"ERP & Sistem Operasional" },
];

export function HomeHeroCarousel() {
  const [active,setActive]=useState(0);
  useEffect(()=>{const timer=window.setInterval(()=>setActive(current=>(current+1)%slides.length),5200);return()=>window.clearInterval(timer)},[]);
  const slide=slides[active];
  const previous=()=>setActive((active-1+slides.length)%slides.length);
  const next=()=>setActive((active+1)%slides.length);
  return <div className="hero-carousel" aria-live="polite">
    <div key={`copy-${active}`} className="hero-carousel-copy"><p className="text-sm font-semibold tracking-[0.22em] text-violet-200 uppercase">{slide.eyebrow}</p><h1 className="hero-title mx-auto mt-5 max-w-5xl text-balance text-center text-5xl font-extrabold leading-[1.04] tracking-[-0.045em] text-white md:text-7xl lg:text-[82px]">{slide.title} <span className="gradient-text">{slide.accent}</span></h1><p className="mx-auto mt-7 max-w-2xl text-balance text-center text-base leading-8 text-slate-300 md:text-xl md:leading-9">{slide.description}</p></div>
    <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:flex-row"><Link href={site.whatsapp} className="button-primary h-14 px-8 text-base">Konsultasi Gratis <span>→</span></Link><Link href="/projects" className="button-ghost h-14 px-8 text-base">Lihat Hasil Kami</Link></div>
    <div className="trust-chip mx-auto mt-6 w-fit"><div className="flex -space-x-2">{["R","N","S","W"].map((letter,index)=><span key={letter} className={`trust-avatar avatar-${index+1}`}>{letter}</span>)}</div><div className="text-left"><p className="text-amber-300">★★★★★</p><p className="text-xs text-slate-300">Dipercaya 100+ bisnis</p></div></div>
    <div className="hero-image-carousel"><div className="hero-image-topbar"><div className="flex gap-1.5"><i/><i/><i/></div><span>{slide.label}</span><b>Live project</b></div><div key={`image-${active}`} className="hero-slide-image"><Image src={slide.image} alt={slide.label} fill sizes="(max-width: 768px) 94vw, 970px" priority={active===0}/><div className="hero-image-shade"/><span className="hero-image-label">{slide.label}</span></div><button type="button" className="hero-arrow hero-arrow-left" onClick={previous} aria-label="Slide sebelumnya">←</button><button type="button" className="hero-arrow hero-arrow-right" onClick={next} aria-label="Slide berikutnya">→</button></div>
    <div className="hero-carousel-controls">{slides.map((item,index)=><button key={item.label} type="button" className={index===active?"active":""} onClick={()=>setActive(index)} aria-label={`Tampilkan ${item.label}`}/>)}</div>
  </div>;
}
