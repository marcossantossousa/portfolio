import { Link } from "react-router-dom";
import "./AboutContentStyles.css";

import buscafilmes from "../assets/buscafilmes.jpg";

import site from "../assets/site.jpg";

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
            <img src={site} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={buscafilmes} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
