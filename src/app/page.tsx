import ServiçosOferecidos from "@/components/home/ServiçosOferecidos";
import Depoimentos from "@/components/home/Depoimentos";
import HeroSection from "@/components/home/HeroSection";
import AboutUsSection from "@/components/home/AboutUsSection";
import Navbar from "@/components/layout/Navbar/Navbar";
import ShopSection from "@/components/home/ShopSection";
import WhyUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background">
      <Navbar />
      <HeroSection />
      <div className="w-full md:px-8 -mt-15 z-20">
        <AboutUsSection />
      </div>
      <ShopSection />
      <ServiçosOferecidos />
      <WhyUs />
      <Depoimentos />
    </div>
  );
}
