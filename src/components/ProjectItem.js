import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ image, name, id }) => {
  const naviagte = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        naviagte("/projects/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
};

export default ProjectItem;
