"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green-50 p-6 text-green-800">
        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <svg className="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="input-name" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Họ và tên
        </label>
        <input
          id="input-name"
          name="name"
          type="text"
          required
          placeholder="Nhập họ tên của bạn"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-slate-400 focus:border-[#003469] focus:ring-2 focus:ring-[#003469]/10"
        />
      </div>

      <div>
        <label htmlFor="input-email" className="mb-1.5 block text-sm font-semibold text-slate-700">
          E-Mail
        </label>
        <input
          id="input-email"
          name="email"
          type="email"
          required
          placeholder="email@example.com"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-slate-400 focus:border-[#003469] focus:ring-2 focus:ring-[#003469]/10"
        />
      </div>

      <div>
        <label htmlFor="input-enquiry" className="mb-1.5 block text-sm font-semibold text-slate-700">
          Nội dung
        </label>
        <textarea
          id="input-enquiry"
          name="enquiry"
          rows={6}
          required
          placeholder="Nội dung cần tư vấn..."
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[15px] outline-none transition-colors placeholder:text-slate-400 focus:border-[#003469] focus:ring-2 focus:ring-[#003469]/10"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#003469] to-[#012a55] px-7 py-3 font-bold text-white shadow-lg shadow-[#003469]/25 transition-transform hover:-translate-y-0.5"
      >
        Gửi đi
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 12h15" />
        </svg>
      </button>
    </form>
  );
}
