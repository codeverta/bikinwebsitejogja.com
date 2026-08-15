"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "./site-data";
import { WhatsAppIcon } from "./icons";

const slides = [
  { eyebrow:"Jasa Website Lokal Yogyakarta", title:"Website yang bikin usaha ", accent:"makin kelihatan banyak orang.", description:"Tampil profesional, mudah ditemukan di Google, dan arahkan calon pelanggan langsung ke WhatsApp.", image:"/assets/property-listing/preview.png", label:"Website Properti & Listing" },
];

export function HomeHeroCarousel() {
  const [active,setActive]=useState(0);
  useEffect(()=>{const timer=window.setInterval(()=>setActive(current=>(current+1)%slides.length),5200);return()=>window.clearInterval(timer)},[]);
  const slide=slides[active];
  return <div className="hero-carousel" aria-live="polite">
    <div key={`copy-${active}`} className="hero-carousel-copy"><p className="text-sm font-semibold tracking-[0.22em] text-violet-200 uppercase">{slide.eyebrow}</p><h1 className="hero-title mx-auto mt-5 max-w-5xl text-balance text-center text-5xl font-extrabold leading-[1.04] tracking-[-0.045em] text-white md:text-7xl lg:text-[82px]">{slide.title} <span className="gradient-text">{slide.accent}</span></h1><p className="mx-auto mt-7 max-w-2xl text-balance text-center text-base leading-8 text-slate-300 md:text-xl md:leading-9">{slide.description}</p></div>
    <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:flex-row"><Link href={site.whatsapp} className="button-primary h-14 px-8 text-base"><WhatsAppIcon /> WhatsApp Sekarang</Link><Link href="/projects" className="button-ghost h-14 px-8 text-base">Lihat Hasil Kami</Link></div>
  </div>;
}
