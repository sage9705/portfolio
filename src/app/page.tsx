import Image from "next/image";
import HeroSection from "./components/herosection";
import Navbar from "./components/navbar";
import AboutSection from "./components/aboutsection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] justify-between p-24 ">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
