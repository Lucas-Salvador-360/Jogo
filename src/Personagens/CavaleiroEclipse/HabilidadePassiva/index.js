import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function HabilidadePassiva({ setSelecionada }) {
  const habilidades = [
    {
      nome: 'Passos da Morte(EC)',
      descricao: 'Drena 1 de vida de todos os jogadores após se movimentar(sua vida não pode passar do limite).'
    },
    {
      nome: 'Deus do Eclipse(EC)',
      descricao: 'Todos os seus dados de ataque Ganham +1.'
    },
    {
      nome: 'Fraqueza Corrigida(EC)',
      descricao: 'O seu dado de defesa ganha +2'
    },
    {
      nome: 'Escudo Médio(NO)',
      descricao: 'Ganha +1 dado de defesa.'
    },
    {
      nome: 'Esconderijo(NO)',
      descricao: 'Na sua rodada passiva pode gastar 2 pulos para se esconder por 1 rodada não podendo ser atacado por ninguém enquanto estiver escondido não conta como se você estivesse na partida.'
    },
    {
      nome: 'Luta Medieval(NO)',
      descricao: 'Jogará apenas 1 de ataque mas ele será 6(a cada ataque é opcional você usar esta passiva ou não).'
    }
  ];

  const observacaoPassivas = "OBS: As passivas (NO) são passivas normais e durante o eclipse(EC) elas ficam desativadas e vice versa para as passivas eclipse (EC)";

  const [selectedHabilidades, setSelectedHabilidades] = useState([]);

  const handleClick = (index) => {
    setSelectedHabilidades(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else if (prev.length < 3) {
        return [...prev, index];
      }
      return prev;
    });
  };

  useEffect(() => {
    const selectedHabs = selectedHabilidades.map(index => `${habilidades[index].nome}: ${habilidades[index].descricao}`);
    setSelecionada({
      habilidades: selectedHabs,
      observacao: observacaoPassivas
    });
  }, [selectedHabilidades, setSelecionada]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 3 Habilidades Passivas:</h1>
        <p className="observacao">{observacaoPassivas}</p>
        
        <div className="container-grid">
          {habilidades.map((habilidade, i) => (
            <div key={i} className={`description-container ${selectedHabilidades.includes(i) ? 'selected' : ''}`}>
              <p className="so-text-bold">{habilidade.nome}</p>
              <p>{habilidade.descricao}</p>
              <ConfirmButton
                onClick={() => handleClick(i)}
                disabled={selectedHabilidades.length >= 3 && !selectedHabilidades.includes(i)}
              >
                {selectedHabilidades.includes(i) ? 'Selecionado' : 'Selecionar'}
              </ConfirmButton>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default HabilidadePassiva;