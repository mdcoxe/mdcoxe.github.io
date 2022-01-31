import "./styles.css";

const Skills = () => {
  return (
    <div id="skills" className="skills-container ">
      <h1 className="skills-heading">Skills</h1>
      <h2 className="skills-title">Languages:</h2>
      <p className="skills-text">
        Javascript | Python | HTML | CSS | Ruby | Markdown{" "}
      </p>
      <h2 className="skills-title">DevOps/Cloud Technologies:</h2>
      <p className="skills-text">
        AWS/AWS-CDK | Vagrant | VirtualBox | Terraform | Ansible{" "}
      </p>
      <h2 className="skills-title">Backend:</h2>
      <p className="skills-text">NodeJS | ExpressJS | Ruby on Rails | Django</p>
      <h2 className="skills-title">Frontend:</h2>
      <p className="skills-text">
        React | React Native | Sass | Bootstrap | React-Bootstrap | Material-UI{" "}
      </p>
      <h2 className="skills-title">Tools:</h2>
      <p className="skills-text">
        Postman | Git | Github | Heroku | K6 | Grafana | Jupyter Notebooks |{" "}
      </p>
      <h2 className="skills-title">Databases:</h2>
      <p className="skills-text">MongoDB | PostgreSQL | InfuxDB</p>
      <h2 className="skills-title">Productivity:</h2>
      <p className="skills-text">
        Zoom | Google Meet | Slack | Discord | Microsoft Teams | Trello
      </p>
    </div>
  );
};

export default Skills;
