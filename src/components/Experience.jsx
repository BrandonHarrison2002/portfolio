import "./Experience.css";

const EXPERIENCE = [
  {
    title: "President, VEX Robotics Team",
    org: "Monroe County School District",
    date: "Jun 2020 – May 2021",
    bullets: [
      "Oversaw engineering and programming teams of 44+ combined members in robot development.",
      "Organized meetings and fundraisers, acquiring $3,000+ in funding from outside sponsors.",
      "Won a GEMs County Award of Excellence as the top-performing robotics club in the county.",
      "Key founding member — led design and programming teams from the ground up.",
    ],
  },
  {
    title: "Student Worker — IT",
    org: "Monroe County School District",
    date: "Jan 2019 – Jul 2021",
    bullets: [
      "Managed yearly computer setup including software installations and programming tasks.",
      "Contributed to website design efforts, improving user experience and accessibility.",
    ],
  },
  {
    title: "Bartender / Server",
    org: "First Watch Restaurants · Orlando, FL",
    date: "Jan 2023 – Present",
    bullets: [
      "Managed 4–8 tables simultaneously while maintaining accuracy and customer satisfaction.",
      "Mentored new staff and promoted through multiple front-of-house roles.",
    ],
  },
];

function Experience() {
  return (
    <div className="section" id="experience">
      <div className="section-title">Experience</div>
      <div className="experience-list">
        {EXPERIENCE.map((item) => (
          <div className="experience-card" key={item.title}>
            <div className="experience-header">
              <span className="experience-title">{item.title}</span>
              <span className="experience-date">{item.date}</span>
            </div>
            <div className="experience-org">{item.org}</div>
            <ul className="experience-bullets">
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
