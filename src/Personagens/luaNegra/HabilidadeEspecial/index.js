import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function HabilidadeEspecial({ setSelecionada }) {
  const habilidades = [
    {
      nome: '(A)Corta Crânios',
      descricao: 'Mata um inimigo no primeiro ataque que você acertar nele.'
    },
    {
      nome: '(P)Ataque surpresa',
      descricao: 'Ao iniciar um ataque contra um inimigo ele já irá perder 10 de vida automaticamente.'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      const selected = `${habilidades[selectedIndex].nome}: ${habilidades[selectedIndex].descricao}`;
      setSelecionada(selected);
    } else {
      setSelecionada(null);
    }
  }, [selectedIndex, setSelecionada]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 1 Habilidade Especial:</h1>

        <div className="container">
          {habilidades.map((habilidade, i) => (
            <div key={i} className="description-container">
              <p className="so-text-bold">{habilidade.nome}</p>
              <p>{habilidade.descricao}</p>
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

export default HabilidadeEspecial;