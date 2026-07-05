"use client";

import { useEffect } from "react";

export default function Modal({
  open,
  onClose,
  title,
  subtitle,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1200] flex items-start justify-center overflow-y-auto p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="animate-fade-up relative z-10 my-8 w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_rgba(0,27,56,0.35)] sm:my-0">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#003469] to-[#012a55] px-6 py-5 text-white">
          <h2 className="pr-10 text-lg font-extrabold uppercase leading-tight sm:text-xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 pr-10 text-sm text-white/75">{subtitle}</p>
          )}
          <button
            aria-label="Đóng"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6">{children}</div>
      </div>
    </div>
  );
}
