import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

const AtaquesSemLimites = ({ ataquesSelecionados, setAtaquesSelecionados }) => {
  const [confirmCount, setConfirmCount] = useState(0);
  const [confirmedButtons, setConfirmedButtons] = useState([false, false, false, false, false]);

  const ataques = [
    {
      nome: 'Canhão zl',
      dano: 12,
      distancia: '3/10',
      segundos: 3,
      dados: 2,
      ambiente: 'T/A'
    },
    {
      nome: 'Laser',
      dano: 5,
      distancia: '2/6',
      segundos: 2,
      dados: 3,
      ambiente: 'T/A'
    },
    {
      nome: 'Míssil',
      dano: 20,
      distancia: '20',
      segundos: 3,
      dados: 2,
      ambiente: 'T',
      observacao: 'Não precisa estar entre pontos de conexão para executar este ataque.'
    },
    {
      nome: 'Canhão laser',
      dano: 1,
      distancia: '20/25',
      segundos: 0,
      dados: 6,
      ambiente: 'T/A',
      observacao: 'Não precisa estar entre pontos de conexão para usar este ataque.'
    },
    {
      nome: 'Perito',
      dano: 3,
      distancia: '0/1',
      segundos: 1,
      dados: 5,
      ambiente: 'T'
    }
  ];

  const handleClick = (index) => {
    if (confirmedButtons[index]) {
      setConfirmCount(prev => prev - 1);
      setAtaquesSelecionados(prev => prev.filter(a => a !== ataques[index]));
    } else if (confirmCount < 2) {
      setConfirmCount(prev => prev + 1);
      setAtaquesSelecionados(prev => [...prev, ataques[index]]);
    }
    setConfirmedButtons(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="ataques-section">
      <h2>Ataques sem Limites (Escolha 2)</h2>
      <div className="ataques-grid">
        {ataques.map((ataque, index) => (
          <div
            key={index}
            className={`ataque-card ${confirmedButtons[index] ? 'selected' : ''}`}
          >
            <h3>{ataque.nome}</h3>
            <p><strong>Dano:</strong> {ataque.dano}</p>
            <p><strong>Distância:</strong> {ataque.distancia}</p>
            <p><strong>Segundos:</strong> {ataque.segundos}</p>
            <p><strong>Dados:</strong> {ataque.dados}</p>
            <p><strong>Ambiente:</strong> {ataque.ambiente}</p>
            {ataque.observacao && (
              <p className="observacao"><strong>OBS:</strong> {ataque.observacao}</p>
            )}
            <ConfirmButton
              onClick={() => handleClick(index)}
              disabled={confirmCount >= 2 && !confirmedButtons[index]}
            >Confirmar</ConfirmButton>
          </div>
        ))}
      </div>
      <div className="footer-buttons">
        <button
          className="btn-acao"
          onClick={() => setAtaquesSelecionados([])}
          disabled={ataquesSelecionados.length === 0}
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

export default AtaquesSemLimites;