import "./Hero.css";

function Hero() {
  return (
    <div className="hero" id="top">
      <div className="hero-tag">Available for opportunities</div>
      <h1>Brandon Harrison</h1>
      <p className="hero-sub">
        Information Technology student at UCF with a cybersecurity focus. I build
        full-stack apps, tinker with hardware, and break things (legally) in CTF
        competitions.
      </p>
      <div className="hero-links">
        <a
          className="btn btn-primary"
          href="https://github.com/BrandonHarrison2002"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
        <a
          className="btn"
          href="https://linkedin.com/in/bharrison02/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
        <a className="btn" href="mailto:brandonharrison2002@gmail.com">
          Email me
        </a>
      </div>
    </div>
  );
}

export default Hero;
