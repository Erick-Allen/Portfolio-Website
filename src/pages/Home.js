import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import About from "./About";
import Projects from "./Projects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <section id="home">
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
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="projects">
       <Projects/>
      </section>

      <section id="contact">
      </section>
      
      <Footer/>
    </div>
  );
};

export default Home;
