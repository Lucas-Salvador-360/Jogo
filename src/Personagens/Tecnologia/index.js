import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AtaquesSemLimites from './AtaquesSemLimites';
import HabilidadePassiva from './HabilidadePassiva';
import Dispositivos from './Dispositivos';
import HabilidadeEspecial from './HabilidadeEspecial';
import './styles.css';

const Tecnologia = () => {
  const navigate = useNavigate();
  const [ataquesSemLimites, setAtaquesSemLimites] = useState([]);
  const [habilidadePassiva, setHabilidadePassiva] = useState([]);
  const [dispositivos, setDispositivos] = useState([]);
  const [habilidadeEspecial, setHabilidadeEspecial] = useState([]);

  const handleSubmit = () => {
    const tecnologiaData = {
      personagem: 'Tecnologia',
      tipo: 'tecnologia',
      tecnicas: 'Deserto d20, Cidade d20, Lixão d20, Montanha d20',
      ataquesSemLimites,
      habilidadePassiva,
      dispositivos,
      habilidadeEspecial,
      statsFixos: {
        PE: 5,
        AO: 5,
        IDE: 3,
        defesa: '2 dados'
      },
      modoReivolk: 'Sua vida se regenera e aumenta para 30, Ganha +2 dados de ataque em todos os seus ataques e pode usar mais de um pulo'
    };

    navigate('/ficha', { state: tecnologiaData });
  };

  return (
    <div className="container">
      <h1>Tecnologia (Duelista)</h1>
      <div className="tecnicas">
        <h2>Técnicas</h2>
        <p>Deserto d20, Cidade d20, Lixão d20, Montanha d20</p>
      </div>

      <AtaquesSemLimites
        ataquesSelecionados={ataquesSemLimites}
        setAtaquesSelecionados={setAtaquesSemLimites}
      />

      <HabilidadePassiva
        habilidadeSelecionada={habilidadePassiva}
        setHabilidadeSelecionada={setHabilidadePassiva}
      />

      <Dispositivos
        dispositivosSelecionados={dispositivos}
        setDispositivosSelecionados={setDispositivos}
      />

      <HabilidadeEspecial
        habilidadeSelecionada={habilidadeEspecial}
        setHabilidadeSelecionada={setHabilidadeEspecial}
      />

      <div className="stats-fixos">
        <h2>Stats Fixos</h2>
        <p><strong>P.E (Pulo ou Empurrão):</strong> 5</p>
        <p><strong>A.O (Ataque de Oportunidade):</strong> 5</p>
        <p><strong>I.D.E (Item de Exploração):</strong> 3</p>
        <p><strong>Defesa:</strong> 2 dados</p>
      </div>

      <div className="modo-reivolk">
        <h2>Modo Reivolk, Criação Perfeita</h2>
        <p>Sua vida se regenera e aumenta para 30, Ganha +2 dados de ataque em todos os seus ataques e pode usar mais de um pulo</p>
      </div>

      <button
        className="btn-criar"
        onClick={handleSubmit}
        disabled={
          ataquesSemLimites.length !== 2 ||
          habilidadePassiva.length !== 1 ||
          dispositivos.length !== 2 ||
          habilidadeEspecial.length !== 1
        }
      >
        Criar Tecnologia
      </button>
    </div>
  );
};

export default Tecnologia;