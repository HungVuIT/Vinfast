"use client";

import { useEffect, useState } from "react";
import { CONTACT } from "@/lib/cars";

interface FabProps {
  href: string;
  label: string;
  bg: string;
  ring: string;
  external?: boolean;
  /** Open in a centered popup window instead of a new tab. */
  popup?: boolean;
  ping?: boolean;
  children: React.ReactNode;
}

function openPopup(url: string) {
  const w = 420;
  const h = 640;
  const left = window.screenX + (window.outerWidth - w) / 2;
  const top = window.screenY + (window.outerHeight - h) / 2;
  window.open(
    url,
    "zalo-chat",
    `popup=yes,width=${w},height=${h},left=${left},top=${top},noopener,noreferrer`,
  );
}

function Fab({ href, label, bg, ring, external, popup, ping, children }: FabProps) {
  return (
    <a
      href={href}
      title={label}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={
        popup
          ? (e) => {
              e.preventDefault();
              openPopup(href);
            }
          : undefined
      }
      className={`group relative flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full text-white shadow-xl transition-transform hover:-translate-y-0.5 ${bg} ${ring}`}
    >
      {ping && (
        <span className={`absolute inset-0 animate-ping rounded-full opacity-40 ${bg}`} />
      )}
      <span className="relative flex items-center justify-center">{children}</span>
      {/* Hover label — sits left of the button on mobile (buttons on the right),
          flips to the right of the button on desktop (buttons on the left). */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 sm:block lg:left-full lg:right-auto lg:ml-3 lg:mr-0">
        {label}
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-900 lg:left-auto lg:right-full lg:border-l-transparent lg:border-r-slate-900" />
      </span>
    </a>
  );
}

export default function FloatingCall() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Contact stack — right side on mobile/tablet, left side on desktop (lg+) */}
      <div className="fixed bottom-5 right-4 z-[900] flex flex-col gap-3 lg:left-5 lg:right-auto">
        {/* Call */}
        <Fab
          href={`tel:${CONTACT.phoneRaw}`}
          label={`Gọi ngay: ${CONTACT.phone}`}
          bg="bg-gradient-to-br from-[#003469] to-[#012a55]"
          ring="shadow-[#003469]/30"
          ping
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
          </svg>
        </Fab>

        {/* Messenger (chat) */}
        <Fab
          href={CONTACT.messenger}
          label="Chat Messenger"
          bg="bg-gradient-to-br from-[#00B2FF] to-[#006AFF]"
          ring="shadow-[#006AFF]/30"
          external
          ping
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.19.16.14.26.35.27.57l.05 1.78a.8.8 0 001.12.71l1.99-.88c.17-.07.36-.09.54-.04 .91.25 1.88.38 2.79.38 5.64 0 10-4.13 10-9.7C22 6.13 17.64 2 12 2zm6 7.46l-2.94 4.66c-.47.74-1.47.93-2.18.4l-2.34-1.75a.6.6 0 00-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63l2.94-4.66c.47-.74 1.47-.93 2.18-.4l2.34 1.75a.6.6 0 00.72 0l3.16-2.4c.42-.32.97.18.69.63z" />
          </svg>
        </Fab>

        {/* Zalo */}
        <Fab
          href={`https://zalo.me/${CONTACT.phoneRaw}`}
          label={`Chat Zalo: ${CONTACT.phone}`}
          bg="bg-[#0068ff]"
          ring="shadow-[#0068ff]/30"
          external
          popup
          ping
        >
          <span className="text-[13px] font-extrabold tracking-tight">Zalo</span>
        </Fab>

        {/* Facebook page */}
        <Fab
          href={CONTACT.facebook}
          label="Fanpage Facebook"
          bg="bg-[#1877f2]"
          ring="shadow-[#1877f2]/30"
          external
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
          </svg>
        </Fab>
      </div>

      {/* Back to top — opposite side of the contact stack */}
      <button
        aria-label="Lên đầu trang"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 left-4 z-[900] flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#003469] shadow-xl ring-1 ring-slate-200 transition-all duration-300 lg:left-auto lg:right-5 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
