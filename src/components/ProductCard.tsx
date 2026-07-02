import Image from "next/image";
import type { Car } from "@/types/car";

export default function ProductCard({ car }: { car: Car }) {
  return (
    <a
      href={`/san-pham/${car.slug}`}
      title={car.name}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#003469]/20 hover:shadow-[0_24px_60px_rgba(0,27,56,0.16)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
        <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-[#003469]/90 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur">
          <svg className="h-3 w-3 text-[#f0c808]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
          </svg>
          Xe điện
        </span>
        <Image
          src={car.image}
          alt={car.name}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-[#003469]">
          {car.name}
        </h3>
        <div className="mt-1 flex items-baseline gap-1.5">
          <span className="text-xs font-medium text-slate-400">Giá từ</span>
          <span className="text-xl font-extrabold text-[#c8102e]">
            {car.price.replace(" VNĐ", "")}
          </span>
          <span className="text-xs font-medium text-slate-400">đ</span>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-sm font-semibold text-[#003469]">Xem chi tiết</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-[#003469] transition-all duration-300 group-hover:bg-[#003469] group-hover:text-white">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}
