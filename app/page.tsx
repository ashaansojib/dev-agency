import HeroSection from "@/components/home/HeroSection";
import Header from "@/components/shared/Header";
import Services from "@/components/home/Services";
import Featured from "@/components/home/Featured";
import TeamSection from "@/components/home/TeamSection";
import Blogs from "@/components/home/Blogs";
export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Services />
      <Featured />
      <TeamSection />
      <Blogs />
    </main>
  );
}
