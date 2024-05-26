import HeroSection from "@/components/home/HeroSection";
import Header from "@/components/shared/Header";
import Services from "@/components/home/Services";
import Featured from "@/components/home/Featured";
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Services />
      <Featured />
    </main>
  );
}
