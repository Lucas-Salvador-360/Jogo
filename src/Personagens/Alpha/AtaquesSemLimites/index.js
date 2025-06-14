import React, { useState } from 'react';
import './styles.css';

function AtaquesSemLimites({ setSelecionados }) {
  const [selectedAttacks, setSelectedAttacks] = useState([]);

  const ataques = [
    {
      nome: 'Paralisia',
      dano: 4,
      distancia: '2/14',
      segundos: 1,
      dados: 4,
      ambiente: 'T/A',
      descricao: 'Se acertar Três dados deixa o adversário incapaz de atacar alguém por uma rodada, mas se ele for atacado poderá revidar(não precisa estar entre pontos de conexão).'
    },
    {
      nome: 'Reta da morte',
      dano: 2,
      distancia: '0/8',
      segundos: 0,
      dados: 3,
      ambiente: 'T',
      descricao: 'Se esse ataque for feito em linha reta passando de um ponto de conexão ele fica com 15 de dano e não precisa estar entre ponto de conexão.'
    },
    {
      nome: 'Em toda parte',
      dano: 4,
      distancia: '0/500',
      segundos: 1,
      dados: 3,
      ambiente: 'T/A',
      descricao: 'Ataca o adversário e depois jogará um d12 para saber a distância que irá aparecer perto dele(não precisa estar entre pontos de conexão para executar este ataque).'
    }
  ];

  const handleSelect = (ataque) => {
    let newSelection = [...selectedAttacks];
    const index = newSelection.findIndex(a => a.nome === ataque.nome);

    if (index >= 0) {
      newSelection.splice(index, 1);
    } else if (newSelection.length < 1) {
      newSelection.push(ataque);
    }

    setSelectedAttacks(newSelection);
    setSelecionados(newSelection);
  };

  return (
    <div className="ataques-container">
      <h2>Ataques sem Limites (Escolha 1)</h2>
      <div className="ataques-grid">
        {ataques.map((ataque, index) => (
          <div
            key={index}
            className={`ataque-card ${selectedAttacks.some(a => a.nome === ataque.nome) ? 'selected' : ''}`}
            onClick={() => handleSelect(ataque)}
          >
            <h3>{ataque.nome}</h3>
            <p><strong>Dano:</strong> {ataque.dano}</p>
            <p><strong>Distância:</strong> {ataque.distancia}</p>
            <p><strong>Segundos:</strong> {ataque.segundos}</p>
            <p><strong>Dados:</strong> {ataque.dados}</p>
            <p><strong>Ambiente:</strong> {ataque.ambiente}</p>
            <p><strong>OBS:</strong> {ataque.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AtaquesSemLimites;