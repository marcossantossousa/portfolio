import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Projectimg2 from "../components/Projectimg2";
import Trabalho from "../components/Trabalho";

const Projetos = () => {
  return (
    <div>
      <Navbar />
      <Projectimg2 heading="PROJETOS." text="CONFIRA ALGUNS PROJETOS ABAIXO." />
      <Trabalho />
      <Footer />
    </div>
  );
};

export default Projetos;
