import Image from "next/image";
import type { Car } from "@/types/car";

export default function OtherCarsRow({ cars }: { cars: Car[] }) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-[1140px] px-4">
        <p className="mb-5 border-l-8 border-[#003469] px-2.5 text-xl font-bold uppercase text-[#333]">
          Các dòng xe VinFast khác
        </p>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {cars.map((car) => (
            <a
              key={car.slug}
              href={`/san-pham/${car.slug}`}
              title={car.name}
              className="group w-[220px] flex-shrink-0 rounded border border-[#e7e5e5] p-2"
            >
              <div className="relative aspect-[220/129] w-full overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="220px"
                />
              </div>
              <div className="p-2 text-center">
                <h3 className="text-sm font-medium text-[#333] group-hover:text-[#003469]">
                  {car.name}
                </h3>
                <span className="mt-1 block text-sm font-bold text-[#c8102e]">{car.price}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
