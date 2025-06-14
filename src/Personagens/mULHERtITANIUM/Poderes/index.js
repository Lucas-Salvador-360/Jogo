import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function Poderes({ setSelecionados }) {
  const poderes = [
    {
      nome: '(A)Titanium',
      descricao: 'Se o inimigo tirar o numero 6 ou 5 no dado de ataque, aquele dado é descartado. (dura até o fim do combate).'
    },
    {
      nome: '(A)Regeneração Titânica',
      descricao: 'A cada dado defendido ganha +10 de vida (sem passar do limite), dura até o fim do combate.'
    },
    {
      nome: '(D)Titanium pesado',
      descricao: 'Ao defender todos os dados de um ataque inimigo você se torna indestrutível não podendo sofrer dano até o fim do combate.'
    },
    {
      nome: '(D)Blindada',
      descricao: 'Defende automaticamente o ataque do inimigo e ganha +1 ataque.'
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
    const selected = selectedIndices.map(i => `${poderes[i].nome}: ${poderes[i].descricao}`);
    setSelecionados(selected.length > 0 ? selected : null);
  }, [selectedIndices, setSelecionados]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 2 Poderes:</h1>
        <div className="container">
          {poderes.map((poder, i) => (
            <div key={i} className="description-container">
              <p className="so-text-bold">{poder.nome}</p>
              <p>{poder.descricao}</p>
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

export default Poderes;