import "./Education.css";

function Education() {
  return (
    <div className="section" id="education">
      <div className="section-title">Education</div>
      <div className="education-card">
        <div className="education-header">
          <span className="education-school">University of Central Florida</span>
          <span className="education-date">2021 – July 2026</span>
        </div>
        <div className="education-degree">
          Bachelor of Science in Information Technology · Cybersecurity Focus
        </div>
        <div className="education-badges">
          <span className="education-badge">Dean's List — Dec 2024</span>
          <span className="education-badge">Hack@UCF Member</span>
          <span className="education-badge">UCF Robotics Club</span>
        </div>
      </div>
    </div>
  );
}

export default Education;
