"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/cars";

export default function QuoteSidebarForm({ carName }: { carName: string }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="sticky top-24 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_10px_40px_rgba(0,27,56,0.08)]">
      {/* Header band */}
      <div className="bg-gradient-to-r from-[#003469] to-[#012a55] px-5 py-4 text-white">
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          className="flex items-center gap-2 text-lg font-bold"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
            </svg>
          </span>
          {CONTACT.salesName}: {CONTACT.phone}
        </a>
        <p className="mt-1 text-sm text-white/70">Liên hệ ngay để nhận giá tốt nhất!</p>
      </div>

      <div className="p-5">
        <p className="text-center text-base font-bold uppercase text-slate-900">Nhận báo giá xe</p>

        {submitted ? (
          <div className="mt-4 rounded-xl bg-green-50 p-4 text-center text-sm text-green-800">
            Cảm ơn Quý khách! Chúng tôi sẽ liên hệ sớm nhất.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mt-4 space-y-3"
          >
            <input
              name="name"
              type="text"
              required
              placeholder="Họ tên (Bắt buộc)"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-[15px] outline-none transition-colors focus:border-[#003469] focus:ring-2 focus:ring-[#003469]/10"
            />
            <input
              name="phone"
              type="text"
              required
              placeholder="Điện thoại (Bắt buộc)"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-[15px] outline-none transition-colors focus:border-[#003469] focus:ring-2 focus:ring-[#003469]/10"
            />
            <input
              name="carname"
              type="text"
              defaultValue={carName}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-[15px] font-medium text-slate-700 outline-none focus:border-[#003469]"
            />
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <label className="flex items-center gap-1.5">
                <input type="checkbox" name="tinhtragop" value="Có" className="accent-[#003469]" /> Tính trả góp
              </label>
              <label className="flex items-center gap-1.5">
                <input type="checkbox" name="tinhgialanbanh" value="Có" className="accent-[#003469]" /> Tính lăn bánh
              </label>
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c8102e] to-[#9e0c24] py-3 font-bold text-white shadow-lg shadow-[#c8102e]/25 transition-transform hover:-translate-y-0.5"
            >
              Nhận báo giá
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
              </svg>
            </button>
            <p className="text-xs text-slate-400">
              Bằng việc gửi biểu mẫu, bạn đồng ý với{" "}
              <a href="/lien-he" className="text-[#003469] underline">chính sách bảo mật</a>.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
