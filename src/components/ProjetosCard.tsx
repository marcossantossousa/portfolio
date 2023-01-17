import "./ProjetosCardStyles.css";
import { NavLink } from "react-router-dom";

interface ProjetosCardProps {
  title: string;
  imgsrc: string;
  text: string;
  view: string;
  source: string;
}

const ProjetosCard: React.FC<ProjetosCardProps> = ({
  title,
  imgsrc,
  text,
  view,
  source,
}) => {
  return (
    <div className="project-card">
      <img src={imgsrc} alt="imagem" />
      <h2 className="project-title">{title}</h2>
      <div className="pro-datails">
        <p>{text}</p>
        <div className="pro-btns">
          <NavLink to={view} className="btn">
            Projeto
          </NavLink>

          <NavLink to={source} className="btn">
            Código
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjetosCard;
