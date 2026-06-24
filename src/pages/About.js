import "../styles/About.css";

const About = () => {
    return(
        <div className="about-content">
            <h1 className="title">About Me</h1>
            <div className="about-card">
                <div className="about-left">
                    <h2 className="sub-title">What I Focus On</h2>
                    <div className="focus-list">
                        <div className="focus-item">
                            <strong>Applied AI Features</strong>
                            <span>Assistant-style querying, classification, retrieval, and automation.</span>
                        </div>
                        <div className="focus-item">
                            <strong>Workflow Automation</strong>
                            <span>Software that helps users manage real work more efficiently.</span>
                        </div>
                        <div className="focus-item">
                            <strong>AI-Ready Systems</strong>
                            <span>APIs, databases, and interfaces built to support AI workflows.</span>
                        </div>
                    </div>
                </div>

                <div className="about-right">
                    <h2 className="sub-title">What I Build</h2>
                    <div className="about-copy">
                        <p className="about-description">
                            I build practical, user-focused software with clean interfaces, reliable backend logic,
                            and AI-assisted features that solve real workflow problems. My projects focus on usability,
                            maintainability, and turning rough ideas into tools that are easy to use and expand.
                        </p>
                        <p className="about-description">
                            Through projects like InvoiceDB, I have worked with React, Python, APIs, SQLite,
                            Docker, and AI-assisted features such as classification and assistant-style querying.
                            I care about building software that is not just functional, but also clear, organized,
                            and useful in real situations.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
};

export default About ;
