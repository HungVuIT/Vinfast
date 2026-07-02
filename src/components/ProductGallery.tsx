"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-b from-slate-50 to-slate-100 shadow-sm">
        <div className="relative aspect-[4/3] w-full">
          <Image
            key={images[active]}
            src={images[active]}
            alt={alt}
            fill
            priority
            className="animate-fade-up object-contain"
            sizes="(max-width: 1024px) 100vw, 640px"
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              aria-label="Ảnh trước"
              onClick={() => setActive((i) => (i - 1 + images.length) % images.length)}
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#003469] shadow-md backdrop-blur transition-all hover:bg-white sm:opacity-0 sm:group-hover:opacity-100"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              aria-label="Ảnh sau"
              onClick={() => setActive((i) => (i + 1) % images.length)}
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#003469] shadow-md backdrop-blur transition-all hover:bg-white sm:opacity-0 sm:group-hover:opacity-100"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-black/50 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
              {active + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="no-scrollbar mt-3 flex gap-2.5 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 bg-slate-50 transition-all ${
                i === active ? "border-[#003469] ring-2 ring-[#003469]/20" : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={img} alt={`${alt} ${i + 1}`} fill className="object-contain" sizes="96px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
