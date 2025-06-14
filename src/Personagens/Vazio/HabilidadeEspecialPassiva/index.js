import React, { useState } from 'react';
import './styles.css';

const habilidades = [
  {
    nome: 'Vazio',
    descricao: 'Transforma o mapa inteiro na dimensão vazia onde você joga dois D20 para se movimentar e todos os inimigos recebem -1 em seus dados de ataque e defesa.'
  },
  {
    nome: 'Possessão do Vazio',
    descricao: 'Sempre que entrar em um combate pode jogar +3 dados para atacar e 3 dados para se defender.'
  }
];

function HabilidadeEspecialPassiva({ setSelecionada }) {
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
    <div className="habilidades-especiais-container">
      <h2>Habilidade Especial Passiva (Escolha 1)</h2>
      <div className="habilidades-especiais-grid">
        {habilidades.map((habilidade, index) => (
          <div
            key={index}
            className={`habilidade-especial-card ${selectedIndex === index ? 'selected' : ''}`}
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

export default HabilidadeEspecialPassiva;