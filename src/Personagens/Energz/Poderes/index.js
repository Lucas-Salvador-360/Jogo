import React, { useState } from 'react';
import './styles.css';

const poderes = [
  {
    nome: 'ULTRA',
    tipo: '(P)',
    descricao: 'Consegue correr mais 20 Metros.'
  },
  {
    nome: 'RAIVA',
    tipo: '(P)',
    descricao: 'Ganha +2 de dano em seus ataques até o fim do combate.'
  },
  {
    nome: 'VOO OBSERVADOR',
    tipo: '(A)',
    descricao: 'Voa por 1 rodada e além de sua defesa natural, poderá jogar 3 dados para se defender.'
  },
  {
    nome: 'ESCUDO ENERGZ',
    tipo: '(A)',
    descricao: 'Te deixa imune aos ataques do inimigo até o fim do combate.'
  },
  {
    nome: 'NÚCLEO EXPLOSIVO',
    tipo: '(D)',
    descricao: 'Se você terminar um combate com menos vida que seu adversário ele perdera 5 de vida automaticamente.'
  },
  {
    nome: 'ENERGIA COPIADA',
    tipo: '(A)',
    descricao: 'Lhe permite usar o dano do ataque do seu inimigo no seu dado de ataque com maior número (Duração de apenas um ataque e se houver mais de um dado com número maior igual, o dano é acrescentado nos dois).'
  },
  {
    nome: 'INSTINTO ENERGZ',
    tipo: '(A)',
    descricao: 'Pode eliminar um dado de cada ataque do inimigo até o fim do combate.'
  },
  {
    nome: 'INTANGÍVEL',
    tipo: '(P)',
    descricao: 'Fica intangível durante um combate inteiro fazendo com que você possa gastar um pulo para desviar de um dado do inimigo mais de uma vez durante o combate(a cada desvio gasta um pulo).'
  },
  {
    nome: 'INSTÁVEL',
    tipo: '(A)',
    descricao: 'Durante o combate pode tirar parte de sua vida para acrescentar ao seu ataque exemplo: Se tirar 5 de vida, ganha +5 de dano em cada dado de ataque(dura um ataque), a sua vida não volta após o fim do combate.'
  }
];

function Poderes({ poderesSelecionados, setPoderesSelecionados }) {
  const [confirmCount, setConfirmCount] = useState(0);
  const [confirmedButtons, setConfirmedButtons] = useState(new Array(poderes.length).fill(false));

  const handleClick = (index) => {
    const newConfirmedButtons = [...confirmedButtons];
    
    if (newConfirmedButtons[index]) {
      newConfirmedButtons[index] = false;
      setConfirmCount(confirmCount - 1);
    } else if (confirmCount < 5) {
      newConfirmedButtons[index] = true;
      setConfirmCount(confirmCount + 1);
    }

    setConfirmedButtons(newConfirmedButtons);
    const selectedPowers = poderes.filter((_, i) => newConfirmedButtons[i]);
    setPoderesSelecionados(selectedPowers);
  };

  const handleLimpar = () => {
    setConfirmedButtons(new Array(poderes.length).fill(false));
    setConfirmCount(0);
    setPoderesSelecionados([]);
  };

  return (
    <div className="poderes-container">
      <h2>Poderes (Escolha 5)</h2>
      <div className="poderes-grid">
        {poderes.map((poder, index) => (
          <div
            key={index}
            className={`poder-card ${confirmedButtons[index] ? 'selected' : ''}`}
            onClick={() => handleClick(index)}
          >
            <h3>{poder.nome} {poder.tipo}</h3>
            <p>{poder.descricao}</p>
          </div>
        ))}
      </div>
      <div className="botoes-footer">
        <button onClick={handleLimpar}>Limpar Seleção</button>
        <span className="contador">Selecionados: {confirmCount}/5</span>
      </div>
    </div>
  );
}

export default Poderes;