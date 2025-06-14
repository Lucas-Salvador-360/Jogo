import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function Poderes({ setSelecionados }) {
  const poderes = [
    {
      nome: '(P)Mira',
      descricao: 'Ganha +1 dado para atacar.'
    },
    {
      nome: '(P)Visão',
      descricao: 'Pode atacar sem estar entre ponto de conexão.'
    },
    {
      nome: '(P)Precisão',
      descricao: '+2 em cada dado de ataque.'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      const selected = `${poderes[selectedIndex].nome}: ${poderes[selectedIndex].descricao}`;
      setSelecionados(selected);
    } else {
      setSelecionados(null);
    }
  }, [selectedIndex, setSelecionados]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 1 Poder:</h1>

        <div className="container">
          {poderes.map((poder, i) => (
            <div key={i} className="description-container">
              <p className="so-text-bold">{poder.nome}</p>
              <p>{poder.descricao}</p>
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

export default Poderes;