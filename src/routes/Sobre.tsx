import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projectimg2 from "../components/Projectimg2";

const Sobre = () => {
  return (
    <div>
      <Navbar />
      <Projectimg2
        heading="SOBRE MIM."
        text="Sou Desenvolvedor Frontend. Aprimorando meus conhecimentos e habilidades, graduando em ADS."
      />
      <AboutContent />

      <Footer />
    </div>
  );
};

export default Sobre;
