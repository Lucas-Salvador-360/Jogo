import React, { useState, useEffect } from 'react';
import './styles.css';

const Poderes = ({ setSelecionados }) => {
  const [selectedPoderes, setSelectedPoderes] = useState([]);

  const poderesList = [
    {
      nome: 'Força Sobre-Humana',
      descricao: 'Capacidade de exercer força muito além dos limites humanos normais.'
    },
    {
      nome: 'Resistência Aprimorada',
      descricao: 'Capacidade de suportar danos físicos extremos e recuperar-se rapidamente.'
    },
    {
      nome: 'Agilidade Excepcional',
      descricao: 'Movimentos e reflexos muito acima da média humana.'
    }
  ];

  useEffect(() => {
    setSelecionados(selectedPoderes);
  }, [selectedPoderes, setSelecionados]);

  const handlePoderClick = (poder) => {
    if (selectedPoderes.includes(poder)) {
      setSelectedPoderes(selectedPoderes.filter(p => p !== poder));
    } else if (selectedPoderes.length < 2) {
      setSelectedPoderes([...selectedPoderes, poder]);
    }
  };

  return (
    <div className="poderes-container">
      <div className="poderes-grid">
        {poderesList.map((poder, index) => (
          <div
            key={index}
            className={`poder-card ${selectedPoderes.includes(poder) ? 'selected' : ''}`}
            onClick={() => handlePoderClick(poder)}
          >
            <h3>{poder.nome}</h3>
            <p>{poder.descricao}</p>
          </div>
        ))}
      </div>
      <div className="botoes-footer">
        <span className="contador">
          Poderes selecionados: {selectedPoderes.length}/2
        </span>
      </div>
    </div>
  );
};

export default Poderes;