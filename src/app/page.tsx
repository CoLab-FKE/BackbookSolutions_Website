import ServiçosOferecidos from "@/components/home/ServiçosOferecidos";
import Depoimentos from "@/components/home/Depoimentos";
import HeroSection from "@/components/home/HeroSection";
import AboutUsSection from "@/components/home/AboutUsSection";
import Navbar from "@/components/layout/Navbar/Navbar";
import ShopSection from "@/components/home/ShopSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background">
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ShopSection />
      <ServiçosOferecidos />
      <Depoimentos />
    </div>
  );
}
