"use client";

import { useState } from "react";
import Image from "next/image";
import { CARS, CONTACT } from "@/lib/cars";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Bảng giá xe", href: "/bang-gia-xe" },
  { label: "Khuyến mãi", href: "/khuyen-mai" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[1000] bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)]">
      <div className="mx-auto max-w-[1140px] px-4">
        <nav className="flex items-center justify-between py-2">
          {/* Logo */}
          <a href="/" title="Vinfast Kim Sơn Long Bình Đồng Nai" className="mr-3 flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Vinfast Kim Sơn Long Bình Đồng Nai"
              width={180}
              height={48}
              priority
              className="h-11 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            <li>
              <a className="block px-3 py-2 text-[15px] font-medium text-[#333] hover:text-[#003469]" href="/">
                Home
              </a>
            </li>
            <li className="group relative">
              <a
                className="flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-[#333] hover:text-[#003469]"
                href="/san-pham"
              >
                <span>Sản phẩm</span>
                <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                </svg>
              </a>
              {/* Mega dropdown */}
              <div className="invisible absolute left-0 top-full z-50 grid w-[720px] grid-cols-4 gap-2 rounded-b-md border border-gray-100 bg-white p-4 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                {CARS.map((car) => (
                  <a
                    key={car.slug}
                    href={`/san-pham/${car.slug}`}
                    title={car.name}
                    className="group/item block rounded p-2 hover:bg-gray-50"
                  >
                    <div className="relative aspect-[220/129] w-full overflow-hidden rounded">
                      <Image src={car.image} alt={car.name} fill className="object-cover" sizes="180px" />
                    </div>
                    <h3 className="mt-1 text-center text-[13px] font-medium text-[#333] group-hover/item:text-[#003469]">
                      {car.name}
                    </h3>
                  </a>
                ))}
              </div>
            </li>
            {NAV_LINKS.slice(1).map((link) => (
              <li key={link.href}>
                <a
                  className="block px-3 py-2 text-[15px] font-medium text-[#333] hover:text-[#003469]"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hotline pill (desktop) */}
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            title="Gọi ngay"
            className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-[#003469] px-5 py-2.5 text-[15px] font-bold text-white hover:text-[#f0c808] lg:flex"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
            </svg>
            {CONTACT.salesName}: {CONTACT.phone}
          </a>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle navigation"
            className="flex h-10 w-10 items-center justify-center rounded text-[#003469] lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <ul className="mx-auto max-w-[1140px] px-4 py-2">
            <li>
              <a className="block border-b border-gray-100 py-3 font-medium text-[#333]" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="block border-b border-gray-100 py-3 font-medium text-[#333]" href="/san-pham">
                Sản phẩm
              </a>
            </li>
            {NAV_LINKS.slice(1).map((link) => (
              <li key={link.href}>
                <a className="block border-b border-gray-100 py-3 font-medium text-[#333]" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#003469] px-5 py-2.5 font-bold text-white"
              >
                {CONTACT.salesName}: {CONTACT.phone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
