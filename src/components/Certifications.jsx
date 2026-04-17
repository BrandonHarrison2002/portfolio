import "./Certifications.css";

const CERTS = [
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
  {
    name: "TestOut IT Fundamentals Pro",
    issuer: "CompTIA",
    date: "Jul 2024",
    earned: true,
  },
  {
    name: "Unity Certifed User: Programmer",
    issuer: "Unity",
    date: "2020",
    earned: true,
  },
  {
    name: "MTA: Introduction to Programming Using Python",
    issuer: "Microsoft",
    date: "2019",
    earned: true,
  },
  {
    name: "MTA: Introduction to Programming Using Java",
    issuer: "Microsoft",
    date: "2019",
    earned: true,
  },
  {
    name: "MTA: Introduction to Programming Using Javascript",
    issuer: "Microsoft",
    date: "2019",
    earned: true,
  },
  {
    name: "MTA: Introduction to Programming Using HTML and CSS",
    issuer: "Microsoft",
    date: "2019",
    earned: true,
  },
  {
    name: "Microsoft Office Specialist",
    issuer: "Microsoft",
    date: "2020",
    earned: true,
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
