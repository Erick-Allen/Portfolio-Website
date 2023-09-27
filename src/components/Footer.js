import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className='socialMedia'>
        <a href="mailto:allen.erick18@gmaill.com">
        <EmailIcon />
        </a>
        <a href="https://www.linkedin.com/in/erick-allen-tech/">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/erick-allen">
        <GitHubIcon />
        </a>
        </div>
      <div className="attribution-container">
        <a href="https://www.flaticon.com/free-icons/html-5" title="html 5 icons">Html 5 icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/css-3" title="css 3 icons">Css 3 icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Kiranshastry - Flaticon</a>
      </div>
      <p> &copy; 2023 erick-allen.github.io</p>
    </div>
  )
}

export default Footer
