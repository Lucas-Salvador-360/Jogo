import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function Poderes({ setSelecionados }) {
  const poderes = [
    {
      nome: '(A) Flecha vinculada',
      descricao: 'Cada dado de ataque que você acertar no inimigo drenará vida dele de acordo com o dano que ele recebeu e a vida drenada acrescentará a sua permanentemente.'
    },
    {
      nome: '(A) Flecha Explosiva',
      descricao: 'A cada dado de ataque que você acertar o inimigo perde +2 de vida.'
    },
    {
      nome: '(A) Flecha C/ Corda',
      descricao: 'Faz o inimigo se defender com -1 dado até o fim do combate(se o inimigo se defende com apenas 1 dado então esta flecha não terá efeito nele).'
    },
    {
      nome: '(A) Olhar Tenebroso',
      descricao: 'Ao defender todos os dados de um ataque do inimigo ele não poderá mais usar aquele ataque até o fim do combate( seu pulo conta como defesa).'
    },
    {
      nome: '(P) Olho de águia',
      descricao: 'Por 1 rodada pode atacar sem estar entre pontos de conexão.'
    },
    {
      nome: '(A) Arco Preciso',
      descricao: 'Sua arma primária ganha +20 metros de distância até o fim do combate.'
    },
    {
      nome: '(P) Ataque surpresa',
      descricao: 'Pode interromper uma movimentação ou iniciação do ataque adversário para atacá-lo uma vez fazendo-o perder sua movimentação ou seu ataque(o inimigo precisa estar em uma distância que você possa atacá-lo normalmente).'
    },
    {
      nome: '(A) Atento',
      descricao: 'Durante um combate inteiro os números dos seus dados de defesa serão 5 caso o inimigo tire um numero maior, poderá jogar +2 dados de defesa.'
    },
    {
      nome: '(A) Sem dó',
      descricao: 'Ataca com o dobro de dano ao realizar um ataque de oportunidade.'
    }
  ];

  const [confirmCount, setConfirmCount] = useState(0);
  const [confirmedButtons, setConfirmedButtons] = useState(Array(poderes.length).fill(false));

  const handleClick = (index) => {
    if (confirmedButtons[index]) {
      setConfirmCount(prev => prev - 1);
      setConfirmedButtons(prev => {
        const updated = [...prev];
        updated[index] = false;
        return updated;
      });
    } else if (confirmCount < 4) {
      setConfirmCount(prev => prev + 1);
      setConfirmedButtons(prev => {
        const updated = [...prev];
        updated[index] = true;
        return updated;
      });
    }
  };

  useEffect(() => {
    const selecionados = poderes
      .filter((_, i) => confirmedButtons[i])
      .map(poder => `${poder.nome}: ${poder.descricao}`);
    setSelecionados(selecionados);
  }, [confirmedButtons, setSelecionados]);

  return (
    <div className="poderes-section">
      <h2>Escolha 4 Poderes:</h2>
      <div className="poderes-grid">
        {poderes.map((poder, index) => (
          <div
            key={index}
            className={`poder-card ${confirmedButtons[index] ? 'selected' : ''}`}
          >
            <h3>{poder.nome}</h3>
            <p>{poder.descricao}</p>
            <ConfirmButton
              onClick={() => handleClick(index)}
              disabled={confirmCount >= 4 && !confirmedButtons[index]}
            >
              {confirmedButtons[index] ? 'Selecionado' : 'Selecionar'}
            </ConfirmButton>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Poderes;