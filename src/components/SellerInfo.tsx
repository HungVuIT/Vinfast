import Image from "next/image";
import { CONTACT } from "@/lib/cars";
import Reveal from "@/components/Reveal";

export default function SellerInfo() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image with decorative accents */}
          <Reveal className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-[#003469]/10 sm:h-32 sm:w-32" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[#c8102e]/10 sm:h-32 sm:w-32" />
            <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_70px_rgba(0,27,56,0.18)] ring-1 ring-white/60">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/seller.jpg"
                  alt="Vinfast Kim Sơn Long Bình Biên Hòa Đồng Nai"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={120}>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#003469] ring-1 ring-[#003469]/10">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8102e]" />
              Đại lý ủy quyền chính thức
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Liên hệ ngay để được{" "}
              <span className="text-gradient-brand">tư vấn</span>
            </h2>
            <p className="mt-3 text-base font-semibold text-[#003469]">
              Tư vấn mua xe tận tình (24/7)
            </p>
            <p className="mt-3 leading-relaxed text-slate-600">
              VinFast Kim Sơn Long Bình – Biên Hòa, Đồng Nai là đại lý xe VinFast chính thức thuộc{" "}
              <strong className="text-slate-800">{CONTACT.company}</strong>. Mọi giao dịch, ưu đãi
              chính thức và thủ tục mua bán được thực hiện tại Showroom/Đại lý ủy quyền, cam kết tư
              vấn tận tâm và minh bạch.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#003469] to-[#012a55] px-6 py-3 font-bold text-white shadow-lg shadow-[#003469]/25 transition-transform hover:-translate-y-0.5"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                Gọi ngay: {CONTACT.phone}
              </a>
              <a
                href="/lien-he"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#003469] px-6 py-3 font-bold text-[#003469] transition-colors hover:bg-[#003469] hover:text-white"
              >
                Đặt lịch tư vấn
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
