import React, { useState, useEffect } from 'react';
import ConfirmButton from '../../../ConfirmButton';
import './styles.css';

function AtaquesPrimarias({ setSelecionados }) {
  const ataques = [
    {
      nome: 'Espada Dupla Energz',
      descricao: 'Dano 7 | Distância 0/1 | Segundos 1 | Dados 3 | Ambiente T'
    },
    {
      nome: 'Espada laser',
      descricao: 'Dano 4 | Distância 2/20 | Segundos 1 | Dados 3 | Ambiente T/A/E'
    },
    {
      nome: 'Soco Energz',
      descricao: 'Dano 10 | Distância 0/1 | Segundos 0 | Dados 3 | Ambiente T'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      const selected = `${ataques[selectedIndex].nome}: ${ataques[selectedIndex].descricao}`;
      setSelecionados([selected]);
    } else {
      setSelecionados([]);
    }
  }, [selectedIndex, setSelecionados]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 1 Ataque Primário:</h1>
        <div className="container">
          {ataques.map((ataque, i) => (
            <div key={i} className="description-container">
              <p className="so-text-bold">{ataque.nome}</p>
              <p>{ataque.descricao}</p>
              <ConfirmButton
                onClick={() => handleClick(i)}
                disabled={selectedIndex !== null && selectedIndex !== i}
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

export default AtaquesPrimarias;