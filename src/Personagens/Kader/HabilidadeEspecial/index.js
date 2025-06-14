import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function HabilidadeEspecial({ setSelecionada }) {
  const habilidades = [
    {
      nome: '(A)Defesa bloqueada',
      descricao: 'O inimigo não pode se defender do seu ataque.'
    },
    {
      nome: '(A)Destino Drenado',
      descricao: 'Gasta todos os seus pulos e perde 5 e ao fim do combate pode escolher o destino do inimigo.'
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
  }, [selectedIndex, setSelecionada, habilidades]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 1 Habilidade Especial:</h1>
        <div className="container">
          {habilidades.map((habilidade, i) => (
            <div 
              key={i} 
              className={`description-container ${selectedIndex === i ? 'selected' : ''}`}
              onClick={() => handleClick(i)}
            >
              <p className="so-text-bold">{habilidade.nome}</p>
              <p>{habilidade.descricao}</p>
              <ConfirmButton onClick={() => handleClick(i)}>
                {selectedIndex === i ? 'Selecionado' : 'Selecionar'}
              </ConfirmButton>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default HabilidadeEspecial;