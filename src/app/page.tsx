import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import StatsBar from "@/components/StatsBar";
import ProductGrid from "@/components/ProductGrid";
import FastAccess from "@/components/FastAccess";
import SellerInfo from "@/components/SellerInfo";
import TestDriveForm from "@/components/TestDriveForm";
import Footer from "@/components/Footer";
import FloatingCall from "@/components/FloatingCall";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <StatsBar />
        <ProductGrid />
        <FastAccess />
        <SellerInfo />
        <TestDriveForm />
      </main>
      <Footer />
      <FloatingCall />
    </>
  );
}
