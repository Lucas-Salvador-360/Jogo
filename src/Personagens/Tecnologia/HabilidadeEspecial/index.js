import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

const HabilidadeEspecial = ({ habilidadeSelecionada, setHabilidadeSelecionada }) => {
  const habilidades = [
    {
      nome: 'Camikaze (P)',
      descricao: 'Se explode fazendo com que todos os jogadores até 25 metros(não precisa estar entre pontos de conexão) recebam sua explosão e após a explosão vc fica com 1 de vida e não pode se mover nem realizar ações por 2 rodadas(Se usar a explosão dentro de um local de exploração você morrerá, se usar a explosão do lado de fora ela não atingirá o inimigo dentro do local de exploração).',
      explosao: {
        dano: 19,
        distancia: '0|25',
        dados: 3,
        ambiente: 'T/A'
      }
    },
    {
      nome: 'Máquina da Morte (A)',
      descricao: 'Durante um combate inteiro você ganha +2 ataques, dá o triplo de dano e joga +1 dado de defesa.'
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
        <h1>Escolha 1 Habilidade Especial:</h1>
        <div className="container">
          {habilidades.map((habilidade, i) => (
            <div
              key={i}
              className={`description-container ${habilidadeSelecionada.includes(habilidade) ? 'selected' : ''}`}
            >
              <p className="so-text-bold">{habilidade.nome}</p>
              <p>{habilidade.descricao}</p>
              {habilidade.explosao && (
                <div className="explosao-info">
                  <h4>Explosão:</h4>
                  <p><strong>Dano:</strong> {habilidade.explosao.dano}</p>
                  <p><strong>Distância:</strong> {habilidade.explosao.distancia}</p>
                  <p><strong>Dados:</strong> {habilidade.explosao.dados}</p>
                  <p><strong>Ambiente:</strong> {habilidade.explosao.ambiente}</p>
                </div>
              )}
              <ConfirmButton
                onClick={() => handleClick(i)}
                disabled={habilidadeSelecionada.length === 1 && !habilidadeSelecionada.includes(habilidade)}
              >
                {habilidadeSelecionada.includes(habilidade) ? 'Selecionado' : 'Selecionar'}
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

export default HabilidadeEspecial;