import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductGrid from "@/components/ProductGrid";
import SellerInfo from "@/components/SellerInfo";
import FastAccess from "@/components/FastAccess";
import TestDriveForm from "@/components/TestDriveForm";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <ProductGrid />
        <SellerInfo />
        <FastAccess />
        <TestDriveForm />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
