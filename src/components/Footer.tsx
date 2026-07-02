import { CARS, CONTACT } from "@/lib/cars";

export default function Footer() {
  return (
    <footer className="mt-4 bg-[#f8f9fa] text-[#333]">
      <div className="mx-auto max-w-[1140px] px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company / contact */}
          <div className="text-[15px] leading-6">
            <div>{CONTACT.company}</div>
            <div>
              Mã số thuế: {CONTACT.taxId} | Cấp ngày: {CONTACT.taxDate}
            </div>
            <div>Người đại diện: {CONTACT.representative}</div>

            <h2 className="mt-4 mb-4 text-[110%] font-bold after:mt-1.5 after:block after:h-0.5 after:w-10 after:bg-[#4d4d4d] after:content-['']">
              Vinfast Kim Sơn Long Bình Hòa Đồng Nai
            </h2>
            <div className="space-y-1">
              <div>📍 {CONTACT.address}</div>
              <div>
                📞{" "}
                <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-[#003469]">
                  Nhân viên bán hàng: {CONTACT.phoneRaw} - {CONTACT.salesName}
                </a>
              </div>
              <div>
                ✉️{" "}
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[#003469]">
                  {CONTACT.email}
                </a>
              </div>
              <div>
                🌐{" "}
                <a href={CONTACT.website} className="hover:text-[#003469]">
                  {CONTACT.website}
                </a>
              </div>
            </div>

            <h4 className="mt-4 mb-2 text-[110%] font-bold after:mt-1.5 after:block after:h-0.5 after:w-10 after:bg-[#4d4d4d] after:content-['']">
              Giờ mở cửa
            </h4>
            <div>🕐 {CONTACT.hours}</div>
          </div>

          {/* Car list */}
          <div>
            <h4 className="mb-4 text-[110%] font-bold after:mt-1.5 after:block after:h-0.5 after:w-10 after:bg-[#4d4d4d] after:content-['']">
              Danh Mục Xe
            </h4>
            <div className="space-y-1.5 text-[15px]">
              {CARS.map((car) => (
                <div key={car.slug}>
                  <a href={`/san-pham/${car.slug}`} className="hover:text-[#003469]">
                    › {car.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Fanpage */}
          <div>
            <h4 className="mb-4 text-[110%] font-bold after:mt-1.5 after:block after:h-0.5 after:w-10 after:bg-[#4d4d4d] after:content-['']">
              Fanpage
            </h4>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded bg-[#1877f2] px-4 py-2 text-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
              </svg>
              Theo dõi Fanpage
            </a>
          </div>
        </div>

        {/* Notices */}
        <div className="mt-8 space-y-3 border-t border-gray-200 pt-6">
          <div className="text-[13px] font-semibold uppercase text-[#333]">
            ⚠️ Đây là website hỗ trợ khách hàng đăng ký nhận thông tin và tư vấn chuyên sâu về xe
            VinFast. Mọi giao dịch, ưu đãi chính thức và thủ tục mua bán sẽ được thực hiện tại
            Showroom/Đại lý ủy quyền. Vui lòng để lại thông tin để được kết nối.
          </div>
          <p className="pl-10 text-[13px] text-[#555]">
            <b>Lưu ý:</b> Chúng tôi không thực hiện giao dịch bán hàng trực tuyến. Website này chỉ
            phục vụ mục đích tư vấn, báo giá, hỗ trợ thủ tục trả góp và đặt lịch lái thử xe. Vui lòng
            điền vào Form đăng ký để nhận hỗ trợ ngay.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-white py-5 text-center text-[13px] text-[#333]">
        @2025. Thiết kế bởi{" "}
        <a href="http://obd.com.vn" target="_blank" rel="noopener noreferrer" className="font-bold">
          OBD
        </a>
      </div>
    </footer>
  );
}
