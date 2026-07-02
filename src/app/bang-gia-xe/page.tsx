import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import Breadcrumb from "@/components/Breadcrumb";
import { CARS } from "@/lib/cars";

export const metadata: Metadata = {
  title: "Bảng giá xe | Vinfast Kim Sơn Long Bình Đồng Nai",
  description: "Bảng giá xe VinFast mới nhất tại Đồng Nai: VF3, VF5, VF6, VF7, VF8, VF9 và các dòng xe máy điện.",
};

export default function PriceListPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Bảng giá xe" }]} />

        <section className="py-10">
          <div className="mx-auto max-w-[1140px] px-4">
            <h1 className="mb-6 text-center text-2xl font-medium uppercase text-[#333] md:text-[27px]">
              Bảng giá xe
            </h1>

            <div className="overflow-x-auto rounded border border-[#e7e5e5]">
              <table className="w-full min-w-[560px] border-collapse text-sm">
                <thead>
                  <tr className="bg-[#003469] text-left text-white">
                    <th className="px-4 py-3 font-semibold">Dòng xe</th>
                    <th className="px-4 py-3 font-semibold">Giá bán</th>
                    <th className="px-4 py-3 font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {CARS.map((car, i) => (
                    <tr
                      key={car.slug}
                      className={i % 2 === 0 ? "bg-[#f8f9fa]" : "bg-white"}
                    >
                      <td className="px-4 py-3 font-medium text-[#333]">{car.name}</td>
                      <td className="px-4 py-3 font-bold text-[#c8102e]">{car.price}</td>
                      <td className="px-4 py-3 text-right">
                        <a
                          href={`/san-pham/${car.slug}`}
                          className="inline-block rounded border border-[#003469] px-4 py-1.5 text-xs font-medium text-[#003469] hover:bg-[#003469] hover:text-white"
                        >
                          Chi tiết
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm italic text-[#555]">
              * Giá trên đã bao gồm VAT, chưa bao gồm chi phí lăn bánh. Liên hệ hotline để được tư
              vấn báo giá chi tiết và các chương trình ưu đãi mới nhất.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
