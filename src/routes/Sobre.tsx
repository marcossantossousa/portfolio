import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projectimg2 from "../components/Projectimg2";

const Sobre = () => {
  return (
    <div>
      <Navbar />
      <Projectimg2
        heading="SOBRE MIM."
        text="Sou Desenvolvedor Frontend, graduando em Análise e Desenvolvimento de Sistemas, aprimorando meus conhecimentos nas seguintes tecnologias: HTML, CSS, JavaScript, ReactJS, Material UI, Typescript e React Native. Tenho como objetivo resolver problemas reais por meio da tecnologia e por isso me desafio constantemente em busca de conhecimento."
      />
      <Footer />
    </div>
  );
};

export default Sobre;
