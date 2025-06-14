import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function HabilidadePassiva({ setSelecionada }) {
  const habilidades = [
    {
      nome: 'Explosão Concentrada',
      descricao: 'Pode gastar 4 pulos enquanto estiver em sua rodada passiva para dar 5 de dano automaticamente em todos os inimigos que estejam em área 1 de distância .'
    },
    {
      nome: 'Explosão defensiva',
      descricao: 'Da 1 de dano no inimigo por cada dado de ataque que ele acertar em você .'
    },
    {
      nome: 'Bomba Ambulante',
      descricao: 'Enquanto estiver com 5 ou menos de vida, no início de cada rodada sua jogará 3 dados cada um dando 5 de dano para atacar todos os inimigos em área 1 de distância.'
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
        <h1>Escolha 1 Habilidade Passiva:</h1>

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

export default HabilidadePassiva;