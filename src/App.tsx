import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import MouseGlow from "./components/Cursor/MouseGlow";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme } = useTheme();

  return (
    <div className="bg-white text-slate-900 dark:bg-[#09090B] dark:text-white">
      <Toaster
        position="top-right"
        toastOptions={{
          style:
            theme === "dark"
              ? {
                  background: "#18181b",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.1)",
                }
              : {
                  background: "#ffffff",
                  color: "#0f172a",
                  border: "1px solid rgba(0,0,0,0.1)",
                },
        }}
      />
      <MouseGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;