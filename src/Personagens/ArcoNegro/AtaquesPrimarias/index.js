import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

const AtaquesPrimarias = ({ ataqueSelecionado, setAtaqueSelecionado }) => {
  const ataques = [
    {
      nome: 'Arco',
      dano: 8,
      distancia: '3/28',
      segundos: 2,
      dados: 3,
      ambiente: 'T/A'
    },
    {
      nome: 'Arco Enfeitiçado',
      dano: 5,
      distancia: '4/8',
      segundos: 1,
      dados: 4,
      ambiente: 'T/A'
    },
    {
      nome: 'Flecha Negra',
      dano: 20,
      distancia: '2/15',
      segundos: 1,
      dados: 1,
      ambiente: 'T/A'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      setAtaqueSelecionado([ataques[selectedIndex]]);
    } else {
      setAtaqueSelecionado([]);
    }
  }, [selectedIndex, setAtaqueSelecionado]);

  return (
    <div className="ataques-primarias-section">
      <h2>Ataques Primários (Escolha 1)</h2>
      <div className="ataques-grid">
        {ataques.map((ataque, index) => (
          <div
            key={index}
            className={`ataque-card ${selectedIndex === index ? 'selected' : ''}`}
          >
            <h3>{ataque.nome}</h3>
            <div className="ataque-info">
              <p><strong>Dano:</strong> {ataque.dano}</p>
              <p><strong>Distância:</strong> {ataque.distancia}</p>
              <p><strong>Segundos:</strong> {ataque.segundos}</p>
              <p><strong>Dados:</strong> {ataque.dados}</p>
              <p><strong>Ambiente:</strong> {ataque.ambiente}</p>
            </div>
            <ConfirmButton
              onClick={() => handleClick(index)}
              disabled={selectedIndex !== null && selectedIndex !== index}
            >
              {selectedIndex === index ? 'Selecionado' : 'Selecionar'}
            </ConfirmButton>
          </div>
        ))}
      </div>
      <div className="footer-buttons">
        <button
          className="btn-acao"
          onClick={() => setSelectedIndex(null)}
          disabled={selectedIndex === null}
        >
          Limpar Seleção
        </button>
        <Link to="/" className="btn-acao">
          Home
        </Link>
      </div>
    </div>
  );
};

export default AtaquesPrimarias;