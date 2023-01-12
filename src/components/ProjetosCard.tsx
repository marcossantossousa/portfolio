import "./ProjetosCardStyles.css";
import projeto1 from "../assets/projeto1.png";
import { NavLink } from "react-router-dom";

const ProjetosCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading"></h1>
      <div className="project-container">
        <div className="project-card">
          <img src={projeto1} alt="imagem" />
          <h2 className="project-title">Projeto title</h2>
          <div className="pro-datails">
            <p>This text</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn">
                Projeto
              </NavLink>
              <NavLink to="url.com" className="btn">
                Código
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetosCard;
