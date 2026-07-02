"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { BANNERS } from "@/lib/cars";

const AUTOPLAY = 5500;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + BANNERS.length) % BANNERS.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % BANNERS.length), AUTOPLAY);
    return () => clearInterval(id);
  }, [paused, index]);

  return (
    <section
      className="group relative h-[min(58vw,660px)] min-h-[440px] w-full overflow-hidden bg-[#001b38]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {BANNERS.map((banner, i) => (
        <a
          key={banner.image}
          href={banner.href}
          title={banner.alt}
          className={`absolute inset-0 transition-opacity duration-[900ms] ease-out ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={banner.image}
            alt={banner.alt}
            fill
            priority={i === 0}
            className={`object-cover ${i === index ? "animate-kenburns" : ""}`}
            sizes="100vw"
          />
        </a>
      ))}

      {/* Cinematic gradient vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#001b38]/60 via-transparent to-[#001b38]/25" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#001b38]/70 to-transparent" />

      {/* Arrows */}
      <button
        aria-label="Ảnh trước"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all hover:bg-white/30 group-hover:opacity-100 sm:left-6"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        aria-label="Ảnh sau"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all hover:bg-white/30 group-hover:opacity-100 sm:right-6"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress dots */}
      <div className="absolute bottom-16 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5 sm:bottom-20">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 overflow-hidden rounded-full bg-white/40 transition-all duration-500 ${
              i === index ? "w-10" : "w-2.5 hover:w-4"
            }`}
          >
            {i === index && (
              <span
                key={`${index}-${paused}`}
                className="block h-full w-full origin-left rounded-full bg-white"
                style={{
                  animation: paused ? "none" : `shimmer ${AUTOPLAY}ms linear forwards`,
                  transform: "translateX(-100%)",
                }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
