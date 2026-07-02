import Image from "next/image";
import { CARS, CONTACT } from "@/lib/cars";

function FTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="relative mb-5 text-base font-bold text-white after:mt-2 after:block after:h-0.5 after:w-10 after:rounded-full after:bg-[#f0c808] after:content-['']">
      {children}
    </h4>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#001b38] text-slate-300">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#003469]/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#003469]/30 blur-3xl" />

      <div className="container-page relative py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company / contact */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo.png"
              alt="VinFast"
              width={180}
              height={48}
              className="mb-4 h-11 w-auto brightness-0 invert"
            />
            <p className="text-sm leading-6 text-slate-400">
              {CONTACT.company}
              <br />
              Mã số thuế: {CONTACT.taxId} | Cấp ngày: {CONTACT.taxDate}
              <br />
              Người đại diện: {CONTACT.representative}
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <ContactLine icon="pin">{CONTACT.address}</ContactLine>
              <ContactLine icon="phone" href={`tel:${CONTACT.phoneRaw}`}>
                Nhân viên bán hàng: {CONTACT.phoneRaw} - {CONTACT.salesName}
              </ContactLine>
              <ContactLine icon="mail" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </ContactLine>
              <ContactLine icon="clock">{CONTACT.hours}</ContactLine>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#1877f2]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
                </svg>
              </a>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                aria-label="Gọi ngay"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-[#c8102e]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Car list */}
          <div>
            <FTitle>Danh mục xe</FTitle>
            <ul className="grid grid-cols-1 gap-2 text-sm">
              {CARS.map((car) => (
                <li key={car.slug}>
                  <a
                    href={`/san-pham/${car.slug}`}
                    className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-[#f0c808]"
                  >
                    <span className="text-[#f0c808]">›</span>
                    {car.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links + fanpage */}
          <div>
            <FTitle>Liên kết nhanh</FTitle>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Trang chủ", href: "/" },
                { label: "Sản phẩm", href: "/san-pham" },
                { label: "Bảng giá xe", href: "/bang-gia-xe" },
                { label: "Khuyến mãi", href: "/khuyen-mai" },
                { label: "Liên hệ", href: "/lien-he" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-[#f0c808]"
                  >
                    <span className="text-[#f0c808]">›</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#1877f2] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
              </svg>
              Theo dõi Fanpage
            </a>
          </div>
        </div>

        {/* Notice */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5 text-[13px] leading-6 text-slate-400">
          <p className="font-semibold uppercase text-slate-300">
            ⚠️ Website hỗ trợ khách hàng đăng ký nhận thông tin và tư vấn chuyên sâu về xe VinFast.
          </p>
          <p className="mt-1">
            Mọi giao dịch, ưu đãi chính thức và thủ tục mua bán được thực hiện tại Showroom/Đại lý ủy
            quyền. Chúng tôi không thực hiện giao dịch bán hàng trực tuyến — website chỉ phục vụ tư
            vấn, báo giá, hỗ trợ trả góp và đặt lịch lái thử.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-[13px] text-slate-400 sm:flex-row">
          <span>© 2026 Vinfast Kim Sơn Long Bình Đồng Nai. Bảo lưu mọi quyền.</span>
          <span>
            Thiết kế bởi{" "}
            <a
              href="http://obd.com.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-[#f0c808]"
            >
              OBD
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function ContactLine({
  icon,
  href,
  children,
}: {
  icon: "pin" | "phone" | "mail" | "clock";
  href?: string;
  children: React.ReactNode;
}) {
  const paths: Record<string, React.ReactNode> = {
    pin: <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />,
    phone: (
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
    ),
    mail: <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 4v10h16V8l-8 5-8-5zm0-2l8 5 8-5H4z" />,
    clock: <path d="M12 8v5l3 2 .8-1.3-2.3-1.5V8H12zM12 2a10 10 0 100 20 10 10 0 000-20z" />,
  };
  const inner = (
    <span className="flex items-start gap-3">
      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#f0c808]" viewBox="0 0 24 24" fill="currentColor">
        {paths[icon]}
      </svg>
      <span>{children}</span>
    </span>
  );
  return href ? (
    <a href={href} className="block text-slate-400 transition-colors hover:text-[#f0c808]">
      {inner}
    </a>
  ) : (
    <div className="text-slate-400">{inner}</div>
  );
}
