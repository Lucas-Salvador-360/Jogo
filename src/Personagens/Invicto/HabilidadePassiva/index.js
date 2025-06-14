import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

const HabilidadePassiva = ({ setSelecionada }) => {
  const [selectedIndices, setSelectedIndices] = useState([]);
  
  const habilidades = [
    {
      nome: "Peito de aço",
      descricao: "Toma metade do dano, normal para 5 ou menos."
    },
    {
      nome: "Enrijecer",
      descricao: "Imune a ataques de oportunidade e empurrões."
    },
    {
      nome: "Ódio",
      descricao: "Cura 5 de vida no início do primeiro turno passivo."
    },
    {
      nome: "Fúria",
      descricao: "+1 em rolagens de ataque."
    },
    {
      nome: "Resistência Pura",
      descricao: "+2 de vida máxima após cada combate sobrevivido."
    }
  ];

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
    const selectedHabs = selectedIndices
      .map(i => `${habilidades[i].nome}: ${habilidades[i].descricao}`);
    
    setSelecionada(selectedHabs.length > 0 ? selectedHabs : null);
  }, [selectedIndices, setSelecionada]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 2 Habilidades Passivas:</h1>
        <div className="container">
          {habilidades.map((habilidade, i) => (
            <div key={i} className="description-container">
              <p className="so-text-bold">{habilidade.nome}</p>
              <p>{habilidade.descricao}</p>
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
};

export default HabilidadePassiva;