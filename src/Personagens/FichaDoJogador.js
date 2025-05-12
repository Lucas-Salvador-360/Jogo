import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './fichaStyles.css';

function FichaDoJogador() {
  const location = useLocation();
  const navigate = useNavigate();
  const ficha = location.state;

  if (!ficha) {
    return <div className="ficha-page">Nenhuma ficha encontrada.</div>;
  }

  const isRadiacao = ficha.tipo === 'radiacao';
  const isImpacto = ficha.tipo === 'impacto';

  return (
    <div className="ficha-page">
      <h2>Ficha do Jogador</h2>

      <p><strong>Ataques sem Limites:</strong></p>
      <ul>
        {ficha.ataquesSemLimites.map((ataque, i) => (
          <li key={i}>
            <strong>{ataque.nome}:</strong> {ataque.descricao}
          </li>
        ))}
      </ul>

      <p><strong>Poderes:</strong> {ficha.poderes.join(', ')}</p>
      <p><strong>Habilidade Passiva:</strong> {ficha.habilidadePassiva}</p>
      <p><strong>Habilidade Especial:</strong> {ficha.habilidadeEspecial}</p>

      {(isRadiacao || isImpacto) && (
        <>
          <h3>Estatísticas Fixas</h3>
          <ul>
            <li><strong>P.E.:</strong> {ficha.statsFixos.PE}</li>
            <li><strong>A.O.:</strong> {ficha.statsFixos.AO}</li>
            <li><strong>I.D.E.:</strong> {ficha.statsFixos.IDE}</li>
            <li><strong>Defesa:</strong> {ficha.statsFixos.defesa}</li>
          </ul>
        </>
      )}

      {isRadiacao && (
        <p><strong>Modo Reivolk – Dono da Terra:</strong> {ficha.modoReivolk}</p>
      )}

      {isImpacto && (
        <p><strong>Modo Rei Volk, Deus da Velocidade:</strong> {ficha.modoReivolkImpacto}</p>
      )}

      <button
        onClick={() => navigate('/')}
        className="btn-voltar"
      >
        Voltar ao Início
      </button>
    </div>
  );
}

export default FichaDoJogador;