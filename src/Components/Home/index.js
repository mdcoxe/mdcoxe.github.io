import "./styles.css";
import Typed from "react-typed";

const words = [
  "Software Engineer",
  "Backend Developer",
  "Veteran",
  "Freelancer",
  "Volunteer",
  "Cloud Engineer",
];

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="typed">
        <h1>
          I'm a{" "}
          <Typed strings={words} typeSpeed={100} backSpeed={50} loop="true" />
        </h1>
      </div>
      <p className="home-p">
        Software Engineer, Backend/DevOps/Cloud, Veteran, Freelancer, Volunteer
      </p>
      <p className="home-brand">
        I am a detailed-oriented, backend developer with proven ability to adapt
        and learn quickly. My military and private sector experience provided me
        with the skills to communicate effectively in diverse environments and
        solve problems efficiently.
      </p>
    </div>
  );
};

export default Home;
