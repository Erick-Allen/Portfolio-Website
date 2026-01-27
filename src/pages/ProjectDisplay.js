import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import "../styles/ProjectDisplay.css"

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];
    const navigate = useNavigate();

  return (
    <div className="project">
        <h1>{project.name}</h1>
        <div className="media-row">
          <button onClick={() => navigate(-1)} className="back-button">
            <ArrowBackIcon />
          </button>
          <a href={project.url} className="img-url">
            <img src={project.demo || project.image} alt="One of my projects" />
          </a>
        </div>
        <p >
            <b className="stack">Stack: {project.tags}</b>
        </p>
        <a href={project.github} id='anchor'>
        <GitHubIcon className="icon" />
        </a>
    </div>
  )
}

export default ProjectDisplay;
