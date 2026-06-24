import { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import About from "./About";
import Projects from "./Projects";
import Footer from "../components/Footer";

const typewriterPhrases = [
  "Building practical AI-assisted tools",
  "React interfaces + Python backends",
  "Workflow apps, APIs, and automation",
  "Turning rough ideas into useful software",
];

const Home = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex];
    const isPhraseComplete = characterCount === currentPhrase.length;
    const isPhraseCleared = characterCount === 0;

    const delay = isPhraseComplete && !isDeleting
      ? 1700
      : isDeleting
        ? 45
        : 80;

    const timeout = setTimeout(() => {
      if (isPhraseComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isPhraseCleared && isDeleting) {
        setIsDeleting(false);
        setPhraseIndex((currentIndex) => (currentIndex + 1) % typewriterPhrases.length);
        return;
      }

      setCharacterCount((count) => count + (isDeleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timeout);
  }, [characterCount, isDeleting, phraseIndex]);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const typewriterText = typewriterPhrases[phraseIndex].slice(0, characterCount);
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
    <div className="home">
      <section id="home" className="reveal-on-scroll">
        <h2>Erick Allen</h2>
        <div className="prompt">
          <p className="hero-subtitle">AI Engineer & Agentic AI</p>
          <p className="typewriter-line" aria-label={typewriterPhrases[phraseIndex]}>
            {typewriterText}
            <span className="typewriter-cursor" aria-hidden="true"></span>
          </p>
          <a href="https://www.linkedin.com/in/erick-allen-tech/" aria-label="LinkedIn profile">
            <LinkedInIcon />
          </a>
          <button className="icon-button" onClick={copyEmail} type="button" aria-label="Copy email address">
            <EmailIcon />
          </button>
          <a href="https://github.com/erick-allen" aria-label="GitHub profile">
            <GitHubIcon />
          </a>
          <span className={`email-copy-status ${emailCopied ? "is-visible" : ""}`} aria-live="polite">
            Email copied
          </span>
        </div>
      </section>

      <section id="about" className="reveal-on-scroll">
        <About/>
      </section>

      <section id="projects" className="reveal-on-scroll">
       <Projects/>
      </section>

      <section id="contact">
      </section>
      
      <Footer/>
    </div>
  );
};

export default Home;
