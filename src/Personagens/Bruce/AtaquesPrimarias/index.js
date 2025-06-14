import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';
import Dispositivos from '../Dispositivos';
import Poderes from '../Poderes';
import HabilidadePassiva from '../HabilidadePassiva';
import HabilidadeEspecial from '../HabilidadeEspecial';

function Bruce() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [selectedDispositivos, setSelectedDispositivos] = useState([]);
  const [selectedPoderes, setSelectedPoderes] = useState(null);
  const [habilidadePassiva, setHabilidadePassiva] = useState(null);
  const [habilidadeEspecial, setHabilidadeEspecial] = useState(null);

  const armas = [
    { nome: 'Sniper 3000', descricao: 'Dano 19 | Distância 8/20 | Segundos 3 | Dados 1 | Ambiente T/A' },
    { nome: 'Ak-47xr', descricao: 'Dano 9 | Distância 2/10 | Segundos 2 | Dados 2 | Ambiente T/A' },
    { nome: 'Scorpion', descricao: 'Dano 4 | Distância 1/6 | Segundos 1 | Dados 3 | Ambiente T/A' }
  ];

  const handleSelect = (i) => setSelected(i === selected ? null : i);

  const handleCriarFicha = () => {
    const ficha = {
      tipo: 'bruce',
      armaPrimaria: armas[selected],
      dispositivos: selectedDispositivos,
      poderes: selectedPoderes,
      habilidadePassiva,
      habilidadeEspecial,
      statsFixos: { 
        PE: 3, 
        AO: 8, 
        IDE: 6, 
        defesa: '1 dado' 
      },
      modoReivolk: 'Modo Reivolk, Precisão de um Deus: O número dos seus dados de ataque sempre será 6.'
    };

    navigate('/ficha', { state: ficha });
  };

  return (
    <div className="App" style={{ backgroundColor: '#282c34', minHeight: '100vh' }}>
      <header className="App-header">
        <h1>Bruce (Focado)</h1>
        <h2>Selecione 1 Arma Primária:</h2>
        <div className="container">
          {armas.map((a, i) => (
            <div key={i} className={`card ${selected===i?'selected':''}`} onClick={() => handleSelect(i)}>
              <p className="so-text-bold">{a.nome}</p>
              <p>{a.descricao}</p>
            </div>
          ))}
        </div>
        <ConfirmButton onClick={() => selected !== null && window.scrollTo(0, document.querySelector('.dispositivos-section').offsetTop)} disabled={selected===null}>
          Próximo
        </ConfirmButton>
      </header>

      <div className="dispositivos-section">
        <Dispositivos setSelecionados={setSelectedDispositivos} />
      </div>
      <Poderes setSelecionados={setSelectedPoderes} />
      <HabilidadePassiva setSelecionada={setHabilidadePassiva} />
      <HabilidadeEspecial setSelecionada={setHabilidadeEspecial} />

      <footer className="footer-buttons">
        <button onClick={handleCriarFicha} className="btn-acao">Criar Ficha</button>
        <button onClick={() => navigate('/')} className="btn-acao">Home</button>
      </footer>
    </div>
  );
}

export default Bruce;