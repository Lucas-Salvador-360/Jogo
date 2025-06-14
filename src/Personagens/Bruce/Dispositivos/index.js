import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function Dispositivos({ setSelecionados }) {
  const dispositivos = [
    {
      nome: '(P)Traje invisível',
      descricao: 'Te deixa invisível por uma rodada (não pode ser atacado mas pode atacar sem que o inimigo revide).'
    },
    {
      nome: '(A)Flash bang',
      descricao: 'Transforma seus itens (P) em (A) até o fim do combate.'
    },
    {
      nome: '(A)Traje de energia',
      descricao: 'Empurra um inimigo que esteja te atacando de 0/5 de distância para até 10 metros.'
    },
    {
      nome: '(A)Campo de força',
      descricao: 'Faz o inimigo te atacar com apenas 1 dado até o fim do combate.'
    },
    {
      nome: '(D)Manopla mística',
      descricao: 'Retorna o ataque para o inimigo que o atacou fazendo ele se defender dos próprios dados.'
    },
    {
      nome: '(P)Kit médico',
      descricao: 'Enche 10 de vida.'
    },
    {
      nome: '(D)Rastreador',
      descricao: 'Deixa um rastreador no inimigo e toda vez que ele for te atacar você o atacará primeiro.'
    },
    {
      nome: '(A)Notebook',
      descricao: 'Desabilita os Poderes e dispositivos do inimigo até o fim do combate.'
    },
    {
      nome: '(A)Tranquilizante',
      descricao: 'Após acertar pelo menos um ataque durante o combate, o inimigo terá que ficar 1 rodada sem se movimentar.'
    },
    {
      nome: '(P)Upgrade',
      descricao: '+5 de distância para sua arma e +1 de dano até o fim do combate.'
    },
    {
      nome: '(A)Braço Robótico',
      descricao: 'Joga 5 dados para se defender de um ataque a até 2 metros de distância, até o fim do combate.'
    },
    {
      nome: '(A)Gatilho',
      descricao: 'Ataca o inimigo fazendo com que ele revide apenas uma vez.'
    }
  ];

  const [selectedIndices, setSelectedIndices] = useState([]);

  const handleClick = (index) => {
    setSelectedIndices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else if (prev.length < 6) {
        return [...prev, index];
      }
      return prev;
    });
  };

  useEffect(() => {
    const selected = selectedIndices.map(index => `${dispositivos[index].nome}: ${dispositivos[index].descricao}`);
    setSelecionados(selected);
  }, [selectedIndices, setSelecionados]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 6 Dispositivos:</h1>

        <div className="container-grid">
          {dispositivos.map((dispositivo, i) => (
            <div key={i} className={`description-container ${selectedIndices.includes(i) ? 'selected' : ''}`}>
              <p className="so-text-bold">{dispositivo.nome}</p>
              <p>{dispositivo.descricao}</p>
              <ConfirmButton
                onClick={() => handleClick(i)}
                disabled={selectedIndices.length >= 6 && !selectedIndices.includes(i)}
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

export default Dispositivos;