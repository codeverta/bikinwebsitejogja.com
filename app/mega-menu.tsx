"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const featuredProjects = [
  {
    title: "Sistem Gym",
    description: "Membership, presensi, POS, dan kelas.",
    href: "/projects/gym-management-system",
    image: "/assets/products/gym-management.png",
  },
  {
    title: "Sistem Laundry",
    description: "Order, outlet, tracking, dan notifikasi.",
    href: "/projects/laundry-management-system",
    image: "/assets/laundry-management/preview.png",
  },
  {
    title: "POS Coffee Shop",
    description: "Kasir, stok, pelanggan, dan laporan.",
    href: "/projects/coffee-shop-pos-management-system",
    image: "/assets/coffeeshop/preview.png",
  },
  {
    title: "Sistem Kontraktor",
    description: "Progress, BoQ, anggaran, dan vendor.",
    href: "/projects/contractor-project-management-erp",
    image: "/assets/kontraktor/preview.png",
  },
  {
    title: "Website Properti",
    description: "Listing, agen, komisi, dan portal.",
    href: "/projects/property-listing-management-system",
    image: "/assets/property-listing/preview.png",
  },
  {
    title: "Sistem Catering",
    description: "Menu, produksi, bahan, dan pengiriman.",
    href: "/projects/catering-kitchen-production-system",
    image: "/assets/catering/preview.png",
  },
];

export function MegaMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<number | null>(null);

  const keepOpen = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 450);
  };

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    const outside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("mousedown", outside);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("mousedown", outside);
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <div ref={rootRef} className="mega-menu-root" onMouseEnter={keepOpen} onMouseLeave={scheduleClose}>
      <button type="button" className="mega-trigger" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        Project <span className={`mega-chevron ${open ? "up" : ""}`} aria-hidden="true" />
      </button>
      <div className={`mega-panel ${open ? "open" : ""}`} onMouseEnter={keepOpen} onMouseLeave={scheduleClose}>
        <div className="mega-main">
          <div className="mega-heading">
            <div>
              <small>SOLUSI SIAP DIKEMBANGKAN</small>
              <strong>Project untuk bisnis lokal Jogja</strong>
            </div>
            <Link href="/projects" onClick={() => setOpen(false)}>
              Lihat semua →
            </Link>
          </div>
          <div className="mega-links">
            {featuredProjects.map((project) => (
              <Link href={project.href} key={project.href} onClick={() => setOpen(false)}>
                <div className="mega-thumb">
                  <Image src={project.image} alt={project.title} width={120} height={90} className="mega-thumb-img" />
                </div>
                <div>
                  <strong>{project.title}</strong>
                  <small>{project.description}</small>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <aside className="mega-highlight">
          <p>PROJECT PILIHAN</p>
          <div className="mega-highlight-visual">
            <span>SEO</span>
            <span>WEB</span>
            <span>POS</span>
          </div>
          <h3>Belum tahu solusi yang tepat?</h3>
          <p className="mega-highlight-copy">Ceritakan alur bisnis Anda. Kami bantu petakan website atau sistem yang paling masuk akal.</p>
          <Link href="/hubungi-kami" onClick={() => setOpen(false)}>
            Diskusikan kebutuhan →
          </Link>
        </aside>
      </div>
    </div>
  );
}
