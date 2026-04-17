import { useState } from "react";
import projects, { FILTERS, TAG_LABELS } from "../projects.js";
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.tag === activeFilter);

  return (
    <div className="section" id="projects">
      <div className="section-title">Projects</div>

      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-label">Total projects</div>
          <div className="stat-val">{projects.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Languages used</div>
          <div className="stat-val">12+</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">CTF competitions</div>
          <div className="stat-val">5+</div>
        </div>
      </div>

      <div className="filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn${activeFilter === f ? " active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f === "all" ? "All" : TAG_LABELS[f]}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filtered.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
