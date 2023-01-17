import "./FormStyles.css";

function Form() {
  return (
    <div className="form">
      <form>
        <label>Seu nome:</label>
        <input type="text" />
        <label>Seu Email:</label>
        <input type="email" />
        <label>Assunto:</label>
        <input type="text" />
        <label>Mensagem</label>
        <textarea rows="6" placeholder="Escreva sua mensagem aqui"></textarea>
        <button className="btn">Enviar</button>
      </form>
    </div>
  );
}

export default Form;
