import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projectimg2 from "../components/Projectimg2";
import ProjetosCard from "../components/ProjetosCard";

const Projetos = () => {
  return (
    <div>
      <Navbar />
      <Projectimg2 heading="PROJETOS." text="Alguns dos projetos" />
      <ProjetosCard />

      <Footer />
    </div>
  );
};

export default Projetos;
