import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CaseGrid from "@/components/CaseGrid";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <CaseGrid />
        </Reveal>
        <Reveal>
          <Recommendations />
        </Reveal>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
