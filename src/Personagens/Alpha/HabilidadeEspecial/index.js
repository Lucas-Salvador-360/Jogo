import React, { useState } from 'react';
import './styles.css';

function HabilidadeEspecial({ setSelecionada }) {
  const [selectedAbility, setSelectedAbility] = useState('');

  const habilidades = [
    {
      nome: 'Dono do tempo (P)',
      descricao: 'Faz o jogo reiniciar novamente como se nada tivesse acontecido, deve estar no centro do mapa para ativar essa habilidade.'
    },
    {
      nome: 'Futuro (P)',
      descricao: 'Acelera o tempo deixando os adversários velhos e com apenas 10 de vida no total e não poderão aumentar o limite de suas vidas até o fim da partida.'
    }
  ];

  const handleSelect = (habilidade) => {
    const novaSelecao = selectedAbility === habilidade.nome ? '' : habilidade.nome;
    setSelectedAbility(novaSelecao);
    setSelecionada(novaSelecao);
  };

  return (
    <div className="habilidades-especiais-container">
      <h2>Habilidade Especial (Escolha 1)</h2>
      <div className="habilidades-especiais-grid">
        {habilidades.map((habilidade, index) => (
          <div
            key={index}
            className={`habilidade-especial-card ${selectedAbility === habilidade.nome ? 'selected' : ''}`}
            onClick={() => handleSelect(habilidade)}
          >
            <h3>{habilidade.nome}</h3>
            <p>{habilidade.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HabilidadeEspecial;