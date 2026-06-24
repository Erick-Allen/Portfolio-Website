import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ id, image, name, description, tech }) => {
  const navigate = useNavigate();

  const openProject = () => {
    navigate("/projects/" + id);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  };

  return (
    <div
      className="projectItem"
      onClick={openProject}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="card">
        <div className="project-image-wrap">
          <img className="project-image" src={image} alt={name}/>
        </div>
        <div className="project-card-body">
          <h2 className="project-name">{name}</h2>
          <p className="project-description">{description}</p>
          <div className="project-card-tech">
            {tech.slice(0, 3).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="case-study-link">
            <span>View project</span>
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
