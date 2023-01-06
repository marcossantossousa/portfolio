import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div>
          <div className="entre-contato">
            <h4 className="contato-footer">Contato</h4>

            <div className="social ">
              <FaInstagram
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />

              <a
                href="www.linkedin.com/in/marcossantosdeveloper"
                target="_blank"
              >
                <FaLinkedinIn
                  size={20}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
              <a href="https://github.com/marcossantossousa" target="_blank">
                {" "}
                <FaGithub
                  size={20}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>

              <a href="mailto:marckossanttos@gmail.com" target="_blank">
                <FaEnvelope
                  size={20}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
              <a href="https://wa.me/5571999942335" target="_blank">
                <FaWhatsapp
                  size={20}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p>Desenvolvedor frontend</p>
    </div>
  );
};

export default Footer;
