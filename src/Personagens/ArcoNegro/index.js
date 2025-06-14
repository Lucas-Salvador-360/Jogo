import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { tecnicas, statsFixos, modoReivolk } from './bd';
import AtaquesPrimarias from './AtaquesPrimarias';
import Poderes from './Poderes';
import HabilidadePassiva from './HabilidadePassiva';

function ArcoNegro() {
  const navigate = useNavigate();
  const [ataqueSelecionado, setAtaqueSelecionado] = useState([]);
  const [poderesSelecionados, setPoderesSelecionados] = useState([]);
  const [habilidadePassivaSelecionada, setHabilidadePassivaSelecionada] = useState(null);

  const handleCriarFicha = () => {
    const ficha = {
      tipo: 'arcoNegro',
      tecnicas,
      ataquePrimario: ataqueSelecionado,
      poderes: poderesSelecionados,
      habilidadePassiva: habilidadePassivaSelecionada,
      statsFixos,
      modoReivolk
    };

    navigate('/ficha', { state: ficha });
  };

  return (
    <div className="container">
      <h1>Arco Negro (Sanguinário)</h1>
      
      <div className="tecnicas">
        <h2>Técnicas</h2>
        <p>Deserto: {tecnicas.deserto}</p>
        <p>Cidade: {tecnicas.cidade}</p>
        <p>Lixão: {tecnicas.lixao}</p>
        <p>Montanha: {tecnicas.montanha}</p>
      </div>

      <AtaquesPrimarias
        ataqueSelecionado={ataqueSelecionado}
        setAtaqueSelecionado={setAtaqueSelecionado}
      />

      <Poderes setSelecionados={setPoderesSelecionados} />

      <HabilidadePassiva setSelecionada={setHabilidadePassivaSelecionada} />

      <div className="stats-fixos">
        <h2>Stats Fixos</h2>
        <p>P.E (Pulo ou Empurrão): {statsFixos.PE}</p>
        <p>A.O (Ataque de Oportunidade): {statsFixos.AO}</p>
        <p>I.D.E (Item de Exploração): {statsFixos.IDE}</p>
        <p>Defesa: {statsFixos.defesa}</p>
      </div>

      <div className="modo-reivolk">
        <h2>Modo Reivolk</h2>
        <p>{modoReivolk}</p>
      </div>

      <button
        className="btn-criar"
        onClick={handleCriarFicha}
        disabled={
          ataqueSelecionado.length === 0 ||
          poderesSelecionados.length !== 4 ||
          !habilidadePassivaSelecionada
        }
      >
        Criar Ficha
      </button>
    </div>
  );
}

export default ArcoNegro;