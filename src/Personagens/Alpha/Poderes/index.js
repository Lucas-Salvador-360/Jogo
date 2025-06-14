import React, { useState } from 'react';
import './styles.css';

function Poderes({ setSelecionados }) {
  const [selectedPowers, setSelectedPowers] = useState([]);

  const poderes = [
    {
      nome: 'Restart (P)',
      descricao: 'Faz um jogador a até 25 metros de distância reaparecer no ponto de partida inicial dele.'
    },
    {
      nome: 'Ponto fixo (P)',
      descricao: 'Pode ativar essa habilidade antes de entrar em um combate e caso sobreviva ao combate, assim que ele acabar você voltará com a quantidade de vida que estava antes de iniciar o combate.'
    },
    {
      nome: 'Observador (P)',
      descricao: 'Ao se defender de um ataque no combate, no próximo ataque desviará automaticamente do número de ataque que havia defendido antes e assim vai indo, exemplo: se defender um dado no primeiro ataque, desviará automaticamente de um dado no segundo ataque. Dura até o fim do combate.'
    }
  ];

  const handleSelect = (poder) => {
    let newSelection = [...selectedPowers];
    const index = newSelection.findIndex(p => p === poder.nome);

    if (index >= 0) {
      newSelection.splice(index, 1);
    } else if (newSelection.length < 2) {
      newSelection.push(poder.nome);
    }

    setSelectedPowers(newSelection);
    setSelecionados(newSelection);
  };

  return (
    <div className="poderes-container">
      <h2>Poderes (Escolha 2)</h2>
      <div className="poderes-grid">
        {poderes.map((poder, index) => (
          <div
            key={index}
            className={`poder-card ${selectedPowers.includes(poder.nome) ? 'selected' : ''}`}
            onClick={() => handleSelect(poder)}
          >
            <h3>{poder.nome}</h3>
            <p>{poder.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Poderes;