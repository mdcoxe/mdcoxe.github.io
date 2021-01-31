import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'
const Contact = () => {

    return  (
        <div id="contact" className="contacts-container">
             <h2 className="contact-heading">Contact Me</h2>
            <div className="contact">
               
                <div className="email">
                    {/* <FontAwesomeIcon icon={faAt} size="3x" /> */}
                    <a href='mailto:mdcoxe@gmail.com'><h3 className="contact-text">mdcoxe@gmail.com</h3></a>
                </div>
                <div className="location">
                {/* <FontAwesomeIcon icon={faLinkedin} size="3x" /> */}
                    <a href="http://linkedin.com/in/michaelcoxe"><h3 className="contact-text">LinkedIn</h3></a>
                </div>
            </div>
            <div className="foot">
                <p classname="footer">© 2021, Designed and Developed by Michael Coxe</p>
            </div>
        </div>
    )
}

export default Contact;