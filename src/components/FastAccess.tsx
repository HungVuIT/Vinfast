const ITEMS = [
  {
    title: "Yêu cầu báo giá",
    href: "#bao-gia",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1a1 1 0 011 1v1.06a4 4 0 013 3.87 1 1 0 11-2 0 2 2 0 10-2 2h.5a3.5 3.5 0 011 6.85V17a1 1 0 11-2 0v-1.06a4 4 0 01-3-3.87 1 1 0 112 0 2 2 0 102-2H11a3.5 3.5 0 01-1-6.85V2a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    title: "Thủ tục trả góp",
    href: "/tra-gop",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm0 4v3h10V6H7zm0 5v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM7 15v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v4h2v-4h-2z" />
      </svg>
    ),
  },
  {
    title: "Bảng giá xe",
    href: "/bang-gia-xe",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11h1a1 1 0 011 1v5a1 1 0 01-1 1h-1v1a1 1 0 01-2 0v-1H7v1a1 1 0 01-2 0v-1H4a1 1 0 01-1-1v-5a1 1 0 011-1h1zm2.2 0h9.6l-1-3H8.2l-1 3zM7 14a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z" />
      </svg>
    ),
  },
];

export default function FastAccess() {
  return (
    <section className="pb-6">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="flex items-center justify-center gap-3 rounded-lg border border-[#003469] bg-white px-4 py-4 font-bold text-[#003469] transition-colors hover:bg-[#003469] hover:text-white"
            >
              {item.icon}
              <span>{item.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
