import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Projectimg2 from "../components/Projectimg2";

const Sobre = () => {
  return (
    <div>
      <Navbar />
      <Projectimg2 heading="SOBRE MIM." text="Sou Desenvolvedor Frontend." />
      <AboutContent />

      <Footer />
    </div>
  );
};

export default Sobre;
