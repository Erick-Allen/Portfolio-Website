import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [emailCopied, setEmailCopied] = useState(false);
  const emailAddress = "allen.erick18@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${emailAddress}`;
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="socialMedia" aria-label="Contact links">
          <button className="footer-email-button" onClick={copyEmail} type="button" aria-label="Copy email address">
            <EmailIcon />
            <span className={`footer-copy-status ${emailCopied ? "is-visible" : ""}`} aria-live="polite">
              Email copied
            </span>
          </button>
          <a href="https://www.linkedin.com/in/erick-allen-tech/" aria-label="LinkedIn profile">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/erick-allen" aria-label="GitHub profile">
            <GitHubIcon />
          </a>
        </div>

        <p className="footer-meta">&copy; {currentYear} Erick Allen. Built with React.</p>
      </div>
    </footer>
  )
}

export default Footer
