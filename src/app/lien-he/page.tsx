import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import { CONTACT } from "@/lib/cars";

export const metadata: Metadata = {
  title: "Liên hệ | Vinfast Kim Sơn Long Bình Đồng Nai",
  description: "Liên hệ Vinfast Kim Sơn Long Bình Biên Hòa Đồng Nai để được tư vấn mua xe.",
};

const INFO = [
  { icon: "pin", label: "Địa chỉ", value: CONTACT.address },
  { icon: "phone", label: "Hotline", value: `${CONTACT.salesName}: ${CONTACT.phone}`, href: `tel:${CONTACT.phoneRaw}` },
  { icon: "mail", label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: "clock", label: "Giờ mở cửa", value: CONTACT.hours },
] as const;

const ICONS: Record<string, React.ReactNode> = {
  pin: <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />,
  phone: <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />,
  mail: <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 4v10h16V8l-8 5-8-5zm0-2l8 5 8-5H4z" />,
  clock: <path d="M12 8v5l3 2 .8-1.3-2.3-1.5V8H12zM12 2a10 10 0 100 20 10 10 0 000-20z" />,
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Liên hệ" }]} />

        <section className="py-12 sm:py-16">
          <div className="container-page">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  Gửi thông tin <span className="text-gradient-brand">liên hệ</span>
                </h1>
                <p className="mt-2 text-slate-500">
                  Điền form dưới đây, chúng tôi sẽ liên hệ tư vấn trong thời gian sớm nhất.
                </p>
                <div className="mt-8 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
                  <ContactForm />
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-brand-gradient p-6 text-white shadow-lg sm:p-8">
                  <h2 className="text-xl font-bold">Vinfast Kim Sơn Long Bình Đồng Nai</h2>
                  <div className="mt-6 space-y-5">
                    {INFO.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                          <svg className="h-5 w-5 text-[#f0c808]" viewBox="0 0 24 24" fill="currentColor">
                            {ICONS[item.icon]}
                          </svg>
                        </span>
                        <div>
                          <div className="text-xs font-medium uppercase tracking-wide text-white/60">
                            {item.label}
                          </div>
                          {"href" in item && item.href ? (
                            <a href={item.href} className="font-semibold hover:text-[#f0c808]">
                              {item.value}
                            </a>
                          ) : (
                            <div className="font-semibold">{item.value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
                  <iframe
                    title="Bản đồ showroom"
                    src="https://maps.google.com/maps?q=643%20QL1A%2C%20Kp2%2C%20Long%20B%C3%ACnh%2C%20Bi%C3%AAn%20H%C3%B2a%2C%20%C4%90%E1%BB%93ng%20Nai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="300"
                    loading="lazy"
                    style={{ border: 0 }}
                  />
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
