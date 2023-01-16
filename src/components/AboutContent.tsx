import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import reactfrom from "../assets/reactfrom.jpg";

import site from "../assets/site.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Quem sou?</h1>
        <p>
          Sou Desenvolvedor Frontend. Aprimorando meus conhecimentos e
          habilidades, graduando em ADS.
        </p>
        <Link to="/Contato">
          <button className="btn">Contato</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={reactfrom} className="img" alt="true" />
          </div>
          <div className="img-stack botton">
            <img src={site} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
