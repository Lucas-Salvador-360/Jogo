import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function AtaquesSemLimites({ setSelecionadas }) {
  const ataques = [
    {
      nome: 'Soco enrijecido',
      descricao: 'Dano 20 | distância 0 | segundos 0 | dados 1 | Ambiente T'
    },
    {
      nome: 'Elasticidade Titanica',
      descricao: 'Dano 7 | distância 5/10 | segundos 1 | dados 2 | Ambiente T/A'
    },
    {
      nome: 'Puxão',
      descricao: 'Dano 5 | distância 4/15 | Segundos 2 | Dados 3 | Ambiente T/A\nOBS: Puxa o inimigo a 4 metros ou menos de distância de você.'
    },
    {
      nome: 'Rocha Titanica',
      descricao: 'Dano 10 | Distância 18/20 | Segundos 3 | Dados 3 | Ambiente T/A\nOBS: Para efetuar esse ataque não precisa estar entre pontos de conexão ou linha reta e após usar este ataque você fica a 0 de distância do inimigo, se acertar 1 dado deste ataque em um inimigo que está voando, você cancela o voo dele por 1 rodada e tira +7 de dano.'
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
        <h1>Escolha 2 Ataques sem Limites:</h1>
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

export default AtaquesSemLimites;