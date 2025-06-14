import React, { useState, useEffect } from 'react';
import ConfirmButton from '../../../ConfirmButton';
import './styles.css';

function Poderes({ setSelecionados }) {
  const poderes = [
    {
      nome: '(A)Paralisia',
      descricao: 'Paralisa o inimigo impedindo-o de se mover e usar pulos até o fim do combate.'
    },
    {
      nome: '(A)Teletransporte preciso',
      descricao: 'Teletransporta você e o inimigo que acabou de iniciar um ataque contra você para qualquer parte do mapa mantendo a mesma distância entre vocês.'
    },
    {
      nome: '(P)Sobrenatural',
      descricao: 'Troca de posição com qualquer inimigo no mapa(menos se ele estiver dentro de um local de exploração).'
    },
    {
      nome: '(A)Olho drenador',
      descricao: 'Seu dado de Técnica drena 5 de vida do inimigo quando der empate ou vitória.'
    },
    {
      nome: '(A)Perda de Tempo',
      descricao: 'Teletransporta um inimigo que esteja em combate com você a até 15 metros de distância.'
    },
    {
      nome: '(P)Intocável',
      descricao: 'Teletransporta um inimigo que esteja a até 30 metros de você para qualquer ponto de queda do mapa.'
    },
    {
      nome: '(A)Luta Adaptada',
      descricao: 'Ao receber um ataque durante um combate, até o fim do combate defenderá aquele número que te deu dano, Exemplo: Se o inimigo te atingir com um dado de número 6, você defenderá qualquer dado com número automaticamente 6 até o fim do combate.'
    }
  ];

  const [selectedIndices, setSelectedIndices] = useState([]);

  const handleClick = (index) => {
    setSelectedIndices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else if (prev.length < 3) {
        return [...prev, index];
      }
      return prev;
    });
  };

  useEffect(() => {
    const selecionados = poderes
      .filter((_, i) => selectedIndices.includes(i))
      .map(p => `${p.nome}: ${p.descricao}`);
    setSelecionados(selecionados);
  }, [selectedIndices, setSelecionados]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 3 Poderes:</h1>
        <div className="container">
          {poderes.map((poder, i) => (
            <div key={i} className="description-container">
              <p className="so-text-bold">{poder.nome}</p>
              <p>{poder.descricao}</p>
              <ConfirmButton
                onClick={() => handleClick(i)}
                disabled={selectedIndices.length >= 3 && !selectedIndices.includes(i)}
              >
                {selectedIndices.includes(i) ? 'Selecionado' : 'Selecionar'}
              </ConfirmButton>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Poderes;