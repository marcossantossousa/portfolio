import "./HeroImgStyles.css";

import IntroImg from "../assets/intro-bg.gif";
import { Link } from "react-router-dom";

export const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Olá!</p>
        <h1>Frontend Developer.</h1>
        <div>
          <Link to="/Projetos" className="btn">
            Projetos
          </Link>
          <Link to="/Contato" className="btn btn-light">
            Contato
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
