import "./styles.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Jumbotron from "react-bootstrap/Jumbotron";

const Experience = () => {
  return (
    <div id="experience" className="xp-container">
      <h1 className="xp-heading">Experience</h1>

      {/* <div className="resume">
        <div className="box">
          <p>Download and view my resume</p>
        </div>
        <div className="box">
          <a
            href="https://docs.google.com/document/d/18ZxKX5QY3u4OSzY9R9t7DO3nonCis2-byCmESzpMdDU/edit?usp=sharing"
            target="blank"
          >
            <img alt="resume thumbnail" src="/resumeimg.png" />
          </a>
        </div>
      </div>
      <hr /> */}

      <div className="linkedin">
        <div className="box">
          <a href="http://linkedin.com/in/michaelcoxe" target="blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="xp-icon linkedin-icon"
              size="8x"
            />
          </a>
        </div>
        <div className="box">
          {/* <a href="http://linkedin.com/in/michaelcoxe" target='blank'> */}
          <p>Connect with me on LinkedIn</p>
          {/* </a> */}
        </div>
      </div>

      <hr />
      <div className="github">
        <div className="box">
          <p>Check-out my repositories on Github</p>
        </div>
        <div className="box">
          <a href="http://github.com/mdcoxe" target="blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="xp-icon github-icon"
              size="8x"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
