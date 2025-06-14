import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';
import Poderes from '../Poderes';
import HabilidadePassiva from '../HabilidadePassiva';
import HabilidadeEspecial from '../HabilidadeEspecial';

function Invicto() {
  const [confirmCount, setConfirmCount] = useState(0);
  const [confirmedButtons, setConfirmedButtons] = useState([false, false, false, false]);

  const [selectedPoderes, setSelectedPoderes] = useState([]);
  const [habilidadePassiva, setHabilidadePassiva] = useState(null);
  const [habilidadeEspecial, setHabilidadeEspecial] = useState(null);

  const navigate = useNavigate();

  const ataques = [
    {
      nome: 'Super soco',
      descricao: 'Dano 10 | Distância 0/1 | Segundos 1 | Dados 2 | Ambiente T\nOBS: Empurra o inimigo a 10 metros para a direção que você escolher.'
    },
    {
      nome: 'Impacto de Soco',
      descricao: 'Dano 5 | Distância 0/10 | Segundos 2 | Dados 4 | Ambiente T\nEfeito: Não precisa estar entre pontos de conexão, todos os inimigos no alcance deste ataque entrarão em combate contra você, pode perder 10 de vida e aumentar a distância em +10 metros.'
    },
    {
      nome: 'Meteoro',
      descricao: 'Dano 20 | Distância 11/13 | Segundos 5 | Dados 1 | Ambiente T/A\nEfeito: Não precisa estar entre pontos de conexão e se o inimigo não puder revidar você da apenas 1 ataque.'
    },
    {
      nome: 'Palma sônica',
      descricao: 'Dano 6 | Distância 2/15 | Segundos 2 | Dados 3 | Ambiente T/A'
    }
  ];

  const handleClick = (index) => {
    if (confirmedButtons[index]) {
      setConfirmCount(prev => prev - 1);
    } else if (confirmCount < 2) {
      setConfirmCount(prev => prev + 1);
    }
    setConfirmedButtons(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const handleCriarFicha = () => {
    const ataquesSelecionados = confirmedButtons
      .map((confirmed, i) => confirmed ? ataques[i] : null)
      .filter(Boolean);

    const ficha = {
      tipo: 'invicto',
      ataquesSemLimites: ataquesSelecionados,
      poderes: selectedPoderes,
      habilidadePassiva,
      habilidadeEspecial,
      statsFixos: {
        PE: 3,
        AO: 3,
        IDE: 2,
        defesa: '3 dados'
      },
      modoReivolk: 'Superioridade: Voa até o fim da partida.',
      tecnicas: 'Técnica: Deserto d4, Cidade d20, Lixão d12, Montanha d10.'
    };

    navigate('/ficha', { state: ficha });
  };

  return (
    <div className="App" style={{ backgroundColor: '#282c34', minHeight: '100vh' }}>
      <header className="App-header">
        <h1>Invicto (Resistente)</h1>
        <p>Técnica: Deserto d4, Cidade d20, Lixão d12, Montanha d10.</p>
        <h2>Escolha 2 Ataques sem Limites:</h2>
        <div className="container">
          {ataques.map((ataque, index) => (
            <div key={index} className="description-container">
              <p className="so-text-bold">{ataque.nome}:</p>
              <p>{ataque.descricao}</p>
              <ConfirmButton
                onClick={() => handleClick(index)}
                disabled={confirmCount >= 2 && !confirmedButtons[index]}
              >Confirmar</ConfirmButton>
            </div>
          ))}
        </div>
      </header>

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

export default Invicto;