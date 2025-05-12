import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import newLogo from './img/image.png';
import './App.css';
import ButtonCustom from './buttonCuston';
import Impacto from './Personagens/impacto/AtaquesSemLimites';

import FichaDoJogador from './Personagens/FichaDoJogador';
import Radiacao from './Personagens/radiacao/AtaqueSemLimites';
import LuaNegra from './Personagens/luaNegra/AtaquesPrimarias'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Página Inicial */}
          <Route
            path="/"
            element={
              <div className="App-header">
                <img src={newLogo} className="App-logo" alt="logo" />
                <p>Escolha um personagem:</p>
                <div className="header-buttons">
                  <Link to="/impacto">
                    <ButtonCustom>Impacto</ButtonCustom>
                  </Link>
                  <Link to="/radiacao">
                    <ButtonCustom>Radiação</ButtonCustom>
                  </Link>
                  <Link to="/luanegra">
                    <ButtonCustom>Lua Negra</ButtonCustom>
                  </Link>
                </div>
              </div>
            }
          />

          {/* Rotas de personagens */}
          <Route path="/impacto" element={<Impacto />} />
          <Route path="/radiacao" element={<Radiacao />} />
          <Route path="/luanegra" element={<LuaNegra />} />
          <Route path="/ficha" element={<FichaDoJogador />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
