import React, { useState } from 'react';
import './styles.css';

const HabilidadePassiva = ({ setFicha }) => {
  const [habilidadeSelecionada, setHabilidadeSelecionada] = useState(null);
  
  const habilidades = [
    {
      nome: "Aura Crescente",
      descricao: "Ao acertar todos os dados de ataque em um inimigo sua Aura ganha +5 metros."
    },
    {
      nome: "Aura bloqueadora",
      descricao: "Pode gastar um pulo e impedir o inimigo de sair de dentro de sua Aura."
    }
  ];

  const selecionarHabilidade = (habilidade) => {
    setHabilidadeSelecionada(habilidade);
    setFicha(prev => ({
      ...prev,
      habilidadePassiva: habilidade
    }));
  };

  return (
    <div className="container">
      <h2>Habilidades Passivas (Selecione 1)</h2>
      <div className="habilidades-container">
        {habilidades.map((habilidade, index) => (
          <div 
            key={index} 
            className={`habilidade-card ${habilidadeSelecionada?.nome === habilidade.nome ? 'selected' : ''}`}
            onClick={() => selecionarHabilidade(habilidade)}
          >
            <h3>{habilidade.nome}</h3>
            <p>{habilidade.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabilidadePassiva;