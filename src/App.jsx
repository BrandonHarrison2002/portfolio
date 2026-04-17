import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <hr className="divider" />
      <Skills />
      <hr className="divider" />
      <Projects />
      <hr className="divider" />
      <Contact />
    </>
  );
}

export default App;
