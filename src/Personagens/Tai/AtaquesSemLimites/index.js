import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';
import Poderes from '../Poderes';
import Dispositivos from '../Dispositivos';
import HabilidadeEspecial from '../HabilidadeEspecial';

function Tai() {
  const [confirmCount, setConfirmCount] = useState(0);
  const [confirmedButtons, setConfirmedButtons] = useState([false, false]);

  const [selectedPoderes, setSelectedPoderes] = useState([]);
  const [selectedDispositivos, setSelectedDispositivos] = useState([]);
  const [habilidadeEspecial, setHabilidadeEspecial] = useState(null);

  const navigate = useNavigate();

  const ataques = [
    {
      nome: 'Deletar',
      descricao: `Dano 1 | Distância 5/12 | Segundos 0 | Dados 6 | Ambiente T/A/E
Efeito: Ao acertar três dados de ataque de uma só vez, deleta o inimigo que está em combate com você, eliminando-o do jogo.`
    },
    {
      nome: 'Cósmica',
      descricao: `Dano 5 | Distância 2/10 | Segundos 0 | Dados 1 | Ambiente T/A/E
Efeito: durante um combate você ataca o inimigo nos seus turnos e também nos turnos dele, antes de ele dar o ataque.`
    }
  ];

  const handleClick = (index) => {
    if (confirmedButtons[index]) {
      setConfirmCount(prev => prev - 1);
    } else if (confirmCount < 1) {
      setConfirmCount(prev => prev + 1);
    }
    setConfirmedButtons(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const handleCriarFicha = () => {
    // Verificar se todas as seleções necessárias foram feitas
    if (confirmCount < 1 || selectedPoderes.length < 3 || selectedDispositivos.length < 3 || !habilidadeEspecial) {
      alert('Por favor, selecione 1 ataque sem limites, 3 poderes, 3 dispositivos e 1 habilidade especial.');
      return;
    }

    const ataquesSelecionados = confirmedButtons
      .map((confirmed, i) => confirmed ? ataques[i] : null)
      .filter(Boolean);

    const ficha = {
      tipo: 'tai',
      ataquesSemLimites: ataquesSelecionados,
      poderes: selectedPoderes,
      dispositivos: selectedDispositivos,
      habilidadeEspecial,
      statsFixos: {
        PE: 5,
        AO: 4,
        IDE: 3,
        defesa: '1 dado'
      },
      modoReivolk: 'Dona da Existência: Sua vida aumenta para 200, e após usar todos os seus poderes e dispositivos, eles serão restaurados automaticamente até o fim da partida e sempre que terminar um combate com mais vida que seu inimigo você o apagará da existência, retirando-o do jogo.'
    };

    navigate('/ficha', { state: ficha });
  };

  return (
    <div className="App" style={{ backgroundColor: '#282c34', minHeight: '100vh' }}>
      <header className="App-header">
        <h1>Escolha 1 Ataque sem Limites:</h1>
        <div className="container">
          {ataques.map((ataque, index) => (
            <div key={index} className="description-container">
              <p className="so-text-bold">{ataque.nome}:</p>
              <p>{ataque.descricao}</p>
              <ConfirmButton
                onClick={() => handleClick(index)}
                disabled={confirmCount >= 1 && !confirmedButtons[index]}
              >Confirmar</ConfirmButton>
            </div>
          ))}
        </div>
      </header>

      <Poderes setSelecionados={setSelectedPoderes} />
      <Dispositivos setSelecionados={setSelectedDispositivos} />
      <HabilidadeEspecial setSelecionada={setHabilidadeEspecial} />

      <footer className="footer-buttons">
        <button onClick={handleCriarFicha} className="btn-acao">Criar Ficha</button>
        <button onClick={() => navigate('/')} className="btn-acao">Home</button>
      </footer>
    </div>
  );
}

export default Tai;