import React from 'react'
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Project.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="Title">Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjectItem 
          id={idx} 
          name={project.name} 
          image={project.image}
          tags={project.tags}
          description={project.description}
           />;
        })}
      </div>
    </div>
  )
}

export default Projects
