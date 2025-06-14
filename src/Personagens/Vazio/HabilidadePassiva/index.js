import React, { useState } from 'react';
import './styles.css';

const habilidades = [
  {
    nome: 'Energia do Vazio',
    descricao: 'Faz o inimigo perder 1 de vida por cada dado que você defender.'
  },
  {
    nome: 'Sem Presença',
    descricao: 'Pode cancelar um combate que você iniciou a qualquer momento(gasta um pulo).'
  },
  {
    nome: 'Impiedoso',
    descricao: 'Se o inimigo estiver com 10 ou menos de vida o dano dos seus ataques triplicam.'
  },
  {
    nome: 'Energia compartilhada',
    descricao: 'Durante um combate inteiro, sempre que você usar um pulo irá gastar o pulo do adversário(se o adversário estiver sem pulos, irá gastar os seus).'
  }
];

function HabilidadePassiva({ setSelecionada }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      setSelecionada(null);
    } else {
      setSelectedIndex(index);
      setSelecionada(habilidades[index]);
    }
  };

  const handleLimpar = () => {
    setSelectedIndex(null);
    setSelecionada(null);
  };

  return (
    <div className="habilidades-container">
      <h2>Habilidade Passiva (Escolha 1)</h2>
      <div className="habilidades-grid">
        {habilidades.map((habilidade, index) => (
          <div
            key={index}
            className={`habilidade-card ${selectedIndex === index ? 'selected' : ''}`}
            onClick={() => handleClick(index)}
          >
            <h3>{habilidade.nome}</h3>
            <p>{habilidade.descricao}</p>
          </div>
        ))}
      </div>
      <div className="botoes-footer">
        <button onClick={handleLimpar}>Limpar Seleção</button>
      </div>
    </div>
  );
}

export default HabilidadePassiva;