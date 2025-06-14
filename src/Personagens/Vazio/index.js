import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { tecnicas, statsFixos, modoReivolk } from './bd';
import AtaquesSemLimites from './AtaquesSemLimites';
import Poderes from './Poderes';
import HabilidadePassiva from './HabilidadePassiva';
import Dispositivos from './Dispositivos';
import HabilidadeEspecialPassiva from './HabilidadeEspecialPassiva';

function Vazio() {
  const navigate = useNavigate();
  const [ataqueSelecionado, setAtaqueSelecionado] = useState([]);
  const [poderesSelecionados, setPoderesSelecionados] = useState([]);
  const [habilidadePassivaSelecionada, setHabilidadePassivaSelecionada] = useState(null);
  const [dispositivoSelecionado, setDispositivoSelecionado] = useState(null);
  const [habilidadeEspecialSelecionada, setHabilidadeEspecialSelecionada] = useState(null);

  const handleCriarFicha = () => {
    const ficha = {
      tipo: 'vazio',
      tecnicas,
      ataqueSemLimites: ataqueSelecionado,
      poderes: poderesSelecionados,
      habilidadePassiva: habilidadePassivaSelecionada,
      dispositivo: dispositivoSelecionado,
      habilidadeEspecialPassiva: habilidadeEspecialSelecionada,
      statsFixos,
      modoReivolk
    };

    navigate('/ficha', { state: ficha });
  };

  return (
    <div className="container">
      <h1>Vazio (?????)</h1>
      
      <div className="tecnicas">
        <h2>Técnicas</h2>
        <p>Deserto: {tecnicas.deserto}</p>
        <p>Cidade: {tecnicas.cidade}</p>
        <p>Lixão: {tecnicas.lixao}</p>
        <p>Montanha: {tecnicas.montanha}</p>
      </div>

      <AtaquesSemLimites
        ataqueSelecionado={ataqueSelecionado}
        setAtaqueSelecionado={setAtaqueSelecionado}
      />

      <Poderes setSelecionados={setPoderesSelecionados} />

      <HabilidadePassiva setSelecionada={setHabilidadePassivaSelecionada} />

      <Dispositivos setSelecionado={setDispositivoSelecionado} />

      <HabilidadeEspecialPassiva setSelecionada={setHabilidadeEspecialSelecionada} />

      <div className="stats-fixos">
        <h2>Stats Fixos</h2>
        <p>P.E (Pulo ou Empurrão): {statsFixos.PE}</p>
        <p>A.O (Ataque de Oportunidade): {statsFixos.AO}</p>
        <p>I.D.E (Item de Exploração): {statsFixos.IDE}</p>
        <p>Defesa: {statsFixos.defesa}</p>
      </div>

      <div className="modo-reivolk">
        <h2>Modo Reivolk, Vazio Infinito</h2>
        <p>{modoReivolk}</p>
      </div>

      <button
        className="btn-criar"
        onClick={handleCriarFicha}
        disabled={
          ataqueSelecionado.length === 0 ||
          poderesSelecionados.length !== 4 ||
          !habilidadePassivaSelecionada ||
          !dispositivoSelecionado ||
          !habilidadeEspecialSelecionada
        }
      >
        Criar Ficha
      </button>
    </div>
  );
}

export default Vazio;