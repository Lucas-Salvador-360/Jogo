import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';
import Dispositivos from '../Dispositivos';
import Poderes from '../Poderes';
import HabilidadeEspecial from '../HabilidadeEspecial';

function LuaNegra() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [selectedDispositivos, setSelectedDispositivos] = useState([]);
  const [selectedPoderes, setSelectedPoderes] = useState(null);
  const [habilidadeEspecial, setHabilidadeEspecial] = useState(null);

  const armas = [
    { nome: 'Katana foguete', descricao: 'Dano 10 | Segundos 1 | Distância 5/12 | Dados 2 | Ambiente T/A/E' },
    { nome: 'Katana', descricao: 'Dano 9 | Segundos 1 | Distância 1/5 | Dados 3 | Ambiente T' },
    { nome: 'Katana Energz', descricao: 'Dano 19 | Segundos 0 | Distância 0/1 | Dados 1 | Ambiente T' }
  ];

  const handleSelect = (i) => setSelected(i === selected ? null : i);

  const handleCriarFicha = () => {
    const ficha = {
      tipo: 'luaNegra',
      armaPrimaria: armas[selected],
      dispositivos: selectedDispositivos,
      poderes: selectedPoderes,
      habilidadeEspecial,
      statsFixos: { 
        PE: 10, 
        AO: 10, 
        IDE: 3, 
        defesa: '1 dado' 
      },
      modoReivolk: 'Modo Reivolk, Destruidora de Vidas: Pode se movimentar até 12 metros por rodada sem precisar jogar dado de movimentação e mata qualquer inimigo acertando apenas 1 dado de ataque e durante um combate pode gastar um pulo no início da sua rodada ou da rodada do inimigo e entrar em Ambiente Aéreo até a próxima rodada do combate.'
    };

    navigate('/ficha', { state: ficha });
  };

  return (
    <div className="App" style={{ backgroundColor: '#282c34', minHeight: '100vh' }}>
      <header className="App-header">
        <h1>Lua Negra (Agressiva)</h1>
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
      <HabilidadeEspecial setSelecionada={setHabilidadeEspecial} />

      <footer className="footer-buttons">
        <button onClick={handleCriarFicha} className="btn-acao">Criar Ficha</button>
        <button onClick={() => navigate('/')} className="btn-acao">Home</button>
      </footer>
    </div>
  );
}

export default LuaNegra;