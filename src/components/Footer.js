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
    </div>
  )
}

export default Footer
