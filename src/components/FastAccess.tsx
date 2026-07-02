import Reveal from "@/components/Reveal";

const ITEMS = [
  {
    title: "Yêu cầu báo giá",
    desc: "Nhận bảng giá & ưu đãi mới nhất",
    href: "/lien-he",
    icon: (
      <path d="M12 1a1 1 0 011 1v1.06a4 4 0 013 3.87 1 1 0 11-2 0 2 2 0 10-2 2h.5a3.5 3.5 0 011 6.85V17a1 1 0 11-2 0v-1.06a4 4 0 01-3-3.87 1 1 0 112 0 2 2 0 102-2H11a3.5 3.5 0 01-1-6.85V2a1 1 0 011-1z" />
    ),
  },
  {
    title: "Thủ tục trả góp",
    desc: "Hỗ trợ vay đến 90%, lãi suất ưu đãi",
    href: "/khuyen-mai",
    icon: (
      <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 4v3h10V6H7zm0 5v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM7 15v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v4h2v-4h-2z" />
    ),
  },
  {
    title: "Bảng giá xe",
    desc: "Toàn bộ dòng xe & phiên bản",
    href: "/bang-gia-xe",
    icon: (
      <path d="M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11h1a1 1 0 011 1v5a1 1 0 01-1 1h-1v1a1 1 0 01-2 0v-1H7v1a1 1 0 01-2 0v-1H4a1 1 0 01-1-1v-5a1 1 0 011-1h1zm2.2 0h9.6l-1-3H8.2l-1 3zM7 14a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z" />
    ),
  },
];

export default function FastAccess() {
  return (
    <section className="pb-4">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <a
                href={item.href}
                className="group flex h-full items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#003469]/20 hover:shadow-[0_20px_50px_rgba(0,27,56,0.12)]"
              >
                <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#003469] to-[#012a55] text-white shadow-lg shadow-[#003469]/20 transition-transform group-hover:scale-105">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                    {item.icon}
                  </svg>
                </span>
                <div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-[#003469]">
                    {item.title}
                  </div>
                  <div className="text-sm text-slate-500">{item.desc}</div>
                </div>
                <svg
                  className="ml-auto h-5 w-5 flex-shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-[#003469]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
