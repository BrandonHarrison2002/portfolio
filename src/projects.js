const projects = [
  // ── Cloud & Systems ──────────────────────────────────────────────────────
  {
    name: "AWS SysOps Cloud Ops Lab",
    desc: "Simulated enterprise AWS environment with EC2, IAM, Security Groups, and S3. Implemented least-privilege roles, backups, and recovery scenarios.",
    stack: ["AWS", "EC2", "IAM", "S3"],
    tag: "systems",
  },
  {
    name: "Windows Sysadmin & PowerShell Lab",
    desc: "Configured Windows Active Directory domain with user and role management. Automated 5+ admin tasks via PowerShell scripts with Task Scheduler.",
    stack: ["Windows Server", "Active Directory", "PowerShell"],
    tag: "systems",
  },
  {
    name: "Home Lab: NAS Server",
    desc: "Built and secured a NAS server with VPN access, disk encryption, and port forwarding for remote access.",
    stack: ["Linux", "VPN", "Networking"],
    tag: "security",
  },

  // ── Full-stack Web ───────────────────────────────────────────────────────
  {
    name: "D&D Character Creator (MERN Stack)",
    desc: "Full-stack MERN web app with hashed passwords, secure session management, REST API integration, and role-based access control.",
    stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    tag: "fullstack",
    link: "https://github.com/michaeljawn/MERNStackWebApp",
  },
  {
    name: "Java Web App with MySQL",
    desc: "Three-tier Java web application with Servlets, JSP, and JDBC on Apache Tomcat. Role-based authentication backed by MySQL.",
    stack: ["Java", "MySQL", "JSP", "Servlets", "Tomcat"],
    tag: "fullstack",
  },

  // ── Security & Low-level ─────────────────────────────────────────────────
  {
    name: "Python Memory Injection",
    desc: "Python memory injection and manipulation experiments exploring low-level process interaction.",
    stack: ["Python"],
    tag: "security",
  },
  {
    name: "DLL Hack",
    desc: "DLL injection research and experimentation project exploring Windows internals.",
    stack: ["C/C++"],
    tag: "security",
  },
  {
    name: "Computer Logic & Organization",
    desc: "Low-level computing, logic gates, and architecture coursework project.",
    stack: ["Assembly", "C"],
    tag: "systems",
  },
  {
    name: "Socket Train",
    desc: "Socket programming and networking experiments exploring TCP/UDP communication.",
    stack: ["Python", "Networking", "Sockets", "Arduino"],
    tag: "systems",
  },

  // ── ML / AI / Computer Vision ────────────────────────────────────────────
  {
    name: "Fall Detector",
    desc: "Computer vision system to detect falls in real-time using OpenCV and ML.",
    stack: ["Python", "OpenCV", "ML"],
    tag: "ml",
  },
  {
    name: "Face Recognition",
    desc: "Face detection and recognition system using computer vision.",
    stack: ["Python", "OpenCV"],
    tag: "ml",
  },
  {
    name: "Fortnite OCR",
    desc: "OCR tool for reading and parsing Fortnite in-game data.",
    stack: ["Python", "OpenCV", "OCR"],
    tag: "ml",
  },
  {
    name: "Speech Detection & Recognition",
    desc: "Real-time speech detection and recognition pipeline with audio processing.",
    stack: ["Python", "ML"],
    tag: "ml",
  },
  {
    name: "TensorFlow Experiments",
    desc: "Machine learning experiments and starter models using TensorFlow.",
    stack: ["Python", "TensorFlow"],
    tag: "ml",
  },

  // ── Hardware ─────────────────────────────────────────────────────────────
  {
    name: "LED Visualizer",
    desc: "Audio-reactive LED strip that responds to music in real-time using frequency analysis.",
    stack: ["Python", "Arduino"],
    tag: "hardware",
  },
  {
    name: "Motor Control",
    desc: "Motor control and automation project using Arduino.",
    stack: ["Arduino", "C++"],
    tag: "hardware",
  },

  // ── Other ────────────────────────────────────────────────────────────────
  {
    name: "Resume.github.io",
    desc: "Personal resume hosted as a GitHub Pages site.",
    stack: ["HTML", "CSS"],
    tag: "fullstack",
  },
  {
    name: "Discord Bot (TS & Python)",
    desc: "Discord bots built in TypeScript and Python with custom commands and automations.",
    stack: ["TypeScript", "Python", "Discord.js"],
    tag: "fullstack",
  },
  {
    name: "Minecraft Health Monitor",
    desc: "Computer vision tool that monitors in-game health state using screen capture and OCR.",
    stack: ["Python", "OpenCV", "OCR"],
    tag: "game",
  },
  {
    name: "AnitFunValorant",
    desc: "Computer vision tool that monitors in-game state for Valorant using screen capture and OCR.",
    stack: ["Python", "OpenCV", "OCR"],
    tag: "game",
  },
];

export const TAG_LABELS = {
  fullstack: "Full-stack",
  security: "Security",
  hardware: "Hardware",
  ml: "ML / AI",
  game: "Game",
  systems: "Systems",
  other: "Other",
};

export const FILTERS = ["all", "fullstack", "security", "hardware", "ml", "game", "systems", "other"];

export default projects;
