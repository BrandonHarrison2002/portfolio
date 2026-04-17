import "./Navbar.css";

function Navbar() {
    const scrollTo = (id) => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

  return (
        <nav className="navbar">
              <span className="navbar-name">Brandon Harrison</span>span>
              <div className="navbar-links">
                      <a onClick={() => scrollTo("education")}>Education</a>a>
                      <a onClick={() => scrollTo("experience")}>Experience</a>a>
                      <a onClick={() => scrollTo("skills")}>Skills</a>a>
                      <a onClick={() => scrollTo("projects")}>Projects</a>a>
                      <a onClick={() => scrollTo("contact")}>Contact</a>a>
              </div>div>
        </nav>nav>
      );
}

export default Navbar;</nav>
