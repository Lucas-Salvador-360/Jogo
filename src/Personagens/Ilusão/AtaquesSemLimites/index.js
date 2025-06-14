import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';
import Poderes from '../Poderes';
import HabilidadePassiva from '../HabilidadePassiva';
import HabilidadeEspecial from '../HabilidadeEspecial';

function Ilusao() {
  const [confirmCount, setConfirmCount] = useState(0);
  const [confirmedButtons, setConfirmedButtons] = useState([false, false, false, false]);

  const [selectedPoderes, setSelectedPoderes] = useState([]);
  const [habilidadePassiva, setHabilidadePassiva] = useState(null);
  const [habilidadeEspecial, setHabilidadeEspecial] = useState(null);

  const navigate = useNavigate();

  const ataques = [
    {
      nome: 'Adaga',
      descricao: 'Dano 8 | Distância 3/8 | Segundos 2 | Dados 2 | Ambiente T'
    },
    {
      nome: 'Furioso',
      descricao: 'Dano 3 | Distância 0/2 | Segundos 0 | Dados 3 | Ambiente T\nOBS: se acertar pelo menos 2 dados, no próximo ataque dá o dobro de dano e assim vai indo sempre que acertar pelo menos 2 dados(esse efeito durará até o fim do combate).'
    },
    {
      nome: 'Adaga Energz',
      descricao: 'Dano 12 | Distância 8/13 | Segundos 2 | Dados 2 | Ambiente T/A'
    },
    {
      nome: 'Ilusões',
      descricao: 'Dano 5 | Distância 0/5 | Segundos 1 | Dados 3 | Ambiente T'
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
      tipo: 'ilusao',
      ataquesSemLimites: ataquesSelecionados,
      poderes: selectedPoderes,
      habilidadePassiva,
      habilidadeEspecial,
      statsFixos: {
        PE: 6,
        AO: 4,
        IDE: 3,
        defesa: '2 dados'
      },
      modoReivolk: 'Procurado: Sempre que iniciar um combate e morrer, irá reaparecer em um ponto de conexão escolhido por você com a quantidade de vida que estava antes de iniciar aquele combate.'
    };

    navigate('/ficha', { state: ficha });
  };

  return (
    <div className="App" style={{ backgroundColor: '#282c34', minHeight: '100vh' }}>
      <header className="App-header">
        <h2>Ilusão (Estrategista)</h2>
        <p>Técnica: Deserto d20, Cidade d20, Lixão d20, Montanha d20.</p>

        <h3>Ataques sem limite (Selecione 2)</h3>
        <div className="container">
          {ataques.map((ataque, i) => (
            <div key={i} className="description-container">
              <p className="so-text-bold">{ataque.nome}</p>
              <p>{ataque.descricao}</p>
              <ConfirmButton
                onClick={() => handleClick(i)}
                disabled={confirmCount >= 2 && !confirmedButtons[i]}
              >Confirmar</ConfirmButton>
            </div>
          ))}
        </div>

        <Poderes setSelecionados={setSelectedPoderes} maxSelection={2} />
        <HabilidadePassiva setSelecionada={setHabilidadePassiva} />
        <HabilidadeEspecial setSelecionada={setHabilidadeEspecial} />

        <div className="footer-buttons">
          <button className="btn-acao" onClick={handleCriarFicha}>Criar Ficha</button>
          <button className="btn-acao" onClick={() => navigate('/')}>Home</button>
        </div>
      </header>
    </div>
  );
}

export default Ilusao;