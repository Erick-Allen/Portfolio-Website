import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LaunchIcon from '@mui/icons-material/Launch';

import "../styles/ProjectDisplay.css"

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];
    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [id]);

    if (!project) {
      return (
        <main className="project">
          <button onClick={() => navigate("/")} className="back-button" aria-label="Back to home">
            <ArrowBackIcon />
          </button>
          <h1>Project Not Found</h1>
        </main>
      );
    }

  return (
    <main className="project">
        <div className="project-header">
          <div>
            <button onClick={() => navigate(-1)} className="back-to-projects" type="button">
              <ArrowBackIcon />
              <span>Back To Projects</span>
            </button>
            <p className="project-eyebrow">Project</p>
            <h1>{project.name}</h1>
            <p className="project-summary">{project.summary}</p>
          </div>
        </div>

        <section className="project-detail-card">
          <a href={project.url} className="img-url" target="_blank" rel="noreferrer">
            <img className="project-detail-image" src={project.demo || project.image} alt={project.alt} />
          </a>

          <div className="project-info">
            <div className="project-section">
              <h2>Problem</h2>
              <p>{project.problem}</p>
            </div>

            <div className="project-section">
              <h2>Outcome</h2>
              <p>{project.outcome}</p>
            </div>

            <div className="project-section">
              <h2>Key Work</h2>
              <ul className="project-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="project-footer">
          <div className="tech-list" aria-label="Project technologies">
            {project.tech.map((item) => (
              <span className="tech-chip" key={item}>{item}</span>
            ))}
          </div>

          <div className="project-actions">
            <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
              <GitHubIcon />
              <span>GitHub</span>
            </a>
            <a href={project.url} className="project-link" target="_blank" rel="noreferrer">
              <LaunchIcon />
              <span>Open Project</span>
            </a>
          </div>
        </section>
    </main>
  )
}

export default ProjectDisplay;
