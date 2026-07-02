"use client";

import { useState } from "react";
import { CARS } from "@/lib/cars";

export default function TestDriveForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-[#003469] py-12">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block" />
          <div className="rounded-[10px] bg-white p-6 shadow-lg">
            <h3 className="mb-4 border-l-8 border-[#003469] px-2.5 text-xl font-bold uppercase text-[#333]">
              Đăng ký Lái thử
            </h3>
            <p className="mb-4 text-[15px] text-[#333]">
              Quý khách vui lòng nhập thông tin dưới đây
            </p>

            {submitted ? (
              <div className="rounded-md bg-green-50 p-4 text-green-800">
                Cảm ơn Quý khách! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Họ tên (Bắt buộc)..."
                    className="w-full rounded border border-[#ced4da] px-3 py-2 text-[15px] outline-none focus:border-[#003469]"
                  />
                  <input
                    name="phone"
                    type="text"
                    required
                    placeholder="Điện thoại (Bắt buộc)..."
                    className="w-full rounded border border-[#ced4da] px-3 py-2 text-[15px] outline-none focus:border-[#003469]"
                  />
                </div>

                <select
                  name="carname"
                  required
                  defaultValue=""
                  className="w-full rounded border border-[#ced4da] bg-white px-3 py-2 text-[15px] outline-none focus:border-[#003469]"
                >
                  <option value="" disabled>
                    == Chọn Dòng Xe ==
                  </option>
                  {CARS.map((car) => (
                    <option key={car.slug} value={car.name}>
                      {car.name}
                    </option>
                  ))}
                </select>

                <input
                  name="date"
                  type="text"
                  placeholder="Ngày dự kiến lái thử"
                  className="w-full rounded border border-[#ced4da] px-3 py-2 text-[15px] outline-none focus:border-[#003469]"
                />

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded border-2 border-[#003469] bg-[#003469] px-6 py-2.5 font-bold text-white transition-colors hover:bg-white hover:text-[#003469]"
                  >
                    Đăng ký ngay
                  </button>
                </div>

                <p className="text-[13px] font-bold text-[#333]">
                  Chú ý: Để tham gia đăng ký lái thử với chúng tôi, Quý khách cần có giấy phép lái xe
                  hạng B1 trở lên.
                </p>
                <p className="text-[13px] italic text-[#555]">
                  Bằng việc gửi biểu mẫu này, bạn xác nhận đã đọc và đồng ý với{" "}
                  <a href="/chinh-sach-bao-mat" className="text-[#3883cc]">
                    chính sách bảo mật
                  </a>
                  , đồng thời cho phép chúng tôi liên hệ tư vấn.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
