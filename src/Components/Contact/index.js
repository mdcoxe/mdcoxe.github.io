import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const Contact = () => {
  return (
    <div id="contact" className="contacts-container">
      <h2 className="contact-heading">Get in touch</h2>
      <p className="contact-text">MICHAEL COXE</p>
      <p className="contact-text ak">Anchorage, Alaska</p>
      <br />
      <FontAwesomeIcon icon={faEnvelope} className="contact-icon" fixedWidth />
      <span>Send me an email:</span>
      <a href="mailto:mdcoxe@gmail.com">
        <p className="contact-text">mdcoxe@gmail.com</p>
      </a>
      <br />
      <FontAwesomeIcon icon={faPhone} className="contact-icon" fixedWidth />
      <br />
      <div className="foot">
        <p classname="footer">
          © 2021-2022, Designed and Developed by Michael Coxe
        </p>
      </div>
    </div>
  );
};

export default Contact;
