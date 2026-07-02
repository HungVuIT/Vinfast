import Reveal from "@/components/Reveal";

const STATS = [
  {
    value: "13+",
    label: "Dòng xe điện",
    icon: (
      <path d="M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11h1a1 1 0 011 1v5a1 1 0 01-1 1h-1v1a1 1 0 01-2 0v-1H7v1a1 1 0 01-2 0v-1H4a1 1 0 01-1-1v-5a1 1 0 011-1h1zm2.2 0h9.6l-1-3H8.2l-1 3zM7 14a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z" />
    ),
  },
  {
    value: "63",
    label: "Tỉnh thành có trạm sạc",
    icon: <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />,
  },
  {
    value: "24/7",
    label: "Tư vấn tận tình",
    icon: <path d="M12 8v5l3 2 .8-1.3-2.3-1.5V8H12zM12 2a10 10 0 100 20 10 10 0 000-20z" />,
  },
  {
    value: "90%",
    label: "Hỗ trợ trả góp",
    icon: (
      <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 4v3h10V6H7zm0 5v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM7 15v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v4h2v-4h-2z" />
    ),
  },
];

export default function StatsBar() {
  return (
    <div className="container-page relative z-30 -mt-14 sm:-mt-16">
      <Reveal className="overflow-hidden rounded-2xl border border-slate-100 bg-white/95 shadow-[0_20px_60px_rgba(0,27,56,0.12)] backdrop-blur-xl">
        <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-4 sm:divide-y-0">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 p-5 sm:p-6">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-50 text-[#003469]">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  {stat.icon}
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-2xl font-extrabold text-slate-900">{stat.value}</div>
                <div className="text-[13px] font-medium text-slate-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
