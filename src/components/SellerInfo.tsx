import Image from "next/image";
import { CONTACT } from "@/lib/cars";

export default function SellerInfo() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mx-auto max-w-[420px] overflow-hidden rounded-full">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/seller.jpg"
                  alt="Vinfast Kim Sơn Long Bình Biên Hòa Đồng Nai"
                  fill
                  className="object-cover"
                  sizes="420px"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="mb-4 border-l-8 border-[#003469] px-2.5 text-2xl font-bold uppercase text-[#333]">
              Liên hệ ngay để được tư vấn
            </h3>
            <div className="space-y-3 text-[15px] leading-relaxed text-[#333]">
              <p className="font-bold">TƯ VẤN MUA XE TẬN TÌNH (24/7)</p>
              <p>
                VinFast Kim Sơn Long Bình – Biên Hòa, Đồng Nai là đại lý xe VinFast chính thức
                thuộc <strong>CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ Ô TÔ KIM SƠN</strong>. Mọi giao dịch,
                ưu đãi chính thức và thủ tục mua bán sẽ được thực hiện tại Showroom / Đại lý ủy quyền,
                trực tiếp hỗ trợ khách hàng lựa chọn mẫu xe phù hợp với nhu cầu, cam kết tư vấn tận
                tâm và minh bạch. Liên hệ để nhận hỗ trợ tư vấn.
              </p>
            </div>
            <div className="mt-5">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                title="Gọi ngay"
                className="inline-flex items-center rounded border-2 border-[#003469] bg-[#003469] px-6 py-2.5 font-bold text-white transition-colors hover:bg-white hover:text-[#003469]"
              >
                Gọi ngay: {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
