import React, { useState } from 'react';
import './styles.css';

const habilidades = [
  {
    nome: 'PONTO DE CONEXÃO',
    descricao: 'Pode dar apenas um ataque em um inimigo que esteja passando por cima de um ponto de conexão, após o ataque o inimigo continua a movimentação dele normalmente, você escolherá um de seus dois ataques e a quantia de dados que irá jogar para atacar o inimigo (gasta 1 pulo por cada dado de ataque utilizado) a quantia de dados não pode passar do limite utilizado em seu ataque.'
  },
  {
    nome: 'SOBRECARREGADO',
    descricao: 'Enquanto estiver com 10 ou menos de vida, seus P.E e A.O são infinitos.'
  }
];

function HabilidadePassiva({ habilidadeSelecionada, setHabilidadeSelecionada }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      setHabilidadeSelecionada(null);
    } else {
      setSelectedIndex(index);
      setHabilidadeSelecionada(habilidades[index]);
    }
  };

  const handleLimpar = () => {
    setSelectedIndex(null);
    setHabilidadeSelecionada(null);
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