import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function HabilidadePassiva({ setSelecionada }) {
  const habilidades = [
    {
      nome: 'Sem erro',
      descricao: 'Ganha +3 em cada dado de ataque.'
    },
    {
      nome: 'Imbatível',
      descricao: 'A cada ataque que acertar no inimigo receberá de vida o dano dado nele e se sua vida chegar no limite será acrescentado permanentemente.'
    },
    {
      nome: 'Furacão',
      descricao: 'Sempre que estiver no meio do mapa poderá atacar todos os inimigos ao mesmo tempo.'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(prev => prev === index ? null : index);
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      const selected = `${habilidades[selectedIndex].nome}: ${habilidades[selectedIndex].descricao}`;
      setSelecionada(selected);
    } else {
      setSelecionada(null);
    }
  }, [selectedIndex, setSelecionada]);

  return (
    <div className="habilidade-passiva-section">
      <h2>Habilidade Especial Passiva (Escolha 1)</h2>
      <div className="habilidades-grid">
        {habilidades.map((habilidade, index) => (
          <div
            key={index}
            className={`habilidade-card ${selectedIndex === index ? 'selected' : ''}`}
          >
            <h3>{habilidade.nome}</h3>
            <p>{habilidade.descricao}</p>
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
      </div>
    </div>
  );
}

export default HabilidadePassiva;