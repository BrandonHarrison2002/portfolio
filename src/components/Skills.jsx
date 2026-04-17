import "./Skills.css";

const SKILLS = [
  "Python", "Java", "JavaScript", "TypeScript", "C/C++", "SQL", "PHP",
  "Bash", "PowerShell", "React", "Node.js", "MongoDB", "Express", "MySQL",
  "AWS (EC2, IAM, S3)", "Windows Server / AD", "Linux (Kali, Ubuntu)",
  "Wireshark", "Burp Suite", "Nmap", "Metasploit", "Git", "Arduino",
  "TensorFlow", "OpenCV",
];

function Skills() {
  return (
    <div className="section" id="skills">
      <div className="section-title">Technical skills</div>
      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <span className="skill-pill" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
