import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function HabilidadeEspecial({ setSelecionada }) {
  const habilidades = [
    {
      nome: 'Modo Reivolk, Eclipse infinito',
      descricao: 'Seu modo Eclipse fica ativado sempre e suas passivas de modo normal podem ser usadas no modo Eclipse.'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0); // Auto-seleciona a única opção

  useEffect(() => {
    const selected = `${habilidades[selectedIndex].nome}: ${habilidades[selectedIndex].descricao}`;
    setSelecionada(selected);
  }, [selectedIndex, setSelecionada]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {habilidades.map((habilidade, i) => (
            <div key={i} className="description-container selected">
              <p className="so-text-bold">{habilidade.nome}</p>
              <p>{habilidade.descricao}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default HabilidadeEspecial;