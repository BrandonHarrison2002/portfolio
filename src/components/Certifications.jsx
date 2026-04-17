import "./Certifications.css";

const CERTS = [
  {
    name: "AWS Academy Graduate — Cloud Operations",
    issuer: "Amazon Web Services (AWS)",
    date: "Feb 2026",
    earned: true,
  },
  {
    name: "TestOut IT Fundamentals Pro",
    issuer: "CompTIA",
    date: "Jul 2024",
    earned: true,
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: "Expected Jun 2026",
    earned: false,
  },
  {
    name: "AWS Certified CloudOps Engineer",
    issuer: "Amazon Web Services (AWS)",
    date: "Expected Aug 2026",
    earned: false,
  },
];

function Certifications() {
  return (
    <div className="section" id="certifications">
      <div className="section-title">Certifications</div>
      <div className="certs-grid">
        {CERTS.map((cert) => (
          <div className="cert-card" key={cert.name}>
            <div className="cert-name">{cert.name}</div>
            <div className="cert-issuer">{cert.issuer}</div>
            <span className={`cert-date ${cert.earned ? "earned" : "expected"}`}>
              {cert.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
