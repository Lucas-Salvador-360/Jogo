import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function HabilidadeEspecial({ setSelecionada }) {
  const habilidades = [
    {
      nome: 'Big Bang',
      descricao: 'Se explode atacando todos os inimigos do mapa e destruindo a terra, joga 5 dados dando 100 de dano cada um e após a explosão você fica com 1 de vida e todos ficam em ambiente espaço e seus ataques podem ser utilizados em ambiente espaço.'
    },
    {
      nome: 'Explosão ofensiva',
      descricao: 'Ao chegar no centro do mapa pode escolher uma região para atacar todos os inimigos que estão nela jogando 3 dados dando 20 de dano cada um.'
    },
    {
      nome: 'Sol Humano',
      descricao: 'Voa e fica em ambiente espaço, e a cada rodada você ganha +500 de dano e após 4 rodadas você retorna em qualquer lugar do mapa  com 2000 de dano em cada dado de ataque seu e a terra fica sem Sol o que faz com que os inimigos percam 1 de vida por rodada e você 2 de vida por rodada.'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(prev => (prev === index ? null : index));
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      const selected = `${habilidades[selectedIndex].nome}: ${habilidades[selectedIndex].descricao}`;
      setSelecionada(selected);
    } else {
      setSelecionada(null);
    }
  }, [selectedIndex, setSelecionada]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 1 Habilidade Especial:</h1>

        <div className="container">
          {habilidades.map((habilidade, i) => (
            <div key={i} className="description-container">
              <p className="so-text-bold">{habilidade.nome}</p>
              <p>{habilidade.descricao}</p>
              <ConfirmButton
                onClick={() => handleClick(i)}
                disabled={selectedIndex !== null && selectedIndex !== i}
              >
                Confirmar
              </ConfirmButton>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default HabilidadeEspecial;