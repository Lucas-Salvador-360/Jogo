import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function Poderes({ setSelecionados }) {
  const poderes = [
    'Destino 1: Inimigo perde 5 de vida.',
    'Destino 2: Inimigo perde 10 de vida.',
    'Destino 3: Inimigo perde 15 de vida.',
    'Destino 4: Inimigo perde 20 de vida.',
    'Destino 5: Inimigo perde 25 de vida.',
    'Destino 6: Inimigo morre.'
  ];

  const [selected, setSelected] = useState([]);

  const handleClick = (i) => {
    setSelected(prev => {
      if (prev.includes(i)) {
        return prev.filter(idx => idx !== i);
      } else {
        return [...prev, i];
      }
    });
  };

  useEffect(() => {
    const selectedItems = selected.map(i => poderes[i]);
    setSelecionados(selectedItems);
  }, [selected, setSelecionados, poderes]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha os Poderes:</h1>
        <div className="container-grid">
          {poderes.map((poder, i) => (
            <div key={i} className={`description-container ${selected.includes(i) ? 'selected' : ''}`}>
              <p>{poder}</p>
              <ConfirmButton
                onClick={() => handleClick(i)}
              >
                {selected.includes(i) ? 'Selecionado' : 'Selecionar'}
              </ConfirmButton>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Poderes;