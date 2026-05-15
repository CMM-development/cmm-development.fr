import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Method from "@/components/Method";
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
        <Stats />
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
          <Method />
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
