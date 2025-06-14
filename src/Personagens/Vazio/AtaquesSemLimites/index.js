import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const ataques = [
  {
    nome: 'Sanidade',
    dano: 2,
    distancia: '0/7',
    segundos: 0,
    dados: 4,
    ambiente: 'T',
    obs: 'Cada dado que você acertar no inimigo, faz ele perder 1 pulo.'
  },
  {
    nome: 'Sacrifício',
    dano: 0,
    distancia: '2/15',
    segundos: 1,
    dados: 6,
    ambiente: 'T/A',
    obs: 'Pode sacrificar um número X de sua vida para acrescentar de dano a este ataque, mas você fica sem a vida sacrificada até o fim do combate(ao final do combate sua vida sacrificada volta).'
  }
];

function AtaquesSemLimites({ ataqueSelecionado, setAtaqueSelecionado }) {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null);
      setAtaqueSelecionado([]);
    } else {
      setSelectedIndex(index);
      setAtaqueSelecionado([ataques[index]]);
    }
  };

  const handleLimpar = () => {
    setSelectedIndex(null);
    setAtaqueSelecionado([]);
  };

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div className="ataques-container">
      <h2>Ataques sem Limites (Escolha 1)</h2>
      <div className="ataques-grid">
        {ataques.map((ataque, index) => (
          <div
            key={index}
            className={`ataque-card ${selectedIndex === index ? 'selected' : ''}`}
            onClick={() => handleClick(index)}
          >
            <h3>{ataque.nome}</h3>
            <div className="ataque-info">
              <p>Dano: {ataque.dano}</p>
              <p>Distância: {ataque.distancia}</p>
              <p>Segundos: {ataque.segundos}</p>
              <p>Dados: {ataque.dados}</p>
              <p>Ambiente: {ataque.ambiente}</p>
              <p className="obs">OBS: {ataque.obs}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="botoes-footer">
        <button onClick={handleLimpar}>Limpar Seleção</button>
        <button onClick={handleVoltar}>Voltar</button>
      </div>
    </div>
  );
}

export default AtaquesSemLimites;