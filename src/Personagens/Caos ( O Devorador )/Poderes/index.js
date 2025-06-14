import React, { useState } from 'react';
import './styles.css';

const Poderes = ({ setFicha }) => {
  const [poderesSelecionados, setPoderesSelecionados] = useState([]);
  
  const poderes = [
    {
      nome: "Evaporação",
      tipo: "P",
      descricao: "Fica Intangível por 1 rodada não podendo ser atacado por ninguém mas também não poderá atacar e ganha +10 metros de movimentação até o fim do seu turno."
    },
    {
      nome: "Expansão Devoradora",
      tipo: "A",
      descricao: "Durante um combate, sempre que acertar todos os dados de ataque no inimigo, Caos ganha +5 metros de Aura por 2 rodadas. (dura até o fim do combate)."
    },
    {
      nome: "Aura Perigosa",
      tipo: "A",
      descricao: "Drena 3 da vida do inimigo que você ou ele iniciou um combate dentro da sua Aura nesta rodada."
    },
    {
      nome: "Aura Restauradora",
      tipo: "P",
      descricao: "Recupera 1 de vida a cada início de sua primeira rodada passiva(dura 5 rodadas)."
    },
    {
      nome: "Aura Reserva",
      tipo: "P",
      descricao: "Sua Aura ganha +10 metros por 1 rodada."
    },
    {
      nome: "Energia Conquistada",
      tipo: "A",
      descricao: "O dado de cada dado de ataque é equivalente a quantidade de metros que sua Aura tem (duração de apenas um ataque), após ativar este poder você perde 5 de vida."
    }
  ];

  const selecionarPoder = (poder) => {
    if (poderesSelecionados.length >= 3 && !poderesSelecionados.includes(poder)) {
      return;
    }
    
    const novosPoderes = poderesSelecionados.includes(poder)
      ? poderesSelecionados.filter(p => p !== poder)
      : [...poderesSelecionados, poder];
    
    setPoderesSelecionados(novosPoderes);
    setFicha(prev => ({
      ...prev,
      poderes: novosPoderes
    }));
  };

  return (
    <div className="container">
      <h2>Poderes (Selecione 3)</h2>
      <div className="poderes-container">
        {poderes.map((poder, index) => (
          <div 
            key={index} 
            className={`poder-card ${poderesSelecionados.includes(poder) ? 'selected' : ''} ${poderesSelecionados.length >= 3 && !poderesSelecionados.includes(poder) ? 'disabled' : ''}`}
            onClick={() => selecionarPoder(poder)}
          >
            <h3>{poder.nome} ({poder.tipo})</h3>
            <p>{poder.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poderes;