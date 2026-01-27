import { useNavigate } from "react-router-dom";

const ProjectItem = ({ id, image, name, tags, description }) => {
  const naviagte = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        naviagte("/projects/" + id);
      }}
    >
      <div className="card">
        <img className="project-image" src={image} alt={name}/>
        <div className="content">
          <h1 className="project-title-inhover">{name}</h1>
          <p className="project-description">{description}</p>
        </div>
      </div>
      <div className="project-caption">
        <h1 className="project-name"> {name} </h1>
        <p className="project-tags">{tags}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
