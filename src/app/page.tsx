import ServiçosOferecidos from "@/components/home/ServiçosOferecidos";
import Depoimentos from "@/components/home/Depoimentos";
import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/layout/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col px-8 bg-background">
      <ServiçosOferecidos />
      <Depoimentos />
    </div>
  );
}
