import { TAG_LABELS } from "../projects.js";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const { name, desc, stack, tag, link } = project;

  return (
    <div className="project-card">
      <span className={`project-tag tag-${tag}`}>{TAG_LABELS[tag]}</span>
      <div className="project-name">{name}</div>
      <div className="project-desc">{desc}</div>
      <div className="project-stack">
        {stack.map((s) => (
          <span className="stack-tag" key={s}>
            {s}
          </span>
        ))}
      </div>
      {link && (
        <a className="project-link" href={link} target="_blank" rel="noreferrer">
          View project ↗
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
