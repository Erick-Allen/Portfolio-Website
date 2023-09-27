import {React, useEffect, useState} from 'react';

import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';
import ClearIcon from '@mui/icons-material/Clear';

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

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
        <Link to ='/'> Home </Link>
        <Link to ="/Projects"> Projects </Link>
        <Link to ="/Experience"> Experience </Link>
      </div>
    </div>
  )
}

export default Navbar
