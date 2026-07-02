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

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Liên hệ" }]} />

        <section className="py-10">
          <div className="mx-auto max-w-[1140px] px-4">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h1 className="mb-5 border-l-8 border-[#003469] px-2.5 text-xl font-bold uppercase text-[#333]">
                  Thông tin liên hệ
                </h1>
                <ContactForm />
              </div>

              <div className="lg:col-span-5">
                <h2 className="mb-5 border-l-8 border-[#003469] px-2.5 text-xl font-bold uppercase text-[#333]">
                  Vinfast Kim Sơn Long Bình Hòa Đồng Nai
                </h2>
                <div className="space-y-3 text-[15px] text-[#333]">
                  <div>📍 {CONTACT.address}</div>
                  <div>
                    📞{" "}
                    <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-[#003469]">
                      {CONTACT.salesName}: {CONTACT.phone}
                    </a>
                  </div>
                  <div>
                    ✉️{" "}
                    <a href={`mailto:${CONTACT.email}`} className="hover:text-[#003469]">
                      {CONTACT.email}
                    </a>
                  </div>
                  <div>
                    🌐{" "}
                    <a href={CONTACT.website} className="hover:text-[#003469]">
                      {CONTACT.website}
                    </a>
                  </div>
                  <div>🕐 {CONTACT.hours}</div>
                </div>

                <div className="mt-6 overflow-hidden rounded border border-[#e7e5e5]">
                  <iframe
                    title="Bản đồ showroom"
                    src="https://maps.google.com/maps?q=643%20QL1A%2C%20Kp2%2C%20Long%20B%C3%ACnh%2C%20Bi%C3%AAn%20H%C3%B2a%2C%20%C4%90%E1%BB%93ng%20Nai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="280"
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
