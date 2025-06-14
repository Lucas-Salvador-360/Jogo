import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function Dispositivos({ setSelecionados }) {
  const dispositivos = [
    {
      nome: '(D)Cortina de fumaça',
      descricao: 'Deve ser usado assim que um inimigo jogar os dados de ataque para esquivar automaticamente do ataque dele.'
    },
    {
      nome: '(P)Armadilha',
      descricao: 'Quando um inimigo estiver a 6 de distância de você sua armadilha faz ele perder 3 de vida automaticamente.'
    },
    {
      nome: '(D)Braços tecnológicos',
      descricao: 'Nas 3 rodadas de técnica o inimigo mesmo ganhando no dado não lhe causará dano.'
    },
    {
      nome: '(P)Pernas tecnológicas',
      descricao: 'Consegue andar +12 metros.'
    },
    {
      nome: '(P)Roupa escura',
      descricao: 'Ataque sem que o inimigo revide até o fim do combate.'
    },
    {
      nome: '(D)Roupa protetora',
      descricao: 'Assim que você perder no dado de defesa perderá a roupa protetora ao invés do hp.'
    },
    {
      nome: '(A)Mini torreta',
      descricao: 'Tira 1 de vida do inimigo automaticamente a cada rodada no combate.'
    },
    {
      nome: '(A)Sensor',
      descricao: 'Quando um inimigo iniciar um ataque contra você, você o atacará primeiro.'
    },
    {
      nome: '(A)Traje refletor',
      descricao: 'Deixa o inimigo cego fazendo-o se defender com apenas 1 dado até o fim do combate.'
    },
    {
      nome: '(D)Absorção',
      descricao: 'Joga um D6 e o número tirado será o dano acrescentado ao seu ataque total naquele combate.'
    },
    {
      nome: '(A)Afiador',
      descricao: '+1 de dano ao seus ataques até o fim do combate.'
    }
  ];

  const [selectedIndices, setSelectedIndices] = useState([]);

  const handleClick = (index) => {
    setSelectedIndices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else if (prev.length < 5) {
        return [...prev, index];
      }
      return prev;
    });
  };

  useEffect(() => {
    const selected = selectedIndices.map(index => `${dispositivos[index].nome}: ${dispositivos[index].descricao}`);
    setSelecionados(selected);
  }, [selectedIndices, setSelecionados]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 5 Dispositivos:</h1>

        <div className="container-grid">
          {dispositivos.map((dispositivo, i) => (
            <div key={i} className={`description-container ${selectedIndices.includes(i) ? 'selected' : ''}`}>
              <p className="so-text-bold">{dispositivo.nome}</p>
              <p>{dispositivo.descricao}</p>
              <ConfirmButton
                onClick={() => handleClick(i)}
                disabled={selectedIndices.length >= 5 && !selectedIndices.includes(i)}
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

export default Dispositivos;