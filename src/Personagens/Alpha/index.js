import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AtaquesSemLimites from './AtaquesSemLimites';
import HabilidadePassiva from './HabilidadePassiva';
import Poderes from './Poderes';
import Dispositivos from './Dispositivos';
import HabilidadeEspecial from './HabilidadeEspecial';
import './styles.css';

function Alpha() {
  const navigate = useNavigate();
  const [ataquesSelecionados, setAtaquesSelecionados] = useState([]);
  const [habilidadePassivaSelecionada, setHabilidadePassivaSelecionada] = useState('');
  const [poderesSelecionados, setPoderesSelecionados] = useState([]);
  const [dispositivoSelecionado, setDispositivoSelecionado] = useState('');
  const [habilidadeEspecialSelecionada, setHabilidadeEspecialSelecionada] = useState('');

  const handleSubmit = () => {
    const ficha = {
      tipo: 'alpha',
      ataquesSemLimites: ataquesSelecionados,
      habilidadePassiva: habilidadePassivaSelecionada,
      poderes: poderesSelecionados,
      dispositivos: [dispositivoSelecionado],
      habilidadeEspecial: habilidadeEspecialSelecionada,
      statsFixos: {
        PE: 5,
        AO: 2,
        IDE: 3,
        defesa: '2 dados'
      },
      modoReivolk: 'Recupera todos os pulos e vai gastando 1 pulo por rodada automaticamente, após gastar todos os pulos o tempo irá parar por 3 rodadas deixando todos os inimigos imóveis, sem ação e sem defesa por 3 rodadas, após as 3 rodadas recupera todos os pulos novamente.'
    };

    navigate('/ficha', { state: ficha });
  };

  return (
    <div className="personagem-container">
      <h1>Alpha (Dono do Tempo)</h1>
      <div className="tecnicas">
        <h2>Técnicas</h2>
        <p>Deserto d12, Cidade d10, Lixão d10, Montanha d12</p>
      </div>
      <AtaquesSemLimites setSelecionados={setAtaquesSelecionados} />
      <HabilidadePassiva setSelecionada={setHabilidadePassivaSelecionada} />
      <Poderes setSelecionados={setPoderesSelecionados} />
      <Dispositivos setSelecionado={setDispositivoSelecionado} />
      <HabilidadeEspecial setSelecionada={setHabilidadeEspecialSelecionada} />
      <div className="stats-fixos">
        <h2>Estatísticas Fixas</h2>
        <p><strong>P.E.:</strong> 5</p>
        <p><strong>A.O.:</strong> 2</p>
        <p><strong>I.D.E.:</strong> 3</p>
        <p><strong>Defesa:</strong> 2 dados</p>
      </div>
      <div className="modo-reivolk">
        <h2>Modo Reivolk, Dono do Espaço Tempo</h2>
        <p>Recupera todos os pulos e vai gastando 1 pulo por rodada automaticamente, após gastar todos os pulos o tempo irá parar por 3 rodadas deixando todos os inimigos imóveis, sem ação e sem defesa por 3 rodadas, após as 3 rodadas recupera todos os pulos novamente.</p>
      </div>
      <button onClick={handleSubmit} className="btn-criar">Criar Ficha</button>
    </div>
  );
}

export default Alpha;