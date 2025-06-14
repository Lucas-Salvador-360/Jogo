import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function Poderes({ setSelecionados }) {
  const poderes = [
    { nome: '(P)Aumento de Alcance', descricao: 'Voa para fora da terra, fica em ambiente espaço por 4 rodadas.' },
    { nome: '(A)Esquecimento Temporário', descricao: 'Elimina o inimigo que está em combate com você da existência por 2 rodadas, e durante esse tempo é como se ele não estivesse na partida após as duas rodadas o inimigo retorna para o lugar onde estava.' },
    { nome: '(P)Mundo Deletado', descricao: 'Elimina a terra da existência, fazendo com que todos os jogadores fiquem em ambiente Espaço por 1 rodada e depois retornem a terra no local onde estavam.' },
    { nome: '(D)Ataque Inexistente', descricao: 'Anula o ataque do inimigo.' },
    { nome: '(A)Vantagem Adquirida', descricao: 'Elimina um turno de ataque do inimigo(pode escolher qual turno vai eliminar).' },
    { nome: '(D)Surpresa Perfeita', descricao: 'Após o inimigo se defender, você pode jogar +1 dado de ataque para mudar o resultado do seu ataque.' },
    { nome: '(A,D)Raiva Eterna', descricao: 'Elimina o poder, dispositivo ou Habilidade Passiva que o inimigo acabou de usar no combate, fazendo com que ele não possa recuperá-lo até o fim da partida.' },
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