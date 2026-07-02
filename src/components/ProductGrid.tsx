import { CARS } from "@/lib/cars";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function ProductGrid({
  eyebrow = "Sản phẩm",
  title = "Các dòng xe VinFast",
  description = "Khám phá dải sản phẩm xe điện VinFast đa dạng — từ đô thị nhỏ gọn đến SUV cao cấp, phù hợp mọi nhu cầu di chuyển.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CARS.map((car, i) => (
            <Reveal key={car.slug} delay={(i % 4) * 80}>
              <ProductCard car={car} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
