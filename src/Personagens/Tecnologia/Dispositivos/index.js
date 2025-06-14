import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function Dispositivos({ dispositivosSelecionados, setDispositivosSelecionados }) {
  const dispositivos = [
    {
      nome: 'Escudo (A)',
      descricao: 'Pode jogar +2 dados para se defender até o fim do combate.'
    },
    {
      nome: 'Voo (P)',
      descricao: 'Pode voar até 30 Metros.'
    },
    {
      nome: 'Análise (A)',
      descricao: 'Pode ver a ficha de um jogador que você esteja atacando ou sendo atacado por ele e escolherá um poder, habilidade passiva ou dispositivo para se tornar imune àquilo até o fim do combate.'
    },
    {
      nome: 'Dash (A)',
      descricao: 'Consegue pular 10 metros, seja para fugir, para continuar o combate ou para entrar em ambiente Aereo(gasta um pulo), dura até o fim do turno.'
    },
    {
      nome: 'Segundo ataque (A)',
      descricao: 'A cada ataque que você acertar o inimigo perderá +1 de vida, dura até o fim do combate.'
    },
    {
      nome: 'Absorvição (A)',
      descricao: 'Durante um ataque recebe apenas metade do dano do ataque total do inimigo (se o número for ímpar recebe a minoria).'
    },
    {
      nome: 'Fora de órbita (P)',
      descricao: 'Voa para fora do planeta(Ambiente Espaço) e fica lá por 5 rodadas e ao retornar, poderá cair em qualquer parte do mapa (menos dentro de locais de exploração e ao voltar pode jogar o dado de movimentação).'
    }
  ];

  const [selectedIndices, setSelectedIndices] = useState([]);

  const handleClick = (index) => {
    setSelectedIndices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else if (prev.length < 2) {
        return [...prev, index];
      }
      return prev;
    });
  };

  useEffect(() => {
    const selected = selectedIndices.map(index => dispositivos[index]);
    setDispositivosSelecionados(selected);
  }, [selectedIndices, setDispositivosSelecionados]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 2 Dispositivos:</h1>

        <div className="container-grid">
          {dispositivos.map((dispositivo, i) => (
            <div key={i} className={`description-container ${selectedIndices.includes(i) ? 'selected' : ''}`}>
              <p className="so-text-bold">{dispositivo.nome}</p>
              <p>{dispositivo.descricao}</p>
              <ConfirmButton
                onClick={() => handleClick(i)}
                disabled={selectedIndices.length >= 2 && !selectedIndices.includes(i)}
              >
                {selectedIndices.includes(i) ? 'Selecionado' : 'Selecionar'}
              </ConfirmButton>
            </div>
          ))}
        </div>

        <div className="footer-buttons">
          <button
            className="btn-acao"
            onClick={() => {
              setSelectedIndices([]);
              setDispositivosSelecionados([]);
            }}
            disabled={selectedIndices.length === 0}
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

export default Dispositivos;