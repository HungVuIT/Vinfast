interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="border-b border-slate-100 bg-slate-50">
      <div className="container-page py-4">
        <nav aria-label="breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            {items.map((item, i) => (
              <li key={item.label} className="flex items-center gap-2">
                {i > 0 && (
                  <svg className="h-3.5 w-3.5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-medium text-slate-500 transition-colors hover:text-[#003469]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="font-semibold text-[#003469]">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
