import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import Experience     from "./components/Experience";
import Projects       from "./components/Projects";
import Certifications from "./components/Certifications";
import Awards         from "./components/Awards";          // ← new
import Contact        from "./components/Contact";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Certifications />
      <Awards />        {/* ← new section */}
      <Contact />
    </div>
  );
}

export default App;
