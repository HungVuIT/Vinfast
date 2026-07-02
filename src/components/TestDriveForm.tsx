"use client";

import { useState } from "react";
import { CARS, CONTACT } from "@/lib/cars";
import Reveal from "@/components/Reveal";

const BENEFITS = [
  "Trải nghiệm lái thử miễn phí tại showroom",
  "Tư vấn chọn xe & phiên bản phù hợp nhu cầu",
  "Hỗ trợ trả góp, thủ tục nhanh gọn",
];

export default function TestDriveForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative overflow-hidden py-16 sm:py-20" id="lai-thu">
      <div className="absolute inset-0 bg-brand-gradient" />
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#2f6bb0]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#c8102e]/15 blur-3xl" />

      <div className="container-page relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <Reveal className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white ring-1 ring-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f0c808]" />
              Đăng ký lái thử
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Cầm lái xe điện VinFast <br className="hidden sm:block" />
              trước khi quyết định
            </h2>
            <ul className="mt-6 space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white/85">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#f0c808] text-[#001b38]">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="mt-8 inline-flex items-center gap-2 text-lg font-bold text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              {CONTACT.phone}
            </a>
          </Reveal>

          {/* Form card */}
          <Reveal delay={120}>
            <div className="rounded-3xl border border-white/40 bg-white/95 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <h3 className="text-xl font-bold text-slate-900">Đăng ký Lái thử</h3>
              <p className="mt-1 text-sm text-slate-500">Quý khách vui lòng nhập thông tin dưới đây</p>

              {submitted ? (
                <div className="mt-6 rounded-xl bg-green-50 p-5 text-center text-green-800">
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Cảm ơn Quý khách! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="mt-6 space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field name="name" placeholder="Họ tên (Bắt buộc)" required />
                    <Field name="phone" placeholder="Điện thoại (Bắt buộc)" required />
                  </div>
                  <select
                    name="carname"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-700 outline-none transition-colors focus:border-[#003469] focus:ring-2 focus:ring-[#003469]/10"
                  >
                    <option value="" disabled>
                      Chọn dòng xe
                    </option>
                    {CARS.map((car) => (
                      <option key={car.slug} value={car.name}>
                        {car.name}
                      </option>
                    ))}
                  </select>
                  <Field name="date" placeholder="Ngày dự kiến lái thử" />

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c8102e] to-[#9e0c24] py-3.5 font-bold text-white shadow-lg shadow-[#c8102e]/25 transition-transform hover:-translate-y-0.5"
                  >
                    Đăng ký ngay
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
                    </svg>
                  </button>

                  <p className="text-xs text-slate-500">
                    Cần có giấy phép lái xe hạng B1 trở lên. Bằng việc gửi biểu mẫu, bạn đồng ý với{" "}
                    <a href="/lien-he" className="text-[#003469] underline">
                      chính sách bảo mật
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  placeholder,
  required,
}: {
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <input
      name={name}
      type="text"
      required={required}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-[15px] text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-[#003469] focus:ring-2 focus:ring-[#003469]/10"
    />
  );
}
