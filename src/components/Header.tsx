"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CARS, CONTACT, getPriceInfo } from "@/lib/cars";

const NAV_LINKS = [
  { label: "Trang chủ", href: "/" },
  { label: "Bảng giá xe", href: "/bang-gia-xe" },
  { label: "Khuyến mãi", href: "/khuyen-mai" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-[#001b38] text-white lg:block">
        <div className="container-page flex items-center justify-between py-2 text-[13px]">
          <span className="inline-flex items-center gap-2 text-white/80">
            <svg className="h-3.5 w-3.5 text-[#f0c808]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
            </svg>
            {CONTACT.address}
          </span>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-white/80">
              <svg className="h-3.5 w-3.5 text-[#f0c808]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8v5l3 2 .8-1.3-2.3-1.5V8H12zM12 2a10 10 0 100 20 10 10 0 000-20z" />
              </svg>
              {CONTACT.hours}
            </span>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#f0c808]"
            >
              <svg className="h-3.5 w-3.5 text-[#f0c808]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-[1000] border-b transition-all duration-300 ${
          scrolled
            ? "border-slate-200/80 bg-white/85 shadow-[0_8px_30px_rgba(0,27,56,0.08)] backdrop-blur-xl"
            : "border-transparent bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="container-page">
          <nav
            className={`relative flex items-center justify-between transition-all duration-300 ${
              scrolled ? "py-2" : "py-3"
            }`}
          >
            {/* Logo — căn giữa trên mobile, căn trái từ lg */}
            <a
              href="/"
              title="Vinfast Kim Sơn Long Bình Đồng Nai"
              className="flex-shrink-0 max-lg:absolute max-lg:left-1/2 max-lg:top-1/2 max-lg:-translate-x-1/2 max-lg:-translate-y-1/2"
            >
              <Image
                src="/images/logo.png"
                alt="Vinfast Kim Sơn Long Bình Đồng Nai"
                width={190}
                height={50}
                priority
                className={`w-auto transition-all duration-300 ${scrolled ? "h-9" : "h-11"}`}
              />
            </a>

            {/* Desktop nav */}
            <ul className="hidden items-center gap-1 lg:flex">
              <NavItem href="/">Trang chủ</NavItem>

              <li className="group relative">
                <a
                  href="/san-pham"
                  className="relative flex items-center gap-1 px-4 py-2 text-[15px] font-semibold text-slate-700 transition-colors hover:text-[#003469]"
                >
                  <span>Sản phẩm</span>
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
                  </svg>
                </a>
                {/* Mega dropdown */}
                <div className="invisible absolute left-1/2 top-full z-50 w-[760px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="grid grid-cols-4 gap-2 rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-[0_20px_60px_rgba(0,27,56,0.18)] backdrop-blur-xl">
                    {CARS.map((car) => (
                      <a
                        key={car.slug}
                        href={`/san-pham/${car.slug}`}
                        title={car.name}
                        className="group/item rounded-xl p-2 transition-colors hover:bg-brand-50"
                      >
                        <div className="relative aspect-[220/129] w-full overflow-hidden rounded-lg bg-slate-50">
                          <Image
                            src={car.image}
                            alt={car.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover/item:scale-105"
                            sizes="180px"
                          />
                        </div>
                        <h3 className="mt-1.5 text-center text-[13px] font-semibold text-slate-700 group-hover/item:text-[#003469]">
                          {car.name}
                        </h3>
                        <p className="flex items-center justify-center gap-1.5 text-center text-[12px] font-bold text-[#c8102e]">
                          {getPriceInfo(car).sale}
                          <span className="text-[10px] font-normal text-slate-400 line-through">
                            {getPriceInfo(car).original}
                          </span>
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              {NAV_LINKS.slice(1).map((link) => (
                <NavItem key={link.href} href={link.href}>
                  {link.label}
                </NavItem>
              ))}
            </ul>

            {/* Hotline pill (desktop) */}
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              title="Gọi ngay"
              className="group hidden items-center gap-2.5 rounded-full bg-gradient-to-r from-[#003469] to-[#012a55] px-5 py-2.5 text-[15px] font-bold text-white shadow-lg shadow-[#003469]/25 transition-transform hover:-translate-y-0.5 lg:flex"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                <svg className="h-4 w-4 animate-floaty" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-medium uppercase text-white/70">Hotline</span>
                <span>{CONTACT.phone}</span>
              </span>
            </a>

            {/* Mobile toggle */}
            <button
              aria-label="Mở menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl text-[#003469] ring-1 ring-slate-200 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[1100] lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <Image src="/images/logo.png" alt="VinFast" width={150} height={40} className="h-9 w-auto" />
            <button
              aria-label="Đóng menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 ring-1 ring-slate-200"
              onClick={() => setOpen(false)}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 py-3">
            <a
              href="/"
              className="block rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-brand-50 hover:text-[#003469]"
              onClick={() => setOpen(false)}
            >
              Trang chủ
            </a>

            <button
              className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-brand-50"
              onClick={() => setProductsOpen((v) => !v)}
            >
              Sản phẩm
              <svg
                className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" />
              </svg>
            </button>
            {productsOpen && (
              <div className="grid grid-cols-2 gap-2 px-2 pb-2 pt-1">
                {CARS.map((car) => (
                  <a
                    key={car.slug}
                    href={`/san-pham/${car.slug}`}
                    className="rounded-lg border border-slate-100 p-2 hover:border-[#003469]/30"
                    onClick={() => setOpen(false)}
                  >
                    <div className="relative aspect-[220/129] w-full overflow-hidden rounded bg-slate-50">
                      <Image src={car.image} alt={car.name} fill className="object-cover" sizes="140px" />
                    </div>
                    <p className="mt-1 text-center text-xs font-semibold text-slate-700">{car.name}</p>
                    <p className="text-center text-[11px] font-bold text-[#c8102e]">
                      {getPriceInfo(car).sale}
                    </p>
                    <p className="text-center text-[10px] text-slate-400 line-through">
                      {getPriceInfo(car).original}
                    </p>
                  </a>
                ))}
              </div>
            )}

            {NAV_LINKS.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-brand-50 hover:text-[#003469]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="border-t border-slate-100 p-4">
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#003469] to-[#012a55] px-5 py-3 font-bold text-white shadow-lg"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              {CONTACT.salesName}: {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="group relative px-4 py-2 text-[15px] font-semibold text-slate-700 transition-colors hover:text-[#003469]"
      >
        {children}
        <span className="absolute bottom-1 left-4 h-0.5 w-0 rounded-full bg-gradient-to-r from-[#003469] to-[#2f6bb0] transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
      </a>
    </li>
  );
}
