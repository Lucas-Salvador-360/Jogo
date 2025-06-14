import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function HabilidadeEspecial({ setSelecionada }) {
  const habilidades = [
    {
      nome: 'Modo Reivolk, Superioridade',
      descricao: 'Voa até o fim da partida.'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0); // Auto-select the only option

  useEffect(() => {
    // Auto-select the only special ability
    const selected = `${habilidades[selectedIndex].nome}: ${habilidades[selectedIndex].descricao}`;
    setSelecionada(selected);
  }, [selectedIndex, setSelecionada]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Habilidade Especial</h1>
        <div className="container">
          {habilidades.map((habilidade, i) => (
            <div key={i} className="description-container selected">
              <p className="so-text-bold">{habilidade.nome}</p>
              <p>{habilidade.descricao}</p>
              <ConfirmButton
                onClick={() => {}}
                disabled={true}
              >
                Confirmado
              </ConfirmButton>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default HabilidadeEspecial;