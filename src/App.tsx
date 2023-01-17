import Home from "./routes/Home";
import Projetos from "./routes/Projetos";
import Sobre from "./routes/Sobre";

import Contato from "./routes/Contato";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Contato" element={<Contato />} />
      </Routes>
    </>
  );
}

export default App;
