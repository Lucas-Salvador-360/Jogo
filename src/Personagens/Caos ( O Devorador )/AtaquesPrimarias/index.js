import React, { useState } from 'react';
import './styles.css';

const AtaquesPrimarias = ({ setFicha }) => {
  const [armaSelecionada, setArmaSelecionada] = useState(null);
  
  const armas = [
    {
      nome: "Luvas Anti Luz",
      dano: 1,
      distancia: "2/10",
      segundos: 1,
      dados: 4,
      ambiente: "T/A"
    },
    {
      nome: "Projetor de Trevas",
      dano: 1,
      distancia: "0/1",
      segundos: 1,
      dados: 6,
      ambiente: "T",
      efeito: "Aumenta +1 metro por cada dado com número 6 que acertar no inimigo"
    },
    {
      nome: "Lentes Demoníaca",
      dano: 1,
      distancia: "5/20",
      segundos: 0,
      dados: 6,
      ambiente: "T/A"
    }
  ];

  const selecionarArma = (arma) => {
    setArmaSelecionada(arma);
    setFicha(prev => ({
      ...prev,
      armaPrimaria: arma
    }));
  };

  return (
    <div className="container">
      <h2>Armas Primárias</h2>
      <div className="armas-container">
        {armas.map((arma, index) => (
          <div 
            key={index} 
            className={`arma-card ${armaSelecionada?.nome === arma.nome ? 'selected' : ''}`}
            onClick={() => selecionarArma(arma)}
          >
            <h3>{arma.nome}</h3>
            <p>Dano: {arma.dano}</p>
            <p>Distância: {arma.distancia}</p>
            <p>Segundos: {arma.segundos}</p>
            <p>Dados: {arma.dados}</p>
            <p>Ambiente: {arma.ambiente}</p>
            {arma.efeito && <p>Efeito: {arma.efeito}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AtaquesPrimarias;