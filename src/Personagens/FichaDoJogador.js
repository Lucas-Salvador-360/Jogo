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
  const isLuaNegra = ficha.tipo === 'luaNegra';
  const isBruce = ficha.tipo === 'bruce';
  const isCavaleiroEclipse = ficha.tipo === 'cavaleiroEclipse';
  const isKader = ficha.tipo === 'kader';
  const isTai = ficha.tipo === 'tai';
  const isAtomicoExplosao = ficha.tipo === 'atomicoExplosao';

  return (
    <div className="ficha-page">
      <h2>Ficha do Jogador</h2>

      {/* Adicionar observação para Atômico(Explosão) no início da ficha */}
      {isAtomicoExplosao && ficha.modoReivolk && (
        <div className="observacao-section">
          <p><strong>Observação - Modo Reivolk, Explosão perfeita:</strong> {ficha.modoReivolk}</p>
        </div>
      )}

      {isCavaleiroEclipse && ficha.observacaoPDT && (
        <div className="observacao-section">
          <p>{ficha.observacaoPDT}</p>
          <p>{ficha.tecnicas}</p>
        </div>
      )}

      {/* Adicionar observação para Tai no início da ficha */}
      {isTai && ficha.modoReivolk && (
        <div className="observacao-section">
          <p><strong>Observação - Modo Reivolk, Dona da Existência:</strong> {ficha.modoReivolk}</p>
        </div>
      )}

      {(isLuaNegra || isBruce || isCavaleiroEclipse || isKader) ? (
        <>
          <p><strong>Arma Primária:</strong></p>
          <ul>
            {(isCavaleiroEclipse || isKader) ? (
              // Para Cavaleiro do Eclipse e Kader, que têm um array de armas
              ficha.armasPrimarias?.map((arma, i) => (
                <li key={i}>
                  <strong>{arma.nome}:</strong> {arma.descricao}
                </li>
              ))
            ) : (
              // Para os outros personagens que têm apenas uma arma
              <li>
                <strong>{ficha.armaPrimaria.nome}:</strong> {ficha.armaPrimaria.descricao}
              </li>
            )}
          </ul>

          {(isLuaNegra || isBruce || isKader) && (
            <>
              <p><strong>Dispositivos:</strong></p>
              <ul>
                {ficha.dispositivos && ficha.dispositivos.map((dispositivo, i) => (
                  <li key={i}>{dispositivo}</li>
                ))}
              </ul>
            </>
          )}
        </>
      ) : (
        <>
          <p><strong>Ataques sem Limites:</strong></p>
          <ul>
            {ficha.ataquesSemLimites?.map((ataque, i) => (
              <li key={i}>
                <strong>{ataque.nome}:</strong> {ataque.descricao}
              </li>
            ))}
          </ul>
        </>
      )}

      <p><strong>Poderes:</strong> {Array.isArray(ficha.poderes) ? ficha.poderes.join(', ') : (typeof ficha.poderes === 'string' ? ficha.poderes : '')}</p>
      
      {(!isLuaNegra) && (
        <>
          <p><strong>Habilidade Passiva:</strong> {Array.isArray(ficha.habilidadePassiva) ? ficha.habilidadePassiva.join(', ') : (typeof ficha.habilidadePassiva === 'string' ? ficha.habilidadePassiva : '')}</p>
          {isCavaleiroEclipse && ficha.observacaoPassivas && (
            <p className="observacao-passivas">{ficha.observacaoPassivas}</p>
          )}
        </>
      )}
      
      {/* Não mostrar Habilidade Especial para Tai */}
      {!isTai && (
        <p><strong>Habilidade Especial:</strong> {isLuaNegra || isBruce || isCavaleiroEclipse || isKader ? ficha.habilidadeEspecial : (Array.isArray(ficha.habilidadeEspecial) ? ficha.habilidadeEspecial.join(', ') : (typeof ficha.habilidadeEspecial === 'string' ? ficha.habilidadeEspecial : ''))}</p>
      )}

      {(isRadiacao || isImpacto || isLuaNegra || isBruce || isCavaleiroEclipse || isKader || isTai) && (
        <>
          <h3>Estatísticas Fixas</h3>
          <ul>
            <li><strong>P.E.:</strong> {ficha.statsFixos.PE}</li>
            <li><strong>A.O.:</strong> {ficha.statsFixos.AO}</li>
            <li><strong>I.D.E.:</strong> {ficha.statsFixos.IDE}</li>
            {isCavaleiroEclipse && <li><strong>P.D.T.:</strong> {ficha.statsFixos.PDT}</li>}
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

      {isLuaNegra && (
        <p><strong>Modo Reivolk, Destruidora de Vidas:</strong> {ficha.modoReivolk}</p>
      )}

      {isBruce && (
        <p><strong>Modo Reivolk, Precisão de um Deus:</strong> {ficha.modoReivolk}</p>
      )}

      {isCavaleiroEclipse && (
        <p><strong>Modo Reivolk, Eclipse infinito:</strong> {ficha.modoReivolk}</p>
      )}

      {isKader && (
        <p><strong>Modo Reivolk, Sem escapatória:</strong> {ficha.modoReivolk}</p>
      )}

      {/* Remover a exibição do Modo Reivolk no final para Tai, pois já está como observação no início */}

      {ficha.personagem === 'Caos' && (
        <div className="modo-reivolk">
          <h3>MODO REIVOLK, DEVORADOR DE ENERGIAS</h3>
          <p>Sua aura se expande pelo mapa e universo, você ganha +3 em cada dado de ataque e defesa e o limite da sua vida aumenta +10 a cada rodada.</p>
        </div>
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