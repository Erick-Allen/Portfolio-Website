import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Erick Allen</h2>
        <div className="prompt">
          <p>Computer science student at Lehman College</p>
          <a href="https://www.linkedin.com/in/erick-allen-tech/">
            <LinkedInIcon />
          </a>
          <a href="mailto:allen.erick18@gmaill.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/erick-allen">
            <GitHubIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
