import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function AtaquesPrimarias({ setSelecionadas }) {
  const ataques = [
    {
      nome: 'Marreta',
      descricao: 'Dano 8 | Distância 1/3 | Segundos 2 | Dados 2 | Ambiente T\nOBS: A cada dado que você acertar tira um ataque do inimigo.'
    },
    {
      nome: 'Espada Gigante',
      descricao: 'Dano 5 | Distância 2/4 | Segundos 2 | Ambiente T | Dados 3\nOBS: No final do combate o inimigo perde 1 de vida por cada dado que você acertou.'
    },
    {
      nome: 'Lança',
      descricao: 'Dano 10 | distância 8/10 | segundos 3 | Dados 2 | Ambiente T/A'
    },
    {
      nome: 'Espadas',
      descricao: 'Dano 9 | Distância 0 | Segundos 1 | Dados 3 | Ambiente T'
    }
  ];

  const [selectedIndices, setSelectedIndices] = useState([]);

  const handleClick = (index) => {
    setSelectedIndices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else if (prev.length < 2) {
        return [...prev, index];
      }
      return prev;
    });
  };

  useEffect(() => {
    const selected = selectedIndices.map(i => `${ataques[i].nome}: ${ataques[i].descricao}`);
    setSelecionadas(selected.length > 0 ? selected : null);
  }, [selectedIndices, setSelecionadas]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 2 Armas Primárias:</h1>
        <div className="container">
          {ataques.map((ataque, i) => (
            <div key={i} className="description-container">
              <p className="so-text-bold">{ataque.nome}</p>
              <p>{ataque.descricao}</p>
              <ConfirmButton
                onClick={() => handleClick(i)}
                disabled={selectedIndices.length >= 2 && !selectedIndices.includes(i)}
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

export default AtaquesPrimarias;