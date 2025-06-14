import React, { useState } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

const Poderes = ({ setSelecionados }) => {
  const [poderesSelecionados, setPoderesSelecionados] = useState([]);
  
  const poderes = [
    {
      nome: "Voo Perfeito",
      tipo: "P,A",
      descricao: "Voa por 3 rodadas."
    },
    {
      nome: "Invencível",
      tipo: "A",
      descricao: "Joga +2 dados para se defender de um ataque."
    },
    {
      nome: "Intimidação",
      tipo: "A",
      descricao: "Pode intimidar o inimigo fazendo com que até o fim do combate ele tenha que tirar 6 no dado para te acertar um ataque(você não joga dados para se defender)."
    },
    {
      nome: "Impulsão",
      tipo: "P,A",
      descricao: "Pode pular a até 15 metros desde que seja para iniciar um combate ou continuar um combate.(gasta 1 pulo)."
    },
    {
      nome: "Massacre",
      tipo: "A",
      descricao: "Na rodada de técnica da 8 de dano(dura até o fim das rodadas de técnica)."
    }
  ];

  const [confirmedButtons, setConfirmedButtons] = useState(Array(poderes.length).fill(false));

  const handleClick = (index) => {
    if (confirmedButtons[index]) {
      setPoderesSelecionados(prev => prev.filter(p => p !== poderes[index]));
    } else if (poderesSelecionados.length < 2) {
      setPoderesSelecionados(prev => [...prev, poderes[index]]);
    }

    setConfirmedButtons(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });

    setSelecionados(poderesSelecionados.map(p => `${p.nome}: ${p.descricao}`));
  };

  return (
    <div className="container">
      <h2>Poderes (Selecione 2)</h2>
      <div className="poderes-container">
        {poderes.map((poder, index) => (
          <div 
            key={index} 
            className={`poder-card ${confirmedButtons[index] ? 'selected' : ''} ${poderesSelecionados.length >= 2 && !confirmedButtons[index] ? 'disabled' : ''}`}
            onClick={() => handleClick(index)}
          >
            <h3>{poder.nome} ({poder.tipo})</h3>
              <p>{poder.descricao}</p>
              <ConfirmButton
                onClick={(e) => { e.stopPropagation(); handleClick(index); }}
                disabled={poderesSelecionados.length >= 2 && !confirmedButtons[index]}
              >
                {confirmedButtons[index] ? 'Confirmado' : 'Confirmar'}
              </ConfirmButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poderes;