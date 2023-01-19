import "./ProjetosCardStyles.css";

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
          <a
            href={view}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Projeto
          </a>

          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Código
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjetosCard;
