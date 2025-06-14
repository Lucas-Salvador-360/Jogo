import React, { useState } from 'react';
import './styles.css';

const dispositivos = [
  {
    nome: 'Enfraquecedor',
    tipo: '(A)',
    descricao: 'Durante um combate inteiro o inimigo recebe -1 em todos os dados de defesa dele.'
  },
  {
    nome: 'Conversor',
    tipo: '(P)',
    descricao: 'Se torna invencível por uma rodada não recebendo nenhum dano.'
  },
  {
    nome: 'Paralisador Temporal',
    tipo: '(A)',
    descricao: 'O inimigo que você está atacando não pode usar habilidade passiva, dispositivos, poderes e pulos até o fim do combate.'
  }
];

function Dispositivos({ setSelecionado }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      setSelecionado(null);
    } else {
      setSelectedIndex(index);
      setSelecionado(dispositivos[index]);
    }
  };

  const handleLimpar = () => {
    setSelectedIndex(null);
    setSelecionado(null);
  };

  return (
    <div className="dispositivos-container">
      <h2>Dispositivos (Escolha 1)</h2>
      <div className="dispositivos-grid">
        {dispositivos.map((dispositivo, index) => (
          <div
            key={index}
            className={`dispositivo-card ${selectedIndex === index ? 'selected' : ''}`}
            onClick={() => handleClick(index)}
          >
            <h3>{dispositivo.nome} {dispositivo.tipo}</h3>
            <p>{dispositivo.descricao}</p>
          </div>
        ))}
      </div>
      <div className="botoes-footer">
        <button onClick={handleLimpar}>Limpar Seleção</button>
      </div>
    </div>
  );
}

export default Dispositivos;