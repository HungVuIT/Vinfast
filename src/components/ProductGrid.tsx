import Image from "next/image";
import { CARS } from "@/lib/cars";

export default function ProductGrid() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-medium uppercase text-[#333] md:text-[27px]">
            Các dòng xe VinFast
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {CARS.map((car) => (
            <div key={car.slug} className="border border-[#e7e5e5] p-[5px]">
              <div className="group flex h-full flex-col">
                <a
                  href={`/san-pham/${car.slug}`}
                  title={car.name}
                  className="block overflow-hidden"
                >
                  <div className="relative aspect-[400/300] w-full">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    />
                  </div>
                </a>

                <div className="flex flex-1 flex-col items-center px-2 py-4 text-center">
                  <h3 className="text-lg font-medium">
                    <a
                      href={`/san-pham/${car.slug}`}
                      title={car.name}
                      className="text-[#333] hover:text-[#003469]"
                    >
                      {car.name}
                    </a>
                  </h3>

                  <div className="mt-2">
                    <span className="block text-[110%] font-bold text-[#c8102e]">
                      {car.price}
                    </span>
                  </div>

                  <a
                    href={`/san-pham/${car.slug}`}
                    title="Khám phá ngay"
                    className="relative mt-4 inline-block rounded border border-[#003469] py-[7px] pl-3 pr-[47px] text-sm font-medium text-[#003469] transition-colors hover:bg-[#003469] hover:text-white"
                  >
                    Chi tiết
                    <span className="absolute right-0 top-0 flex h-full w-[35px] items-center justify-center bg-[#003469] text-white">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7.21 14.77a.75.75 0 01.02-1.06L11.17 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
