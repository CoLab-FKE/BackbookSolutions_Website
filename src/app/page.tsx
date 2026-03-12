import AboutUsSection from "@/components/home/AboutUsSection";
import CTA from "@/components/home/CTA";
import Depoimentos from "@/components/home/Depoimentos";
import HeroSection from "@/components/home/HeroSection";
import ShopSection from "@/components/home/ShopSection";
import ServicosOferecidos from "@/components/home/ServiçosOferecidos";
import WhyUs from "@/components/home/WhyUs";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background">
      <Navbar />

      <div id="inicio" className="w-full scroll-mt-24">
        <HeroSection />
      </div>

      <div id="sobre" className="w-full md:px-8 -mt-15 z-20 scroll-mt-24">
        <AboutUsSection />
      </div>

      <div id="produtos" className="w-full scroll-mt-24">
        <ShopSection />
      </div>

      <div id="servicos" className="w-full scroll-mt-24">
        <ServicosOferecidos />
      </div>

      <div id="porque-nos" className="w-full scroll-mt-24">
        <WhyUs />
      </div>

      <div id="depoimentos" className="w-full scroll-mt-24">
        <Depoimentos />
      </div>

      <div id="contacto" className="w-full md:px-10 scroll-mt-24">
        <CTA />
      </div>

      <div id="contacto" className="w-full scroll-mt-24">
        <Footer />
      </div>
    </div>
  );
}
