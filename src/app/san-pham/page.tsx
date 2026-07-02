import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";
import Breadcrumb from "@/components/Breadcrumb";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Sản phẩm | Vinfast Kim Sơn Long Bình Đồng Nai",
  description: "Danh sách các dòng xe VinFast: VF3, VF5, VF6, VF7, VF8, VF9 và các dòng xe máy điện.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Sản phẩm" }]} />
        <ProductGrid />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
