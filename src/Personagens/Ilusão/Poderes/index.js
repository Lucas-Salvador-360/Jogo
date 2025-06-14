import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function Poderes({ setSelecionados }) {
  const poderes = [
    {
      nome: 'Mestre da ilusão (P,A,D)',
      descricao: 'Pode sumir durante ou fora de um combate e reaparecer no local que iniciou o jogo.'
    },
    {
      nome: 'Exército (A)',
      descricao: 'escolhe 4 números de 1 a 12 e quando você atacar o inimigo ele jogará um d12 e se nao cair um dos seus números escolhidos você o atacará com um dado a mais e quando ele for te atacar ele jogará um d12 e se nao cair um de seus números escolhidos, ele perdera aquele ataque(dura até o fim do combate).'
    },
    {
      nome: 'Ilusão simples (P)',
      descricao: 'Cria uma ilusão que se movimenta o mesmo tanto de metros que você e quando uma de suas peças realizar uma ação iniciada por você aquela será o ilusão verdadeiro, mas se outro jogador o atacar, você poderá decidir se aquela peça é o ilusão verdadeiro ou não, sendo ou não o verdadeiro, você deve tirar a ilusão falsa do jogo.'
    },
    {
      nome: 'Enganação (A)',
      descricao: 'Joga um d20 antes de jogar os primeiros dados de um combate e quando sofrer um ataque que o matou, desaparecera e aparecerá a distância exata tirada no dado seja para atacar ou fugir, reaparece com a vida que lhe restou, retirando apenas o dano do dado que o matou.'
    },
    {
      nome: 'Intangível (A)',
      descricao: 'Fica intangível fazendo o inimigo errar todos os dados de ataque dele, dura até o fim do combate.'
    }
  ];

  const [selectedIndexes, setSelectedIndexes] = useState([]);

  const handleClick = (index) => {
    setSelectedIndexes(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else if (prev.length < 2) {
        return [...prev, index];
      }
      return prev;
    });
  };

  useEffect(() => {
    const selectedPowers = selectedIndexes.map(index => {
      return `${poderes[index].nome}: ${poderes[index].descricao}`;
    });
    setSelecionados(selectedPowers);
  }, [selectedIndexes, setSelecionados]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 2 Poderes:</h1>
        <div className="container">
          {poderes.map((poder, i) => (
            <div 
              key={i} 
              className={`description-container ${selectedIndexes.includes(i) ? 'selected' : ''}`}
            >
              <p className="so-text-bold">{poder.nome}</p>
              <p>{poder.descricao}</p>
              <ConfirmButton 
                onClick={() => handleClick(i)}
                disabled={selectedIndexes.length >= 2 && !selectedIndexes.includes(i)}
              >
                {selectedIndexes.includes(i) ? 'Selecionado' : 'Selecionar'}
              </ConfirmButton>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Poderes;