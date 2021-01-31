import './styles.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Experience = () => {
    

    return (
        <div id="experience" className="xp-container">
          <div className="skew"></div>
            <h1>Experience</h1>
         
            <div className="resume">
                <p>
                    Download and view my resume
                </p>
                <a href="/MichaelCoxeResume.pdf" download>
                    <img alt='resume thumbnail' src="/resumeimg.png"/>
                </a>
            </div>
            <hr/>
            <div className="linkedin">
                <a href="http://linkedin.com/in/michaelcoxe" target='blank'>
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className='xp-icon linkedin-icon'
                        size="6x"
                        />
                </a>
                <p>
                    Connect with me on LinkedIn
                </p>
            </div>
            <hr/>
            <div className="github">
                <p>
                    Check-out my repositories on Github
                </p>
                <a href="http://github.com/mdcoxe" target='blank'>
                    <FontAwesomeIcon
                        icon={faGithub}
                        className='xp-icon github-icon'
                        size='6x'
                        />
                </a>
            </div>
       
        </div>      
    ) 
};

export default Experience;