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
  { label: "Phụ trách kinh doanh", info: `${CONTACT.salesName}: ${CONTACT.phone}`, href: `tel:${CONTACT.phoneRaw}`, icon: "📞" },
  { label: "Gửi liên hệ", info: "Đăng ký lái thử", href: "#lai-thu", icon: "🚗" },
  { label: "Gửi liên hệ", info: "Yêu cầu báo giá", href: "#bao-gia", icon: "💰" },
  { label: "Tham khảo", info: "Chi phí lăn bánh", href: "#chi-phi", icon: "🧮" },
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

        <section className="py-8 sm:py-10">
          <div className="container-page">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <ProductGallery images={car.gallery} alt={car.name} />
              </div>

              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-[#003469]">
                  <svg className="h-3 w-3 text-[#f0c808]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                  </svg>
                  Xe điện VinFast
                </span>
                <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
                  {car.name}
                </h1>

                <div className="mt-5 flex items-end justify-between rounded-2xl bg-slate-50 p-5">
                  <div>
                    <span className="text-sm font-medium text-slate-500">Giá bán từ</span>
                    <div className="text-3xl font-extrabold text-[#c8102e]">{car.price}</div>
                  </div>
                </div>

                {car.priceExtra && (
                  <p className="mt-3 text-[15px] font-semibold leading-relaxed text-slate-700">
                    {car.priceExtra}
                  </p>
                )}

                {car.promoBullets.length > 0 && (
                  <div className="mt-4 rounded-2xl border-2 border-dashed border-[#11b6cc] bg-[#eafaff] p-4">
                    <p className="mb-2 flex items-center gap-2 font-bold text-slate-900">
                      <span className="text-lg">🎁</span> Khách hàng chọn 1 trong các ưu đãi
                    </p>
                    <ul className="space-y-1.5 text-sm text-slate-700">
                      {car.promoBullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#003469]" />
                          {b.replace(/^-\s*/, "")}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-2 text-sm font-bold text-[#c8102e]">
                      🔥 Liên hệ để tư vấn nhiều ưu đãi hôm nay.
                    </p>
                  </div>
                )}

                <div id="bao-gia" className="mt-5 grid grid-cols-2 gap-3">
                  {ACTION_BUTTONS.map((btn) => (
                    <a
                      key={btn.label + btn.info}
                      href={btn.href}
                      className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#003469]/20 hover:shadow-md"
                    >
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-lg">
                        {btn.icon}
                      </span>
                      <span className="flex flex-col leading-tight">
                        <span className="text-xs text-slate-500">{btn.label}</span>
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

        <section className="py-12 sm:py-16" id="lai-thu">
          <div className="container-page">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="order-2 lg:order-1 lg:col-span-4">
                <QuoteSidebarForm carName={car.name} />
              </div>

              <div className="order-1 lg:order-2 lg:col-span-8">
                <div className="space-y-10">
                  {car.description.map((section, i) => (
                    <div key={i}>
                      <h2 className="mb-3 flex items-center gap-3 text-2xl font-extrabold text-slate-900">
                        <span className="h-7 w-1 rounded-full bg-gradient-to-b from-[#003469] to-[#2f6bb0]" />
                        {section.heading}
                      </h2>
                      <p className="leading-relaxed text-slate-600">{section.text}</p>
                    </div>
                  ))}

                  {car.specs.length > 0 && (
                    <div id="chi-phi">
                      <h3 className="mb-4 flex items-center gap-3 text-2xl font-extrabold text-slate-900">
                        <span className="h-7 w-1 rounded-full bg-gradient-to-b from-[#003469] to-[#2f6bb0]" />
                        Thông số kỹ thuật
                      </h3>
                      <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                        <table className="w-full text-sm">
                          <tbody>
                            {car.specs.map((spec, i) => (
                              <tr key={i} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                                <td className="w-1/2 px-4 py-3 font-semibold text-slate-700">
                                  {spec.label}
                                </td>
                                <td className="px-4 py-3 text-slate-600">{spec.value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
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
