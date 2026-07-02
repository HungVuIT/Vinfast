import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGallery from "@/components/ProductGallery";
import OtherCarsRow from "@/components/OtherCarsRow";
import QuoteSidebarForm from "@/components/QuoteSidebarForm";
import { CARS, CONTACT, getCarBySlug, getOtherCars } from "@/lib/cars";

export function generateStaticParams() {
  return CARS.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) return {};
  return {
    title: `${car.name} | Vinfast Kim Sơn Long Bình Đồng Nai`,
    description: `${car.name} - Giá bán: ${car.price}. ${car.priceExtra}`,
  };
}

const ACTION_BUTTONS = [
  {
    label: "Phụ trách kinh doanh",
    info: `${CONTACT.salesName}: ${CONTACT.phone}`,
    href: `tel:${CONTACT.phoneRaw}`,
    icon: "📞",
  },
  {
    label: "Gửi liên hệ",
    info: "Đăng ký lái thử",
    href: "#lai-thu",
    icon: "🚗",
  },
  {
    label: "Gửi liên hệ",
    info: "Yêu cầu báo giá",
    href: "#bao-gia",
    icon: "💰",
  },
  {
    label: "Tham khảo",
    info: "Chi phí lăn bánh",
    href: "#chi-phi",
    icon: "🧮",
  },
];

export default async function CarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = getCarBySlug(slug);
  if (!car) notFound();

  const otherCars = getOtherCars(slug);

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Sản phẩm", href: "/san-pham" },
            { label: car.name },
          ]}
        />

        <section className="py-8">
          <div className="mx-auto max-w-[1140px] px-4">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <ProductGallery images={car.gallery} alt={car.name} />
              </div>

              <div className="lg:col-span-5">
                <h1 className="mb-4 border-l-8 border-[#003469] px-2.5 text-2xl font-bold uppercase text-[#333]">
                  {car.name}
                </h1>

                <div className="flex items-baseline justify-between border-b border-[#e7e5e5] pb-3">
                  <span className="text-sm font-medium uppercase text-[#555]">Giá bán</span>
                  <span className="text-2xl font-bold text-[#c8102e]">{car.price}</span>
                </div>

                {car.priceExtra && (
                  <p className="mt-3 text-[15px] font-semibold text-[#333]">{car.priceExtra}</p>
                )}

                {car.promoBullets.length > 0 && (
                  <div className="mt-4 rounded border-2 border-dashed border-[#11b6cc] bg-[#d9f4ff] p-4">
                    <p className="mb-2 font-semibold text-[#333]">
                      Khách hàng được lựa chọn 1 trong 2 ưu đãi dưới đây
                    </p>
                    <ul className="space-y-1.5 text-sm text-[#333]">
                      {car.promoBullets.map((b, i) => (
                        <li key={i}>{b.replace(/^-\s*/, "")}</li>
                      ))}
                    </ul>
                    <p className="mt-2 text-sm font-bold text-red-600">
                      🔥 Liên hệ để tư vấn nhiều ưu đãi hôm nay.
                    </p>
                  </div>
                )}

                <div id="bao-gia" className="mt-5 grid grid-cols-2 gap-3">
                  {ACTION_BUTTONS.map((btn) => (
                    <a
                      key={btn.label + btn.info}
                      href={btn.href}
                      className="flex items-center gap-3 rounded border border-[#e7e5e5] p-3 transition-colors hover:border-[#003469] hover:bg-[#f8f9fa]"
                    >
                      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#003469]/10 text-lg">
                        {btn.icon}
                      </span>
                      <span className="flex flex-col leading-tight">
                        <span className="text-xs text-[#555]">{btn.label}</span>
                        <span className="text-sm font-bold text-[#003469]">{btn.info}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {otherCars.length > 0 && <OtherCarsRow cars={otherCars} />}

        <section className="border-t border-[#e7e5e5] py-10" id="lai-thu">
          <div className="mx-auto max-w-[1140px] px-4">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <QuoteSidebarForm carName={car.name} />
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-8">
                  {car.description.map((section, i) => (
                    <div key={i}>
                      <h2 className="mb-2 text-xl font-bold text-[#333]">{section.heading}</h2>
                      <p className="leading-relaxed text-[#333]">{section.text}</p>
                    </div>
                  ))}

                  {car.specs.length > 0 && (
                    <div id="chi-phi">
                      <h3 className="mb-3 text-lg font-bold text-[#333]">Thông số kỹ thuật</h3>
                      <table className="w-full border-collapse overflow-hidden rounded border border-[#dee2e6] text-sm">
                        <tbody>
                          {car.specs.map((spec, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-[#f8f9fa]" : "bg-white"}>
                              <td className="border border-[#dee2e6] px-3 py-2 font-medium text-[#333]">
                                {spec.label}
                              </td>
                              <td className="border border-[#dee2e6] px-3 py-2 text-[#333]">
                                {spec.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
