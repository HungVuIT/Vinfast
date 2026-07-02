"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/cars";

export default function QuoteSidebarForm({ carName }: { carName: string }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="sticky top-20 rounded-lg border border-[#e7e5e5] bg-white p-5 shadow-sm">
      <a
        href={`tel:${CONTACT.phoneRaw}`}
        title="Gọi ngay"
        className="block text-center text-lg font-bold text-[#003469]"
      >
        <i className="mr-1">📞</i> {CONTACT.salesName}: {CONTACT.phone}
      </a>
      <p className="mt-1 text-center text-sm text-[#555]">
        Hãy liên hệ ngay để được mua xe với giá tốt nhất!
      </p>

      <p className="mt-4 border-t border-[#e7e5e5] pt-4 text-center text-base font-bold uppercase text-[#333]">
        Nhận báo giá xe
      </p>

      {submitted ? (
        <div className="mt-4 rounded-md bg-green-50 p-4 text-center text-sm text-green-800">
          Cảm ơn Quý khách! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-3 space-y-3"
        >
          <input
            name="name"
            type="text"
            required
            placeholder="Họ tên (Bắt buộc)"
            className="w-full rounded border border-[#ced4da] px-3 py-2 text-[15px] outline-none focus:border-[#003469]"
          />
          <input
            name="phone"
            type="text"
            required
            placeholder="Điện thoại (Bắt buộc)"
            className="w-full rounded border border-[#ced4da] px-3 py-2 text-[15px] outline-none focus:border-[#003469]"
          />
          <input
            name="carname"
            type="text"
            defaultValue={carName}
            className="w-full rounded border border-[#ced4da] px-3 py-2 text-[15px] outline-none focus:border-[#003469]"
          />
          <div className="flex flex-wrap gap-4 text-sm text-[#333]">
            <label className="flex items-center gap-1.5">
              <input type="checkbox" name="tinhtragop" value="Có" /> Tính trả góp
            </label>
            <label className="flex items-center gap-1.5">
              <input type="checkbox" name="tinhgialanbanh" value="Có" /> Tính lăn bánh
            </label>
          </div>
          <p className="text-xs italic text-[#555]">
            Bằng việc gửi biểu mẫu này, bạn xác nhận đã đọc và đồng ý với{" "}
            <a href="/chinh-sach-bao-mat" className="text-[#3883cc]">
              chính sách bảo mật
            </a>
            , đồng thời cho phép chúng tôi liên hệ tư vấn.
          </p>
          <button
            type="submit"
            className="w-full rounded border-2 border-[#003469] bg-[#003469] py-2.5 font-bold text-white transition-colors hover:bg-white hover:text-[#003469]"
          >
            Nhận báo giá
          </button>
        </form>
      )}
    </div>
  );
}
