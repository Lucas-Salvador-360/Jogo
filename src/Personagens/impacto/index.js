import React, { useState } from 'react';
import './styles.css';
import ConfirmButton from '../../ConfirmButton/index';

function Impacto() {
  const [confirmCount, setConfirmCount] = useState(0); // Contador de confirmações
  const [confirmedButtons, setConfirmedButtons] = useState([false, false, false]); // Estado para controlar se os botões foram clicados

  const handleClick = (index) => {
    // Se o botão já foi confirmado, podemos "desmarcar" ele
    if (confirmedButtons[index]) {
      // Decrementa o contador de confirmações
      setConfirmCount(prevCount => prevCount - 1);
    } 
    // Se o botão ainda não foi confirmado e o número de confirmações for menor que 2
    else if (confirmCount < 2) {
      setConfirmCount(prevCount => prevCount + 1);
    }

    // Marca ou desmarca o botão
    setConfirmedButtons(prevButtons => {
      const newButtons = [...prevButtons];
      newButtons[index] = !newButtons[index]; // Alterna o estado de confirmação
      return newButtons;
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolhe 2 ataques sem limites:</h1>

        <p className="bold-text" style={{ position: 'absolute', top: 900, left: 20, fontSize: '12px' }}>
          PE: 10<br />
          AO: 8<br />
          IDE: 2<br />
          Defesa: 2 Dados<br />
        </p>

        <div className="container">
          {/* Furacão nas mãos */}
          <div className="description-container">
            <p className="so-text-bold">Furacão nas mãos:</p>
            <p>
              Dano 4 Distância 2/6 <br />
              Segundos 0 <br />
              Dados 3
            </p>
            <ConfirmButton
              onClick={() => handleClick(0)} // Passa o índice para identificar o botão
              disabled={confirmCount >= 2 && !confirmedButtons[0]} // Desabilita o botão se já foram confirmados 2, e esse não foi
            >
              Confirmar
            </ConfirmButton>
          </div>

          {/* Soco rápido */}
          <div className="description-container">
            <p className="so-text-bold">Soco rápido:</p>
            <p>
              Dano 5 <br />
              Distância 4/9 <br />
              Segundos 0 <br />
              Dados 3: <br />
              Após realizar o ataque, você fica nas costas do inimigo dentro da distância desse ataque e assim vai até o fim do combate.
            </p>
            <ConfirmButton
              onClick={() => handleClick(1)} // Passa o índice para identificar o botão
              disabled={confirmCount >= 2 && !confirmedButtons[1]} // Desabilita o botão se já foram confirmados 2, e esse não foi
            >
              Confirmar
            </ConfirmButton>
          </div>

          {/* Voadora */}
          <div className="description-container">
            <p className="so-text-bold">Voadora:</p>
            <p>
              Dano 10 <br />
              Distância 5/10 <br />
              Segundos 0 <br />
              Dados 1: <br />
              Empurra o inimigo a 4 metros e você fica aonde ele estava.
            </p>
            <ConfirmButton
              onClick={() => handleClick(2)} // Passa o índice para identificar o botão
              disabled={confirmCount >= 2 && !confirmedButtons[2]} // Desabilita o botão se já foram confirmados 2, e esse não foi
            >
              Confirmar
            </ConfirmButton>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Impacto;
