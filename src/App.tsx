import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MouseGlow from "./components/Cursor/MouseGlow";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="bg-[#09090B] text-white">
      <MouseGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;