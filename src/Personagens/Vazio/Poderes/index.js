import React, { useState } from 'react';
import './styles.css';

const poderes = [
  {
    nome: 'Cópia',
    tipo: '(A)',
    descricao: 'Cópia o ataque s. limite ou arma primária do inimigo que iniciou o combate contra você(dura até o fim do seu ataque).'
  },
  {
    nome: 'Supremo',
    tipo: '(A,D)',
    descricao: 'Pode usar um dos poderes que o inimigo usou durante o combate.'
  },
  {
    nome: 'Energia Obscura',
    tipo: '(A)',
    descricao: 'Seu ataque ganha +2 de dano até o fim do combate.'
  },
  {
    nome: 'Onipresente',
    tipo: '(A)',
    descricao: 'Ao iniciar um ataque contra um inimigo pode se multiplicar e atacar +1 inimigo qualquer, mas mantendo a mesma distância que você estava ao iniciar o ataque contra o primeiro(durante o combate a vida da sua segunda presença será contada separadamente, se ao encerrar o combate você ficou vivo nos dois combates, você pode escolher qual das duas peças irá sumir), sua segunda presença iniciará o combate com a mesma quantidade da sua vida atual, dura até o fim do combate, tudo o que você usar durante o combate a sua segunda presença também usará.'
  },
  {
    nome: 'Vida do Vazio',
    tipo: '(P)',
    descricao: 'Drena 2 de vida automaticamente de cada jogador inimigo(não pode se mover durante 1 rodada e nem se defender).'
  },
  {
    nome: 'Recarga',
    tipo: '(P)',
    descricao: 'Recupera três pulos(precisa estar no centro do mapa).'
  },
  {
    nome: 'Deslocamento',
    tipo: '(P)',
    descricao: 'Pode se teletransportar para qualquer parte do mapa(menos dentro de locais de exploração).'
  },
  {
    nome: 'Reserva',
    tipo: '(A)',
    descricao: 'Durante um combate inteiro pode gastar mais de um pulo para desviar de dados inimigos, mas a cada pulo reserva que você usar você gasta dois pulos.'
  }
];

function Poderes({ setSelecionados }) {
  const [confirmCount, setConfirmCount] = useState(0);
  const [confirmedButtons, setConfirmedButtons] = useState(new Array(poderes.length).fill(false));

  const handleClick = (index) => {
    const newConfirmedButtons = [...confirmedButtons];
    
    if (newConfirmedButtons[index]) {
      newConfirmedButtons[index] = false;
      setConfirmCount(confirmCount - 1);
    } else if (confirmCount < 4) {
      newConfirmedButtons[index] = true;
      setConfirmCount(confirmCount + 1);
    }

    setConfirmedButtons(newConfirmedButtons);
    const selectedPowers = poderes.filter((_, i) => newConfirmedButtons[i]);
    setSelecionados(selectedPowers);
  };

  const handleLimpar = () => {
    setConfirmedButtons(new Array(poderes.length).fill(false));
    setConfirmCount(0);
    setSelecionados([]);
  };

  return (
    <div className="poderes-container">
      <h2>Poderes (Escolha 4)</h2>
      <div className="poderes-grid">
        {poderes.map((poder, index) => (
          <div
            key={index}
            className={`poder-card ${confirmedButtons[index] ? 'selected' : ''}`}
            onClick={() => handleClick(index)}
          >
            <h3>{poder.nome} {poder.tipo}</h3>
            <p>{poder.descricao}</p>
          </div>
        ))}
      </div>
      <div className="botoes-footer">
        <button onClick={handleLimpar}>Limpar Seleção</button>
        <span className="contador">Selecionados: {confirmCount}/4</span>
      </div>
    </div>
  );
}

export default Poderes;