import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import { Language } from "../helpers/LanguageList";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, my name is Erick Allen</h2>
        <div className="prompt">
          <p>A front-end developer with a passion for learning and creating. </p>
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
      <div className="language">
        <h1> Languages </h1>
        <div className="language-container">
          {Language.map((element) => {
            return (
              <div className="language-box" key={element.key}>
                <div className="">
                  <div className="img">
                    <img
                      className="language-icon"
                      src={element.icon}
                      alt={element.alt}
                    />
                  </div>
                </div>
                <h3 className="language-title">{element.description}</h3>
              </div>
            );
          })}
        </div>
        <div className="skills">
          <h1>Skills</h1>
          <li>
            <h3>Leadership</h3>
            <span className="bar">
              <span className="leadership"></span>
            </span>
          </li>
          <li>
            <h3>Adaptability</h3>
            <span className="bar">
              <span className="adaptabilty"></span>
            </span>
          </li>
          <li>
            <h3>Communication</h3>
            <span className="bar">
              <span className="communication"></span>
            </span>
          </li>
          <li>
            <h3>Enthusiasm</h3>
            <span className="bar">
              <span className="enthusiasm"></span>
            </span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Home;
