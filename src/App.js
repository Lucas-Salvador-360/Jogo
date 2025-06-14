import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import newLogo from './img/image.png';
import './App.css';
import ButtonCustom from './buttonCuston';
import Impacto from './Personagens/impacto/AtaquesSemLimites';

import FichaDoJogador from './Personagens/FichaDoJogador';
import Radiacao from './Personagens/radiacao/AtaqueSemLimites';
import LuaNegra from './Personagens/luaNegra/AtaquesPrimarias';
import Bruce from './Personagens/Bruce/AtaquesPrimarias';
import CavaleiroEclipse from './Personagens/CavaleiroEclipse/AtaquesPrimarias';
import Kader from './Personagens/Kader/AtaquesPrimarias';
import Tai from './Personagens/Tai/AtaquesSemLimites';
import AtomicoExplosao from './Personagens/Atômico(Explosão)/AtaquesSemLimites';
import CaosAtaquesPrimarias from './Personagens/Caos ( O Devorador )/AtaquesPrimarias';
import CaosPoderes from './Personagens/Caos ( O Devorador )/Poderes';
import CaosHabilidadePassiva from './Personagens/Caos ( O Devorador )/HabilidadePassiva';
import CaosHabilidadeEspecial from './Personagens/Caos ( O Devorador )/HabilidadeEspecial';
import Invicto from './Personagens/Invicto/AtaquesSemLimites';
import Absoluto from './Personagens/Absoluto';
import MULHERtITANIUM from './Personagens/mULHERtITANIUM';
import Ilusao from './Personagens/Ilusão';
import Alpha from './Personagens/Alpha';
import Tecnologia from './Personagens/Tecnologia';
import ArcoNegro from './Personagens/ArcoNegro';
import Vazio from './Personagens/Vazio';
import Energz from './Personagens/Energz';

function App() {
  const [ficha, setFicha] = useState({});

  return (
    <Router>
    <Routes>
      <Route
        path="/"
        element={
          <div className="App-header">
            <img src={newLogo} className="App-logo" alt="logo" />
            <p>Escolha um personagem:</p>
            <div className="header-buttons">
              <ButtonCustom>
                <Link to="/impacto">Impacto</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/radiacao">Radiação</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/luanegra">Lua Negra</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/bruce">Bruce</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/cavaleiroeclipse">Cavaleiro do Eclipse</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/kader">Kader</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/tai">Tai</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/atomico-explosao">Atômico(Explosão)</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/caos/ataques">Caos (O Devorador)</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/invicto">Invicto (Resistente)</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/absoluto">Absoluto (Controlador)</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/mULHERtITANIUM">MULHER TITANIUM (Destruidora)</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/ilusao">Ilusão (Estrategista)</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/alpha">Alpha (Dono do Tempo)</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/tecnologia">Tecnologia (Duelista)</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/arconegro">Arco Negro (Sanguinário)</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/vazio">Vazio (?????)</Link>
              </ButtonCustom>
              <ButtonCustom>
                <Link to="/energz">Energz (Poderoso)</Link>
              </ButtonCustom>
            </div>
          </div>
        }
      />
      <Route path="/impacto" element={<Impacto />} />
      <Route path="/radiacao" element={<Radiacao />} />
      <Route path="/luanegra" element={<LuaNegra />} />
      <Route path="/bruce" element={<Bruce />} />
      <Route path="/cavaleiroeclipse" element={<CavaleiroEclipse />} />
      <Route path="/kader" element={<Kader />} />
      <Route path="/tai" element={<Tai />} />
      <Route path="/atomico-explosao" element={<AtomicoExplosao />} />
      <Route path="/ficha" element={<FichaDoJogador />} />
      <Route path="/caos/ataques" element={<CaosAtaquesPrimarias setFicha={setFicha} />} />
      <Route path="/caos/poderes" element={<CaosPoderes setFicha={setFicha} />} />
      <Route path="/caos/habilidade-passiva" element={<CaosHabilidadePassiva setFicha={setFicha} />} />
      <Route path="/caos/habilidade-especial" element={<CaosHabilidadeEspecial setFicha={setFicha} />} />
      <Route path="/invicto" element={<Invicto />} />
      <Route path="/absoluto" element={<Absoluto />} />
      <Route path="/mULHERtITANIUM" element={<MULHERtITANIUM />} />
      <Route path="/tecnologia" element={<Tecnologia />} />
      <Route path="/ilusao" element={<Ilusao />} />
      <Route path="/alpha" element={<Alpha />} />
      <Route path="/arconegro" element={<ArcoNegro />} />
      <Route path="/vazio" element={<Vazio />} />
      <Route path="/energz" element={<Energz />} />
    </Routes>
    </Router>
  );
}

export default App;
