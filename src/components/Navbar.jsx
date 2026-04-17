import "./Navbar.css";

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <span className="navbar-name">Brandon Harrison</span>
      <div className="navbar-links">
        <a onClick={() => scrollTo("skills")}>Skills</a>
        <a onClick={() => scrollTo("projects")}>Projects</a>
        <a onClick={() => scrollTo("contact")}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
