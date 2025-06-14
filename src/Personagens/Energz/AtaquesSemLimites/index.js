import React, { useState } from 'react';
import './styles.css';

const ataques = [
  {
    nome: 'SUGA ENERGIA',
    dano: 0,
    distancia: '0/30',
    segundos: 1,
    dados: 2,
    ambiente: 'T/A/E',
    obs: 'A cada dado acertado recupera um poder, mas perderá 1 de vida(não precisa estar entre pontos de conexão). Atenção: Nenhum dano pode ser acrescentado a este ataque.'
  },
  {
    nome: 'CORRENTE AZUL',
    dano: 5,
    distancia: '2/10',
    segundos: 2,
    dados: 4,
    ambiente: 'T/A'
  },
  {
    nome: 'RAJADA ENERGZ',
    dano: 1,
    distancia: '0/50',
    segundos: 0,
    dados: 6,
    ambiente: 'T/A/E'
  },
  {
    nome: 'FEIXE AZUL',
    dano: 14,
    distancia: '28/30',
    segundos: 4,
    dados: 2,
    ambiente: 'T/A',
    obs: 'Não precisa estar entre pontos de conexão.'
  },
  {
    nome: 'ENFRAQUECIMENTO',
    dano: 3,
    distancia: '3/13',
    segundos: 2,
    dados: 3,
    ambiente: 'T/A',
    obs: 'Se acertar os 3 dados de ataque de uma vez, o inimigo perderá todos os pulos.'
  }
];

function AtaquesSemLimites({ ataquesSelecionados, setAtaquesSelecionados }) {
  const [confirmCount, setConfirmCount] = useState(0);
  const [confirmedButtons, setConfirmedButtons] = useState(new Array(ataques.length).fill(false));

  const handleClick = (index) => {
    const newConfirmedButtons = [...confirmedButtons];
    
    if (newConfirmedButtons[index]) {
      newConfirmedButtons[index] = false;
      setConfirmCount(confirmCount - 1);
    } else if (confirmCount < 2) {
      newConfirmedButtons[index] = true;
      setConfirmCount(confirmCount + 1);
    }

    setConfirmedButtons(newConfirmedButtons);
    const selectedAttacks = ataques.filter((_, i) => newConfirmedButtons[i]);
    setAtaquesSelecionados(selectedAttacks);
  };

  const handleLimpar = () => {
    setConfirmedButtons(new Array(ataques.length).fill(false));
    setConfirmCount(0);
    setAtaquesSelecionados([]);
  };

  return (
    <div className="ataques-container">
      <h2>Ataques sem Limites (Escolha 2)</h2>
      <div className="ataques-grid">
        {ataques.map((ataque, index) => (
          <div
            key={index}
            className={`ataque-card ${confirmedButtons[index] ? 'selected' : ''}`}
            onClick={() => handleClick(index)}
          >
            <h3>{ataque.nome}</h3>
            <div className="ataque-info">
              <p>Dano: {ataque.dano}</p>
              <p>Distância: {ataque.distancia}</p>
              <p>Segundos: {ataque.segundos}</p>
              <p>Dados: {ataque.dados}</p>
              <p>Ambiente: {ataque.ambiente}</p>
              {ataque.obs && <p className="obs">OBS: {ataque.obs}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="botoes-footer">
        <button onClick={handleLimpar}>Limpar Seleção</button>
        <span className="contador">Selecionados: {confirmCount}/2</span>
      </div>
    </div>
  );
}

export default AtaquesSemLimites;