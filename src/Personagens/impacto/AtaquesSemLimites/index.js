import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';
import Poderes from '../Poderes';
import HabilidadePassiva from '../HabilidadePassiva';
import HabilidadeEspecial from '../HabilidadeEspecial';

function Impacto() {
  const [confirmCount, setConfirmCount] = useState(0);
  const [confirmedButtons, setConfirmedButtons] = useState([false, false, false, false]);

  const [selectedPoderes, setSelectedPoderes] = useState([]);
  const [habilidadePassiva, setHabilidadePassiva] = useState(null);
  const [habilidadeEspecial, setHabilidadeEspecial] = useState(null);

  const navigate = useNavigate();

  const ataques = [
    {
      nome: 'Furacão nas mãos',
      descricao: 'Dano 4 | Distância 2/6 | Segundos 0 | Dados 3'
    },
    {
      nome: 'Soco rápido',
      descricao: 'Dano 5 | Distância 4/9 | Segundos 0 | Dados 3\nApós o ataque, você fica nas costas do inimigo até o fim do combate.'
    },
    {
      nome: 'Voadora',
      descricao: 'Dano 10 | Distância 5/10 | Segundos 0 | Dados 1\nEmpurra o inimigo a 4 metros e você fica no lugar dele.'
    },
    {
      nome: 'Combate Físico',
      descricao: 'Dano 1 | Distância 0/1 | Segundos 0 | Dados 5\nSe acertar os 5 dados, o inimigo não pode mais se defender até o fim do combate.'
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
      tipo: 'impacto',
      ataquesSemLimites: ataquesSelecionados,
      poderes: selectedPoderes,
      habilidadePassiva,
      habilidadeEspecial,
      statsFixos: {
        PE: 10,
        AO: 8,
        IDE: 2,
        defesa: '2 dados'
      },
      modoReivolkImpacto: 'Não precisa mais jogar dado para se movimentar, sua movimentação padrão é de 1 a até 1 Sextilhão e ao empurrar um inimigo pode movê-lo 2 metros para a direção que você quiser.'
    };

    navigate('/ficha', { state: ficha });
  };

  return (
    <div className="App" style={{ backgroundColor: '#282c34', minHeight: '100vh' }}>
      <header className="App-header">
        <h1>Escolha 2 Ataques sem Limites:</h1>
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

export default Impacto;
