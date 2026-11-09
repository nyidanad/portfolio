import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SpotlightCursor from "@/components/layout/SpotlightCursor";
import Hero from "@/components/layout/sections/Hero";
import About from "@/components/layout/sections/About";
import Projects from "@/components/layout/sections/Projects";
import Docs from "@/components/layout/sections/Docs";
import Contact from "@/components/layout/sections/Contact";


export default function Home() {
  return (
    <>
      <SpotlightCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Docs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
