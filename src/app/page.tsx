import HeroSection from "./components/herosection";
import Navbar from "./components/navbar";
import AboutSection from "./components/aboutsection";
import ProjectsSection from "./components/projectsection"
import EmailSection from "./components/emailsection";
import Footer from "./components/footer";
import CTA from "./components/cta";

export default function Home() {
  return (
    <div className="bg-[#121212] min-h-screen">
      <header className="fixed w-full z-50 bg-[#092537]">
        <Navbar />
      </header>
      <main className="flex flex-col items-center justify-center px-4 pt-20 pb-10 sm:px-8 md:px-16 lg:px-24 space-y-16 md:space-y-24">
        <section className="w-full max-w-6xl">
          <HeroSection />
          <CTA />
        </section>
        <section className="w-full max-w-5xl p-6 sm:p-8 md:p-12 rounded-lg">
          <AboutSection />
        </section>
        <section className="w-full max-w-5xl p-6 sm:p-8 md:p-12 rounded-lg">
          <ProjectsSection />
        </section>
        <section className="w-full max-w-5xl p-6 sm:p-8 md:p-12">
          <EmailSection />
        </section>
      </main>
      <footer className="w-full p-4 sm:p-6 mt-16">
        <Footer />
      </footer>
    </div>
  );
}
