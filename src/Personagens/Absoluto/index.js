import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import AtaquesPrimarias from './AtaquesPrimarias';
import HabilidadePassiva from './HabilidadePassiva';
import Dispositivos from './Dispositivos';
import Poderes from './Poderes';

function Absoluto() {
  const [armaPrimaria, setArmaPrimaria] = useState([]);
  const [habilidadePassiva, setHabilidadePassiva] = useState(null);
  const [dispositivos, setDispositivos] = useState([]);
  const [poderes, setPoderes] = useState([]);
  
  const navigate = useNavigate();

  const handleCriarFicha = () => {
    const ficha = {
      tipo: 'absoluto',
      armaPrimaria,
      habilidadePassiva,
      dispositivos,
      poderes,
      statsFixos: {
        PE: 7,
        AO: 6,
        IDE: 2,
        defesa: '2 dados',
        tecnicas: 'Deserto d12, Cidade d10, Lixão d10, Montanha d12'
      },
      modoReivolk: 'Sempre que se iniciar sua primeira rodada passiva, atacará todos os inimigos do mapa se teletransportando para as costas deles para atacá-los não dando chance de revidarem, atacará os inimigos se teletransportando na distância necessária para executar o ataque ignorando pontos de conexão e após atacar todos ficará no local onde atacou o último inimigo.'
    };

    navigate('/ficha', { state: ficha });
  };

  return (
    <div className="App" style={{ backgroundColor: '#282c34', minHeight: '100vh' }}>
      <header className="App-header">
        <h1>Absoluto (Controlador)</h1>
        
        <AtaquesPrimarias setSelecionados={setArmaPrimaria} />
        <HabilidadePassiva setSelecionada={setHabilidadePassiva} />
        <Dispositivos setSelecionados={setDispositivos} />
        <Poderes setSelecionados={setPoderes} />
        
        <footer className="footer-buttons">
          <button onClick={handleCriarFicha} className="btn-acao">Criar Ficha</button>
          <button onClick={() => navigate('/')} className="btn-acao">Home</button>
        </footer>
      </header>
    </div>
  );
}

export default Absoluto;