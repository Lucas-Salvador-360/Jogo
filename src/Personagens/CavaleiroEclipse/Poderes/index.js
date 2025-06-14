import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function Poderes({ setSelecionados }) {
  const poderes = [
    {
      nome: '(P)Raio do Julgamento',
      descricao: 'Todos os jogadores inimigos que já entraram em combate em algum momento da partida até esse momento receberão -1 em seus dados de defesa por 3 rodadas.'
    },
    {
      nome: '(A)Vigor de Batalha',
      descricao: 'Enche toda a sua vida.'
    },
    {
      nome: '(A)Olhar da Maldição',
      descricao: 'O jogador que está em combate com você receberá -2 nos dados de ataque dele até o fim do combate.'
    },
    {
      nome: '(A)Pele Impenetrável',
      descricao: 'Ganha +3 dados de defesa para se defender até o fim do combate.'
    },
    {
      nome: '(D)Punição',
      descricao: 'Ao dar um ataque de oportunidade Ganha +3 em seus dados de ataque até o fim do combate.'
    },
    {
      nome: '(P)Voo Objetivo',
      descricao: 'Voa e fica fora da Terra em Ambiente Espaço por 2 rodadas e após isso poderá reaparecer em um ponto de conexão à sua escolha.'
    }
  ];

  const [selectedIndices, setSelectedIndices] = useState([]);

  const handleClick = (index) => {
    setSelectedIndices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else if (prev.length < 3) {
        return [...prev, index];
      }
      return prev;
    });
  };

  useEffect(() => {
    const selected = selectedIndices.map(index => `${poderes[index].nome}: ${poderes[index].descricao}`);
    setSelecionados(selected);
  }, [selectedIndices, setSelecionados]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 3 Poderes (só podem ser usados no modo eclipse):</h1>

        <div className="container-grid">
          {poderes.map((poder, i) => (
            <div key={i} className={`description-container ${selectedIndices.includes(i) ? 'selected' : ''}`}>
              <p className="so-text-bold">{poder.nome}</p>
              <p>{poder.descricao}</p>
              <ConfirmButton
                onClick={() => handleClick(i)}
                disabled={selectedIndices.length >= 3 && !selectedIndices.includes(i)}
              >
                {selectedIndices.includes(i) ? 'Selecionado' : 'Selecionar'}
              </ConfirmButton>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Poderes;