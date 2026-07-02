import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import Breadcrumb from "@/components/Breadcrumb";
import { CONTACT } from "@/lib/cars";

export const metadata: Metadata = {
  title: "Khuyến mãi | Vinfast Kim Sơn Long Bình Đồng Nai",
  description: "Chương trình Mãnh liệt vì tương lai xanh - Ưu đãi đặc biệt khi mua xe điện VinFast trong năm 2026.",
};

export default function PromotionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Khuyến mãi" }]} />

        <section className="py-10">
          <div className="mx-auto max-w-[900px] px-4">
            <div className="rounded-[10px] bg-[#f2f2f2] px-4 py-8 md:px-8">
              <div className="text-center">
                <h1 className="text-xl font-bold text-[#009900] md:text-2xl">
                  CHƯƠNG TRÌNH MÃNH LIỆT VÌ TƯƠNG LAI XANH
                </h1>
                <p className="mt-1 text-[#6b7280]">
                  Ưu đãi đặc biệt khi mua xe điện VinFast trong năm 2026
                </p>
              </div>

              <div className="my-5 flex flex-wrap justify-center gap-2">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="rounded bg-[#e74c3c] px-5 py-2.5 font-semibold text-white"
                >
                  Gọi ngay
                </a>
                <a
                  href="https://zalo.me/0868888925"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-[#0ea5e9] px-5 py-2.5 font-semibold text-white"
                >
                  Chat Zalo
                </a>
                <a href="#bao-gia" className="rounded bg-[#f59e0b] px-5 py-2.5 font-semibold text-white">
                  Nhận báo giá
                </a>
              </div>

              <div className="mt-6 rounded-lg bg-white p-5 shadow-sm">
                <h2 className="text-lg font-bold text-[#1f2d3d]">Ưu đãi</h2>
                <p className="mt-1 text-[15px] text-[#333]">
                  Khách hàng được lựa chọn Ưu đãi trừ vào giá hoặc Ưu đãi hỗ trợ lãi suất như dưới:
                </p>

                <div className="mt-4">
                  <h3 className="font-semibold text-[#333]">Ưu đãi trừ vào giá</h3>
                  <p className="mt-1 text-[15px] text-[#333]">
                    ECVan, Minio Green, Limo Green, Nerio Green, Herio Green, VF 3, VF 5, VF 6, VF 7,
                    VF MPV 7: <span className="font-bold text-[#27ae60]">6% MSRP (gồm VAT)</span>
                  </p>
                  <p className="mt-1 text-[15px] text-[#333]">
                    VF 8, VF 9: <span className="text-lg font-bold text-[#27ae60]">10% MSRP (gồm VAT)</span>
                  </p>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold text-[#333]">Ưu đãi hỗ trợ lãi suất</h3>
                  <p className="mt-1 text-[15px] text-[#333]">
                    VinFast đảm bảo một mức lãi suất cố định trong 3 năm đầu khi khách hàng đi vay
                    theo từng dòng xe như dưới:
                  </p>
                  <p className="mt-1 text-[15px] text-[#333]">
                    ECVan, Minio Green, Limo Green, Nerio Green, Herio Green, VF3, VF5, VF6, VF7, VF
                    MPV 7: <span className="font-semibold text-[#2563eb]">lãi suất 7%/năm trong 3 năm đầu</span>
                  </p>
                  <p className="mt-1 text-[15px] text-[#333]">
                    VF 8, VF 9: <span className="text-lg font-semibold text-[#2563eb]">lãi suất 5%/năm trong 3 năm đầu</span>
                  </p>
                </div>

                <p className="mt-4 text-sm italic text-[#555]">
                  Thời gian áp dụng: Từ 23/01/2026 đến hết 31/12/2026 theo ngày xuất hóa đơn
                </p>
              </div>

              <div className="mt-4 rounded-lg bg-white p-5 shadow-sm">
                <h2 className="text-lg font-bold text-[#1f2d3d]">
                  Chính sách ưu đãi cho khách hàng phục vụ trong ngành công an và quân đội
                </h2>
                <p className="mt-2 text-[15px] text-[#333]">
                  Đối tượng áp dụng: Sĩ quan, quân nhân chuyên nghiệp, hạ sĩ quan, chiến sĩ thuộc Quân
                  đội nhân dân Việt Nam và Công an nhân dân Việt Nam và người thân (vợ chồng/con
                  cái/tứ thân phụ mẫu) đang công tác trong biên chế chính thức. Giấy tờ xác định đối
                  tượng hưởng ưu đãi là thẻ ngành: thẻ sĩ quan/thẻ quân nhân/thẻ Công an nhân dân.
                </p>
                <p className="mt-2 text-[15px] text-[#333]">
                  Mức ưu đãi: <span className="text-lg font-bold text-[#27ae60]">5% MSRP gồm VAT</span>
                </p>
                <p className="mt-2 text-sm italic text-[#555]">
                  Thời gian áp dụng: Từ ngày 04/02/2026 đến hết 31/12/2026
                </p>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-6 text-center text-sm font-medium text-[#333]">
                <div>⚡ Sạc 0đ đến 2-2029</div>
                <div>🔄 Thu xe xăng đổi điện</div>
                <div>🏦 Hỗ trợ vay ngân hàng lên đến 90%</div>
                <div>📋 Hỗ trợ đăng ký biển và đăng ký app chạy dịch vụ nhanh chóng</div>
              </div>

              <div className="mt-6 rounded-lg bg-white p-4 text-center text-[15px] text-[#333] shadow-sm">
                Ngoài ra còn nhiều chương trình ưu đãi khác được triển theo từng thời điểm, hãy liên
                hệ chúng tôi để nhận ưu đãi tốt nhất
              </div>

              <div id="bao-gia" className="mt-6 flex flex-wrap justify-center gap-2">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="rounded bg-[#e74c3c] px-5 py-2.5 font-semibold text-white"
                >
                  Gọi ngay
                </a>
                <a
                  href="https://zalo.me/0868888925"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded bg-[#0ea5e9] px-5 py-2.5 font-semibold text-white"
                >
                  Chat Zalo
                </a>
                <a href="/lien-he" className="rounded bg-[#f59e0b] px-5 py-2.5 font-semibold text-white">
                  Nhận báo giá
                </a>
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
