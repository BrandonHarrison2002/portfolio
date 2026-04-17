import "./Contact.css";

function Contact() {
  return (
    <div className="section" id="contact">
      <div className="section-title">Contact</div>
      <div className="contact-row">
        <div className="contact-item">📍 Orlando, FL</div>
        <div className="contact-item">
          ✉️{" "}
          <a href="mailto:brandonharrison2002@gmail.com">
            brandonharrison2002@gmail.com
          </a>
        </div>
        <div className="contact-item">
          🔗{" "}
          <a href="https://linkedin.com/in/bharrison02/" target="_blank" rel="noreferrer">
            linkedin.com/in/bharrison02
          </a>
        </div>
        <div className="contact-item">
          💻{" "}
          <a href="https://github.com/BrandonHarrison2002" target="_blank" rel="noreferrer">
            github.com/BrandonHarrison2002
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
