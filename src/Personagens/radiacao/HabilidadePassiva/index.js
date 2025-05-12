import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function HabilidadePassiva({ setSelecionada }) {
  const hab = [
    { nome: 'Radioativo', descricao: 'Inimigos a 1 perdem 1 de vida/rodada; com ≤8 de vida dano vira 2 e alcance 2.' },
    { nome: 'Sangue Radioativo', descricao: 'Ganha 2 de vida por rodada; ao atingir limite vira temporária.' },
    { nome: 'Nuvem verde', descricao: 'Inimigos a ≤6 perdem 3 de vida/rodada dentro da nuvem.' },
    { nome: 'Explosão', descricao: 'Ao fim do combate causa 5 de dano se você estiver vivo.' }
  ];
  const [i, setI] = useState(null);
  useEffect(() => { setSelecionada(i !== null ? [`${hab[i].nome}: ${hab[i].descricao}`] : null); }, [i]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 1 Habilidade Passiva:</h1>
        <div className="container">
          {hab.map((h, idx) => (
            <div key={idx} className="description-container">
              <p className="so-text-bold">{h.nome}</p>
              <p>{h.descricao}</p>
              <ConfirmButton onClick={() => setI(i === idx ? null : idx)} disabled={i !== null && i !== idx}>Confirmar</ConfirmButton>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default HabilidadePassiva;