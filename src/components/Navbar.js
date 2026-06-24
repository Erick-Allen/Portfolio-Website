import {useEffect, useState} from 'react';
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import ClearIcon from '@mui/icons-material/Clear';

const navSections = ["home", "about", "projects"];

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navbarHeight = 100;

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight - 8;

      if (scrollBottom >= pageBottom) {
        setActiveSection("projects");
        return;
      }

      const scrollMarker = window.scrollY + window.innerHeight * 0.42;
      const currentSection = navSections.reduce((current, id) => {
        const section = document.getElementById(id);

        if (!section) {
          return current;
        }

        return section.offsetTop <= scrollMarker ? id : current;
      }, "home");

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetPosition = section.offsetTop - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth"});
    }
    setExpandNavbar(false);
  }

  const clickHandler = () => {
    setExpandNavbar(prev => !prev);
  }

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={clickHandler}> 
          {expandNavbar ? <ClearIcon /> : <ReorderIcon />}
        </button>
      </div>
      <div className="links">
        <button className={activeSection === "home" ? "active" : ""} onClick={() => scrollToSection("home")}>Home</button>
        <button className={activeSection === "about" ? "active" : ""} onClick={() => scrollToSection("about")}>About</button>
        <button className={activeSection === "projects" ? "active" : ""} onClick={() => scrollToSection("projects")}>Projects</button>
        {/* <button onClick={() => scrollToSection("contact")}>Contact Me</button> */}
        </div>
      
    </div>
  )
}

export default Navbar
