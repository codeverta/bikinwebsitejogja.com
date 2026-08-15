"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type ShowcaseSlide = {
  image: string;
  title: string;
  label: string;
};

export function PageHeroCarousel({
  slides,
  tone,
}: {
  slides: ShowcaseSlide[];
  tone: "blog" | "pricing" | "projects";
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      4600,
    );
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const previous = () => setActive((active - 1 + slides.length) % slides.length);
  const next = () => setActive((active + 1) % slides.length);
  const slide = slides[active];

  return (
    <div className={`page-showcase page-showcase-${tone}`}>
      <div key={`${tone}-${active}`} className="page-showcase-image">
        <Image src={slide.image} alt={slide.title} fill sizes="(max-width: 1024px) 92vw, 600px" priority={active === 0} />
        <div className="page-showcase-overlay" />
        <div className="page-showcase-copy"><small>{slide.label}</small><strong>{slide.title}</strong></div>
      </div>
      <button type="button" className="page-showcase-arrow left" onClick={previous} aria-label="Gambar sebelumnya">←</button>
      <button type="button" className="page-showcase-arrow right" onClick={next} aria-label="Gambar berikutnya">→</button>
      <div className="page-showcase-dots">
        {slides.map((item, index) => <button key={item.image} type="button" className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Tampilkan ${item.title}`} />)}
      </div>
    </div>
  );
}
