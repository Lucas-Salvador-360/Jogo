import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function Poderes({ setSelecionados }) {
  const poderes = [
    { nome: '(A)Danificado', descricao: 'Impede o uso de passivas no inimigo até o fim do combate.' },
    { nome: '(A)Corrosivo', descricao: 'Inimigo causa dano com apenas 1 dado até o fim do combate.' },
    { nome: '(A)Percepção', descricao: 'Defende-se com 3 dados até o fim do combate.' },
    { nome: '(A)Radioatividade', descricao: 'Sacrifica um ataque para remover 2 ataques do inimigo.' }
  ];
  const [idx, setIdx] = useState(null);
  useEffect(() => { setSelecionados(idx !== null ? [`${poderes[idx].nome}: ${poderes[idx].descricao}`] : []); }, [idx]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 1 Poder:</h1>
        <div className="container">
          {poderes.map((p, i) => (
            <div key={i} className="description-container">
              <p className="so-text-bold">{p.nome}</p>
              <p>{p.descricao}</p>
              <ConfirmButton onClick={() => setIdx(idx === i ? null : i)} disabled={idx !== null && idx !== i}>Confirmar</ConfirmButton>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Poderes;