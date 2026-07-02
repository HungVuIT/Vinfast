"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-md bg-green-50 p-4 text-green-800">
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
        <label htmlFor="input-name" className="mb-1 block text-sm font-medium text-[#333]">
          Họ:
        </label>
        <input
          id="input-name"
          name="name"
          type="text"
          required
          className="w-full rounded border border-[#ced4da] px-3 py-2 text-[15px] outline-none focus:border-[#003469]"
        />
      </div>

      <div>
        <label htmlFor="input-email" className="mb-1 block text-sm font-medium text-[#333]">
          E-Mail:
        </label>
        <input
          id="input-email"
          name="email"
          type="email"
          required
          className="w-full rounded border border-[#ced4da] px-3 py-2 text-[15px] outline-none focus:border-[#003469]"
        />
      </div>

      <div>
        <label htmlFor="input-enquiry" className="mb-1 block text-sm font-medium text-[#333]">
          Nội dung:
        </label>
        <textarea
          id="input-enquiry"
          name="enquiry"
          rows={8}
          required
          className="w-full rounded border border-[#ced4da] px-3 py-2 text-[15px] outline-none focus:border-[#003469]"
        />
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="rounded border-2 border-[#003469] bg-[#003469] px-6 py-2.5 font-bold text-white transition-colors hover:bg-white hover:text-[#003469]"
        >
          Gửi đi
        </button>
      </div>
    </form>
  );
}
