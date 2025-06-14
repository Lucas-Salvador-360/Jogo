import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function HabilidadePassiva({ habilidadeSelecionada, setHabilidadeSelecionada }) {
  const habilidades = [
    {
      nome: 'Duelista',
      descricao: 'Faz com que os seus dados de defesa se tornem dados de ataque, fazendo com que você ataque seu inimigo ao mesmo tempo que ele está te atacando, usará o número de dados do ataque sem limite que estará usando naquele momento, se der empate o adversário vence (essa passiva é opcional e pode ser ativada e desativada a qualquer momento do combate).'
    },
    {
      nome: 'Egoísta',
      descricao: 'Ganha +1 ataque em cada combate.'
    },
    {
      nome: 'Pressão',
      descricao: 'Fica com o dobro de dano no seu primeiro ataque no combate.'
    },
    {
      nome: 'Atualização',
      descricao: 'Ao terminar um combate o jogador adversário jogará um D6 e o número que ele tirar será a quantidade de vida que você irá ganhar e quando sua vida chegar no limite vai sendo acrescentado.'
    }
  ];

  const handleClick = (index) => {
    const habilidade = habilidades[index];
    if (habilidadeSelecionada.includes(habilidade)) {
      setHabilidadeSelecionada([]);
    } else {
      setHabilidadeSelecionada([habilidade]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 1 Habilidade Passiva:</h1>

        <div className="container">
          {habilidades.map((habilidade, i) => (
            <div key={i} className="description-container">
              <p className="so-text-bold">{habilidade.nome}</p>
              <p>{habilidade.descricao}</p>
              <ConfirmButton
                onClick={() => handleClick(i)}
                disabled={habilidadeSelecionada.length === 1 && !habilidadeSelecionada.includes(habilidades[i])}
              >
                Confirmar
              </ConfirmButton>
            </div>
          ))}
        </div>

        <div className="footer-buttons">
          <button
            className="btn-acao"
            onClick={() => setHabilidadeSelecionada([])}
            disabled={habilidadeSelecionada.length === 0}
          >
            Limpar Seleção
          </button>
          <Link to="/" className="btn-acao">
            Home
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HabilidadePassiva;