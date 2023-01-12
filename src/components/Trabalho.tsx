import "./ProjetosCardStyles.css";
import ProjetosCard from "./ProjetosCard";
import TrabalhoCard from "./TrabalhoCard";

const Trabalho = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projetos</h1>
      <div className="project-container">
        {TrabalhoCard.map((val, ind) => {
          return (
            <ProjetosCard
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
              source={val.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Trabalho;
