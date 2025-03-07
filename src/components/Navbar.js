import {React, useEffect, useState} from 'react';

import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();
  const navbarHeight = 100;

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
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("experience")}>Experience</button>
        </div>
      
    </div>
  )
}

export default Navbar
