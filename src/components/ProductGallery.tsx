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
      <div className="relative flex items-center">
        {images.length > 1 && (
          <button
            aria-label="Ảnh trước"
            onClick={() => setActive((i) => (i - 1 + images.length) % images.length)}
            className="absolute left-1 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#003469] shadow"
          >
            ‹
          </button>
        )}

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#f8f9fa]">
          <Image
            src={images[active]}
            alt={alt}
            fill
            priority
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 600px"
          />
        </div>

        {images.length > 1 && (
          <button
            aria-label="Ảnh sau"
            onClick={() => setActive((i) => (i + 1) % images.length)}
            className="absolute right-1 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#003469] shadow"
          >
            ›
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className={`relative h-16 w-20 flex-shrink-0 overflow-hidden rounded border-2 bg-[#f8f9fa] ${
                i === active ? "border-[#003469]" : "border-transparent"
              }`}
            >
              <Image src={img} alt={`${alt} ${i + 1}`} fill className="object-contain" sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
