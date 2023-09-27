import React from 'react'
import { useParams } from "react-router-dom";
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';

import "../styles/ProjectDisplay.css"

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];
  return (
    <div className="project">
        <h1>{project.name}</h1>
        <a href={project.url}>
        <img src={project.image} alt="One of my projects" />
        </a>
        <p>
            <b>Skills: {project.skills}</b>
        </p>
        <a href={project.url}>
        <GitHubIcon />
        </a>
    </div>
  )
}

export default ProjectDisplay;
