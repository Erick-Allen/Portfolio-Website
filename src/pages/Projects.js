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
          key={project.id}
          id={idx} 
          name={project.name} 
          image={project.image}
          description={project.description}
          tech={project.tech}
           />;
        })}
      </div>
    </div>
  )
}

export default Projects
