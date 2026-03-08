import ServiçosOferecidos from "@/components/home/ServiçosOferecidos";
import Depoimentos from "@/components/home/Depoimentos";
import HeroSection from "@/components/home/HeroSection";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import AboutUsSection from "@/components/home/AboutUsSection";
import Navbar from "@/components/layout/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ServiçosOferecidos />
      <Depoimentos
    </div>
  );
}
