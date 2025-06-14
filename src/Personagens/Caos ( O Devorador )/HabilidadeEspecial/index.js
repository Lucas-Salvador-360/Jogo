import React, { useState } from 'react';
import './styles.css';

const HabilidadeEspecial = ({ setFicha }) => {
  const [habilidadeSelecionada, setHabilidadeSelecionada] = useState(null);
  
  const habilidades = [
    {
      nome: "Domínio Inato",
      tipo: "P",
      descricao: "Sua Aura se expande pelo mapa todo por 3 rodadas."
    },
    {
      nome: "Aura destruidora",
      tipo: "A",
      descricao: "Ganha +5 de dano em seus ataques ao lutar contra um inimigo que esteja dentro de sua Aura(dura 1 rodada)."
    },
    {
      nome: "Morte Sombria",
      tipo: "A",
      descricao: "Se tiver iniciado um combate a 0 de distância de um inimigo você o matará automaticamente."
    },
    {
      nome: "Vulto Macabro",
      tipo: "P",
      descricao: "Pode a cada turno do combate se teletransportar para qualquer distância dentro de sua Aura, não pode usar para fugir do combate(dura 2 rodadas)."
    },
    {
      nome: "Destinado a Vitória",
      tipo: "P",
      descricao: "Sua Aura da +4 em cada dado de ataque e defesa por 2 rodadas."
    }
  ];

  const selecionarHabilidade = (habilidade) => {
    setHabilidadeSelecionada(habilidade);
    setFicha(prev => ({
      ...prev,
      habilidadeEspecial: habilidade
    }));
  };

  return (
    <div className="container">
      <h2>Habilidades Especiais (Selecione 1)</h2>
      <div className="habilidades-container">
        {habilidades.map((habilidade, index) => (
          <div 
            key={index} 
            className={`habilidade-card ${habilidadeSelecionada?.nome === habilidade.nome ? 'selected' : ''}`}
            onClick={() => selecionarHabilidade(habilidade)}
          >
            <h3>{habilidade.nome} ({habilidade.tipo})</h3>
            <p>{habilidade.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabilidadeEspecial;