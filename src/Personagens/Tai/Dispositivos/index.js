import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function Dispositivos({ setSelecionados }) {
  const dispositivos = [
    { nome: '(A)Esfera da vida', descricao: 'Enche toda a sua vida.' },
    { nome: '(D)Núcleo concentrado', descricao: 'Sua vida se torna infinita por 2 rodadas e após isso, sua vida volta para a quantidade que estava.' },
    { nome: '(A)Alterador', descricao: 'Joga +2 dados para atacar ou para se defender.' },
    { nome: '(D)Manto Restaurador', descricao: 'Caso o inimigo te mate atacando com apenas 1 dado, você ressuscita após 1 rodada onde você morreu, com 20 de vida.' },
    { nome: '(P)Globo Terrestre', descricao: 'Pode se teletransportar a até 10 metros de distância.' },
    { nome: '(A)Corrente destruidora', descricao: 'Liga você ao seu inimigo, e se ele te matar durante o combate no qual você ativou a corrente destruidora, após o combate ele irá perder 2 de vida por rodada e se ele morrer por causa da sua corrente, você irá ressuscitar com 40 de vida no local onde morreu.' },
    { nome: '(P)Parte do Núcleo', descricao: 'Se você estiver com apenas 1 de vida, pode usar a parte do núcleo para apagar todos os inimigos da existência, fazendo com que você vença o jogo imediatamente.' },
  ];

  const [confirmCount, setConfirmCount] = useState(0);
  const [confirmedButtons, setConfirmedButtons] = useState(Array(dispositivos.length).fill(false));

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
    const selecionados = dispositivos
      .filter((_, i) => confirmedButtons[i])
      .map(d => `${d.nome}: ${d.descricao}`);
    setSelecionados(selecionados);
  }, [confirmedButtons, setSelecionados]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 3 Dispositivos:</h1>

        <div className="container">
          {dispositivos.map((dispositivo, i) => (
            <div key={i} className="description-container">
              <p className="so-text-bold">{dispositivo.nome}<br/></p>
              <p>{dispositivo.descricao}</p>
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

export default Dispositivos;