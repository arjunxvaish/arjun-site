import Navbar         from "./components/Navbar";
import Hero           from "./components/Hero";
import Experience     from "./components/Experience";
import Projects       from "./components/Projects";
import Certifications from "./components/Certifications";
import Awards         from "./components/Awards";
import Contact        from "./components/Contact";

function App() {
  return (
    <div className="w-full min-w-[100vw] overflow-x-hidden scroll-smooth">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Certifications />
      <Awards />
      <Contact />
    </div>
  );
}

export default App;
