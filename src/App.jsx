import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
      return (
            <>
                  <Navbar />
                  <Hero />
                  <hr className="divider" />
                  <Education />
                  <hr className="divider" />
                  <Certifications />
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
