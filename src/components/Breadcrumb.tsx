interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div className="bg-[#003469]">
      <div className="mx-auto max-w-[1140px] px-4 py-3">
        <nav aria-label="breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-medium uppercase text-white">
            {items.map((item, i) => (
              <li key={item.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/60">›</span>}
                {item.href ? (
                  <a href={item.href} className="hover:text-[#f0c808]">
                    {item.label}
                  </a>
                ) : (
                  <span className="text-white/80">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
