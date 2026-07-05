import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import Breadcrumb from "@/components/Breadcrumb";
import { CARS, CONTACT, getPriceInfo } from "@/lib/cars";

export const metadata: Metadata = {
  title: "Bảng giá xe | Vinfast Kim Sơn Long Bình Đồng Nai",
  description:
    "Bảng giá xe VinFast mới nhất tại Đồng Nai: VF3, VF5, VF6, VF7, VF8, VF9 và các dòng xe máy điện.",
};

export default function PriceListPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Bảng giá xe" }]} />

        <section className="py-12 sm:py-16">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Bảng giá xe <span className="text-gradient-brand">VinFast</span>
              </h1>
              <p className="mt-2 text-slate-500">
                Giá niêm yết mới nhất năm 2026. Đang áp dụng{" "}
                <span className="font-semibold text-[#c8102e]">ưu đãi giảm 6% (VF7, VF8 giảm 10%)</span>.
                Liên hệ hotline để nhận báo giá lăn bánh & ưu đãi.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#003469] to-[#012a55] text-left text-white">
                      <th className="px-5 py-4 font-semibold">Dòng xe</th>
                      <th className="px-5 py-4 font-semibold">Giá niêm yết</th>
                      <th className="px-5 py-4 font-semibold">Giá ưu đãi</th>
                      <th className="px-5 py-4 text-right font-semibold">Chi tiết</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CARS.map((car, i) => {
                      const price = getPriceInfo(car);
                      return (
                      <tr
                        key={car.slug}
                        className={`border-t border-slate-100 transition-colors hover:bg-brand-50 ${
                          i % 2 === 0 ? "bg-white" : "bg-slate-50/60"
                        }`}
                      >
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-3">
                            <div className="relative h-12 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-slate-100">
                              <Image
                                src={car.image}
                                alt={car.name}
                                fill
                                className="object-cover"
                                sizes="64px"
                              />
                            </div>
                            <span className="font-semibold text-slate-800">{car.name}</span>
                          </div>
                        </td>
                        <td className="px-5 py-3 font-medium text-slate-400 line-through">
                          {price.original}
                          <span className="ml-1 text-xs">đ</span>
                        </td>
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-extrabold text-[#c8102e]">
                              {price.sale}
                              <span className="ml-1 text-xs font-medium text-slate-400">đ</span>
                            </span>
                            <span className="rounded bg-[#c8102e]/10 px-1.5 py-0.5 text-xs font-bold text-[#c8102e]">
                              -{price.percent}%
                            </span>
                          </div>
                        </td>
                        <td className="px-5 py-3 text-right">
                          <a
                            href={`/san-pham/${car.slug}`}
                            className="inline-flex items-center gap-1 rounded-full border border-[#003469] px-4 py-1.5 text-xs font-semibold text-[#003469] transition-colors hover:bg-[#003469] hover:text-white"
                          >
                            Xem
                            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </td>
                      </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-brand-gradient p-6 text-white sm:flex-row sm:p-8">
              <div>
                <p className="text-lg font-bold">Cần báo giá lăn bánh chi tiết?</p>
                <p className="text-white/70">Gọi ngay để nhận ưu đãi tốt nhất hôm nay.</p>
              </div>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#003469] shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
