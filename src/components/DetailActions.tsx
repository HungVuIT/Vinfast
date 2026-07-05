"use client";

import { useState } from "react";
import { CARS, CONTACT } from "@/lib/cars";
import Modal from "@/components/Modal";

type ModalKey = "test-drive" | "quote" | "cost" | null;

const inputCls =
  "w-full rounded-xl border border-slate-200 px-4 py-2.5 text-[15px] outline-none transition-colors focus:border-[#003469] focus:ring-2 focus:ring-[#003469]/10";

const cardCls =
  "group flex w-full items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#003469]/20 hover:shadow-md";

const submitBtnCls =
  "flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#c8102e] to-[#9e0c24] py-3 font-bold uppercase text-white shadow-lg shadow-[#c8102e]/25 transition-transform hover:-translate-y-0.5";

function CardInner({
  icon,
  label,
  info,
}: {
  icon: string;
  label: string;
  info: string;
}) {
  return (
    <>
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-lg">
        {icon}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-xs text-slate-500">{label}</span>
        <span className="text-sm font-bold text-[#003469]">{info}</span>
      </span>
    </>
  );
}

/* Ô chọn dòng xe dùng chung cho form lái thử & báo giá */
function CarSelect({ defaultCar }: { defaultCar: string }) {
  return (
    <select
      name="car"
      defaultValue={defaultCar}
      className={`${inputCls} bg-white`}
    >
      {CARS.map((c) => (
        <option key={c.slug} value={c.name}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

function ThankYou({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <p className="mt-4 text-base font-bold text-slate-900">
        Cảm ơn Quý khách!
      </p>
      <p className="mt-1 text-sm text-slate-500">
        Chúng tôi đã nhận được thông tin và sẽ liên hệ lại trong thời gian sớm nhất.
      </p>
      <button
        onClick={onClose}
        className="mt-5 rounded-xl bg-slate-100 px-6 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200"
      >
        Đóng
      </button>
    </div>
  );
}

/* 1) Đăng ký lái thử */
function TestDriveModal({
  open,
  onClose,
  carName,
}: {
  open: boolean;
  onClose: () => void;
  carName: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const handleClose = () => {
    onClose();
    setSubmitted(false);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Đăng ký lái thử xe"
      subtitle="Ngay sau khi nhận được yêu cầu, chúng tôi sẽ liên hệ lại với Quý khách trong thời gian sớm nhất."
    >
      {submitted ? (
        <ThankYou onClose={handleClose} />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-3"
        >
          <CarSelect defaultCar={carName} />
          <input
            name="name"
            type="text"
            required
            placeholder="Họ và tên (Bắt buộc)"
            className={inputCls}
          />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Số điện thoại (Bắt buộc)"
            className={inputCls}
          />
          <button type="submit" className={submitBtnCls}>
            Đăng ký lái thử ngay
          </button>
        </form>
      )}
    </Modal>
  );
}

/* 2) Yêu cầu báo giá */
function QuoteModal({
  open,
  onClose,
  carName,
}: {
  open: boolean;
  onClose: () => void;
  carName: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const handleClose = () => {
    onClose();
    setSubmitted(false);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      title="Đăng ký nhận báo giá xe"
      subtitle="Đăng ký nhận báo giá và ưu đãi hấp dẫn ngay hôm nay."
    >
      {submitted ? (
        <ThankYou onClose={handleClose} />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-3"
        >
          <CarSelect defaultCar={carName} />
          <input
            name="name"
            type="text"
            required
            placeholder="Họ và tên (Bắt buộc)"
            className={inputCls}
          />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Số điện thoại (Bắt buộc)"
            className={inputCls}
          />
          <div className="flex flex-wrap gap-4 px-1 text-sm text-slate-600">
            <label className="flex items-center gap-1.5">
              <input type="checkbox" name="tragop" className="accent-[#003469]" />{" "}
              Tính trả góp
            </label>
            <label className="flex items-center gap-1.5">
              <input type="checkbox" name="lanbanh" className="accent-[#003469]" />{" "}
              Tính giá lăn bánh
            </label>
          </div>
          <button type="submit" className={submitBtnCls}>
            Nhận báo giá ngay
          </button>
        </form>
      )}
    </Modal>
  );
}

/* 3) Ước tính chi phí lăn bánh */
const ROAD_FEE = 1_560_000; // Phí sử dụng đường bộ 1 năm (xe <10 chỗ, không KD)
const INSURANCE = 480_700; // Bảo hiểm TNDS bắt buộc 1 năm
const INSPECTION = 340_000; // Phí đăng kiểm + cấp giấy chứng nhận

// Lệ phí cấp biển số ô tô con lần đầu — theo khu vực
const PROVINCES = [
  { name: "Đồng Nai", plate: 1_000_000 },
  { name: "TP. Hồ Chí Minh", plate: 20_000_000 },
  { name: "Bình Dương", plate: 1_000_000 },
  { name: "Bà Rịa - Vũng Tàu", plate: 1_000_000 },
];

const fmt = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function CostModal({
  open,
  onClose,
  carName,
  carPrice,
}: {
  open: boolean;
  onClose: () => void;
  carName: string;
  carPrice: string;
}) {
  const [provinceIdx, setProvinceIdx] = useState(0);
  const priceNum = parseInt(carPrice.replace(/[^\d]/g, ""), 10) || 0;
  const plate = PROVINCES[provinceIdx].plate;
  const total = priceNum + ROAD_FEE + INSURANCE + INSPECTION + plate; // trước bạ = 0 (xe điện miễn)

  const rows: { label: string; value: string; free?: boolean }[] = [
    { label: "Giá xe (đã ưu đãi)", value: `${fmt(priceNum)} đ` },
    { label: "Lệ phí trước bạ (xe điện)", value: "Miễn phí", free: true },
    { label: "Phí sử dụng đường bộ (1 năm)", value: `${fmt(ROAD_FEE)} đ` },
    { label: "Bảo hiểm TNDS (1 năm)", value: `${fmt(INSURANCE)} đ` },
    { label: "Lệ phí đăng ký biển số", value: `${fmt(plate)} đ` },
    { label: "Phí đăng kiểm", value: `${fmt(INSPECTION)} đ` },
  ];

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Ước tính giá lăn bánh"
      subtitle={carName}
    >
      <label className="mb-1.5 block text-sm font-semibold text-slate-700">
        Nơi mua xe
      </label>
      <select
        value={provinceIdx}
        onChange={(e) => setProvinceIdx(Number(e.target.value))}
        className={`${inputCls} bg-white`}
      >
        {PROVINCES.map((p, i) => (
          <option key={p.name} value={i}>
            {p.name}
          </option>
        ))}
      </select>

      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100">
        <table className="w-full text-sm">
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.label} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                <td className="px-4 py-2.5 text-slate-600">{r.label}</td>
                <td
                  className={`px-4 py-2.5 text-right font-semibold ${
                    r.free ? "text-green-600" : "text-slate-800"
                  }`}
                >
                  {r.value}
                </td>
              </tr>
            ))}
            <tr className="bg-brand-50">
              <td className="px-4 py-3 font-bold text-[#003469]">
                Giá lăn bánh dự kiến
              </td>
              <td className="px-4 py-3 text-right text-lg font-extrabold text-[#c8102e]">
                {fmt(total)} đ
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-slate-400">
        * Đây là bảng ước tính dành cho khách hàng cá nhân. Xe điện VinFast hiện
        được miễn 100% lệ phí trước bạ. Các khoản phí có thể thay đổi theo quy
        định — vui lòng{" "}
        <a href={`tel:${CONTACT.phoneRaw}`} className="text-[#003469] underline">
          liên hệ {CONTACT.phone}
        </a>{" "}
        để nhận báo giá lăn bánh chính xác.
      </p>
    </Modal>
  );
}

export default function DetailActions({
  carName,
  carPrice,
}: {
  carName: string;
  carPrice: string;
}) {
  const [active, setActive] = useState<ModalKey>(null);
  const close = () => setActive(null);

  return (
    <>
      <div className="mt-5 grid grid-cols-2 gap-3">
        <a href={`tel:${CONTACT.phoneRaw}`} className={cardCls}>
          <CardInner
            icon="📞"
            label="Phụ trách kinh doanh"
            info={`${CONTACT.salesName}: ${CONTACT.phone}`}
          />
        </a>
        <button
          type="button"
          onClick={() => setActive("test-drive")}
          className={cardCls}
        >
          <CardInner icon="🚗" label="Gửi liên hệ" info="Đăng ký lái thử" />
        </button>
        <button
          type="button"
          onClick={() => setActive("quote")}
          className={cardCls}
        >
          <CardInner icon="💰" label="Gửi liên hệ" info="Yêu cầu báo giá" />
        </button>
        <button
          type="button"
          onClick={() => setActive("cost")}
          className={cardCls}
        >
          <CardInner icon="🧮" label="Tham khảo" info="Chi phí lăn bánh" />
        </button>
      </div>

      <TestDriveModal
        open={active === "test-drive"}
        onClose={close}
        carName={carName}
      />
      <QuoteModal open={active === "quote"} onClose={close} carName={carName} />
      <CostModal
        open={active === "cost"}
        onClose={close}
        carName={carName}
        carPrice={carPrice}
      />
    </>
  );
}
