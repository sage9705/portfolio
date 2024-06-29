import HeroSection from "./components/herosection";
import Navbar from "./components/navbar";
import AboutSection from "./components/aboutsection";
import EmailSection from "./components/emailsection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] justify-between p-24 ">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EmailSection />
    </main>
  );
}
