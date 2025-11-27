import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
