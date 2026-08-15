"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const featuredProjects = [
  { title: "Sistem Gym", description: "Membership, presensi, POS, dan kelas.", href: "/projects/gym-management-system", icon: "GY" },
  { title: "Sistem Laundry", description: "Order, outlet, tracking, dan notifikasi.", href: "/projects/laundry-management-system", icon: "LD" },
  { title: "POS Coffee Shop", description: "Kasir, stok, pelanggan, dan laporan.", href: "/projects/coffee-shop-pos-management-system", icon: "CS" },
  { title: "Sistem Kontraktor", description: "Progress, BoQ, anggaran, dan vendor.", href: "/projects/contractor-project-management-erp", icon: "KT" },
  { title: "Website Properti", description: "Listing, agen, komisi, dan portal.", href: "/projects/property-listing-management-system", icon: "PR" },
  { title: "Sistem Catering", description: "Menu, produksi, bahan, dan pengiriman.", href: "/projects/catering-kitchen-production-system", icon: "CT" },
];

export function MegaMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

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
    };
  }, []);

  return (
    <div ref={rootRef} className="mega-menu-root" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" className="mega-trigger" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        Project <span className={open ? "rotate" : ""}>⌄</span>
      </button>
      <div className={`mega-panel ${open ? "open" : ""}`}>
        <div className="mega-main">
          <div className="mega-heading"><div><small>SOLUSI SIAP DIKEMBANGKAN</small><strong>Project untuk bisnis lokal Jogja</strong></div><Link href="/projects" onClick={() => setOpen(false)}>Lihat semua →</Link></div>
          <div className="mega-links">
            {featuredProjects.map((project) => (
              <Link href={project.href} key={project.href} onClick={() => setOpen(false)}>
                <span>{project.icon}</span><div><strong>{project.title}</strong><small>{project.description}</small></div>
              </Link>
            ))}
          </div>
        </div>
        <aside className="mega-highlight">
          <p>PROJECT PILIHAN</p>
          <div className="mega-highlight-visual"><span>SEO</span><span>WEB</span><span>POS</span></div>
          <h3>Belum tahu solusi yang tepat?</h3>
          <p className="mega-highlight-copy">Ceritakan alur bisnis Anda. Kami bantu petakan website atau sistem yang paling masuk akal.</p>
          <Link href="/hubungi-kami" onClick={() => setOpen(false)}>Diskusikan kebutuhan →</Link>
        </aside>
      </div>
    </div>
  );
}
