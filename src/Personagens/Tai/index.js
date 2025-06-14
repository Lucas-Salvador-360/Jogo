import React, { useState } from 'react';
import './styles.css';
import ConfirmButton from '../../ConfirmButton/index';

function Tai() {
  const [confirmCount, setConfirmCount] = useState(0);
  const [confirmedButtons, setConfirmedButtons] = useState([false, false]);

  const handleClick = (index) => {
    if (confirmedButtons[index]) {
      setConfirmCount(prevCount => prevCount - 1);
    } 
    else if (confirmCount < 1) {
      setConfirmCount(prevCount => prevCount + 1);
    }

    setConfirmedButtons(prevButtons => {
      const newButtons = [...prevButtons];
      newButtons[index] = !newButtons[index];
      return newButtons;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolhe 1 ataque sem limites:</h1>

        <p className="bold-text" style={{ position: 'absolute', top: 900, left: 20, fontSize: '12px' }}>
          PE: 5<br />
          AO: 4<br />
          IDE: 3<br />
          Defesa: 1 Dado<br />
        </p>

        <div className="container">
          {/* Deletar */}
          <div className="description-container">
            <p className="so-text-bold">Deletar:</p>
            <p>
              Dano 1 Distância 5/12 <br />
              Segundos 0 <br />
              Dados 6 <br />
              Ambiente T/A/E <br />
              Efeito: Ao acertar três dados de ataque de uma só vez, deleta o inimigo que está em combate com você, eliminando-o do jogo.
            </p>
            <ConfirmButton
              onClick={() => handleClick(0)}
              disabled={confirmCount >= 1 && !confirmedButtons[0]}
            >
              Confirmar
            </ConfirmButton>
          </div>

          {/* Cósmica */}
          <div className="description-container">
            <p className="so-text-bold">Cósmica:</p>
            <p>
              Dano 5 <br />
              Distância 2/10 <br />
              Segundos 0 <br />
              Dados 1 <br />
              Ambiente T/A/E <br />
              Efeito: durante um combate você ataca o inimigo nos seus turnos e também nos turnos dele, antes de ele dar o ataque.
            </p>
            <ConfirmButton
              onClick={() => handleClick(1)}
              disabled={confirmCount >= 1 && !confirmedButtons[1]}
            >
              Confirmar
            </ConfirmButton>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Tai;