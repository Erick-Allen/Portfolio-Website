import "../styles/About.css";

const About = () => {
    return(
        <div id="about">
            <h1 className="title">About Me</h1>
            <div className="about-card">
                <div className="about-left">
                   <h2 className="sub-title">Skills</h2>
                    <div className="skills-chips">
                        <span className="chip">Python</span>
                        <span className="chip">JavaScript</span>
                        <span className="chip">Java</span>
                        <span className="chip">Swift</span>
                        <span className="chip">SQLite</span>
                        <span className="chip">Docker</span>
                        <span className="chip">React</span>
                    </div>
                </div>

                <div className="about-right">
                    <h2 className="sub-title">What Drives My Work</h2>
                    <p className="about-description">
                        I primarily build projects for everyday use, focusing on tools that are easy to access and scale as they grow. 
                        I enjoy working on problems where small design decisions make a big difference in usability. 
                        Python remains my language of choice thanks to its rich libraries and flexibility, especially when working with data.    
                        I'm most interested in building software that adds depth to a project while remaining intuitive for a user at any level.
                        </p>
                </div>
                
            </div>
        </div>
    )
};

export default About ;