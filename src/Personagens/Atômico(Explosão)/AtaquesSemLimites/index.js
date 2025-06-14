import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';
import Poderes from '../Poderes';
import HabilidadePassiva from '../HabilidadePassiva';
import HabilidadeEspecial from '../HabilidadeEspecial';

function AtomicoExplosao() {
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
      tipo: 'atomicoExplosao',
      ataquesSemLimites: ataquesSelecionados,
      poderes: selectedPoderes,
      habilidadePassiva,
      habilidadeEspecial,
      statsFixos: {
        PE: 10,
        AO: 3,
        IDE: 2,
        defesa: '1 dado'
      },
      modoReivolk: 'A cada início de rodada sendo sua rodada ou não você se explode e ataca todos os inimigos do mapa com 1 dado dando 10.000 de dano.'
    };

    navigate('/ficha', { state: ficha });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Atômico(Explosão)</h2>
        <p>Vantagem: Os seus dados de ataque com número 6 ganham +5 de dano.</p>
        <p>Técnica: Deserto D20, Lixão D20, Montanha D20 e Cidade D20.</p>

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

        <Poderes setSelecionados={setSelectedPoderes} maxSelection={0} />
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

export default AtomicoExplosao;