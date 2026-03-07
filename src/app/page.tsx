import HeroSection from "@/components/home/HeroSection";
import Navbar from "@/components/layout/Navbar/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col px-8 bg-background">
      <Navbar />
      <HeroSection />
    </div>
  );
}
