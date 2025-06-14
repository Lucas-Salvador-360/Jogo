import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function Poderes({ setSelecionados }) {
  const poderes = [
    {
      nome: '(D)Super pulo',
      descricao: 'Pode pular até 10 de distancia e pode escolher se irá pular para alguma direção ou para cima para entrar em Ambiente Aéreo.'
    },
    {
      nome: '(A)Corte fatal',
      descricao: 'O seu dado de ataque com o menor número ganha +10 de dano.'
    },
    {
      nome: '(D)Técnica',
      descricao: 'Pode usar a técnica mesmo sem um dos dois estarem com 10 de vida e ao usar a técnica cada dado seu irá tirar 3 de dano e você jogará um d6 ao invés de um d4.'
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