// Poderes.js
import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function Poderes({ setSelecionados }) {
  const poderes = [
    { nome: '(P) Empurro Fatal', descricao: 'Quando empurrar um inimigo ele perderá 5 de vida automaticamente.' },
    { nome: '(P) V. absurda', descricao: 'Pode se locomover a até dois pontos de conexão de distância.' },
    { nome: '(D) Aproveitador', descricao: 'Desvia automaticamente de um dado do ataque inimigo e ganha +1 ataque.' },
    { nome: '(P) Veloz', descricao: 'Pode se movimentar até 15 metros.' },
    { nome: '(D) Raio', descricao: 'Desvia automaticamente de um ataque do inimigo (gasta um pulo).' },
    { nome: '(A) Fúria Branca', descricao: 'Durante um ataque jogará um dado a menos, porque aquele dado será um 6 automaticamente.' },
  ];

  const [confirmCount, setConfirmCount] = useState(0);
  const [confirmedButtons, setConfirmedButtons] = useState(Array(poderes.length).fill(false));

  const handleClick = (index) => {
    if (confirmedButtons[index]) {
      setConfirmCount(prev => prev - 1);
    } else if (confirmCount < 3) {
      setConfirmCount(prev => prev + 1);
    }

    setConfirmedButtons(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  useEffect(() => {
    const selecionados = poderes
      .filter((_, i) => confirmedButtons[i])
      .map(p => `${p.nome}: ${p.descricao}`);
    setSelecionados(selecionados);
  }, [confirmedButtons, setSelecionados]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 3 Poderes:</h1>

        <div className="container">
          {poderes.map((poder, i) => (
            <div key={i} className="description-container">
              <p className="so-text-bold">{poder.nome}<br/></p>
              <p>{poder.descricao}</p>
              <ConfirmButton
                onClick={() => handleClick(i)}
                disabled={confirmCount >= 3 && !confirmedButtons[i]}
              >
                Confirmar
              </ConfirmButton>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Poderes;

