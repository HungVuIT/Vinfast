import Image from "next/image";
import type { Car } from "@/types/car";
import { getPriceInfo } from "@/lib/cars";

export default function OtherCarsRow({ cars }: { cars: Car[] }) {
  return (
    <section className="border-t border-slate-100 bg-slate-50 py-14">
      <div className="container-page">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-8 w-1 rounded-full bg-gradient-to-b from-[#003469] to-[#2f6bb0]" />
          <h2 className="text-2xl font-extrabold text-slate-900">Các dòng xe VinFast khác</h2>
        </div>

        <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
          {cars.map((car) => {
            const price = getPriceInfo(car);
            return (
            <a
              key={car.slug}
              href={`/san-pham/${car.slug}`}
              title={car.name}
              className="group w-[240px] flex-shrink-0 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
                <span className="absolute right-2.5 top-2.5 z-10 rounded-full bg-[#c8102e] px-2 py-0.5 text-[11px] font-bold text-white shadow">
                  -{price.percent}%
                </span>
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="240px"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900 group-hover:text-[#003469]">{car.name}</h3>
                <span className="mt-1 block text-lg font-extrabold text-[#c8102e]">
                  {price.sale}đ
                </span>
                <span className="block text-xs text-slate-400 line-through">
                  {price.original}đ
                </span>
              </div>
            </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
