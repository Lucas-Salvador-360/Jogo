import React, { useState } from 'react';
import './styles.css';

function HabilidadePassiva({ setSelecionada }) {
  const [selectedAbility, setSelectedAbility] = useState('');

  const habilidades = [
    {
      nome: 'Te conheço',
      descricao: 'Faz o seu adversário jogar os dados de defesa antes de você jogar seus dados de ataque e se vc conseguir vencer todos os dados dele você o ataca com dobro de dano, você pode usar seu pulo de direito do combate para anular o dado com maior valor do inimigo que está em combate com você.'
    },
    {
      nome: 'Aproveitador',
      descricao: 'Pode fazer o adversário jogar os dados de defesa novamente (Opcional).'
    },
    {
      nome: 'Respawn',
      descricao: 'A qualquer momento em seu turno passivo pode reaparecer no ponto de partida inicial.'
    }
  ];

  const handleSelect = (habilidade) => {
    const novaSelecao = selectedAbility === habilidade.nome ? '' : habilidade.nome;
    setSelectedAbility(novaSelecao);
    setSelecionada(novaSelecao);
  };

  return (
    <div className="habilidades-container">
      <h2>Habilidade Passiva (Escolha 1)</h2>
      <div className="habilidades-grid">
        {habilidades.map((habilidade, index) => (
          <div
            key={index}
            className={`habilidade-card ${selectedAbility === habilidade.nome ? 'selected' : ''}`}
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

export default HabilidadePassiva;