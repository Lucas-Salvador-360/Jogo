import React, { useState, useEffect } from 'react';
import ConfirmButton from '../../../ConfirmButton';
import './styles.css';

function HabilidadePassiva({ setSelecionada }) {
  const habilidades = [
    {
      nome: 'Teletransporte',
      descricao: 'Pode se teletransportar tanto para fugir como também para atacar durante um combate ou para se movimentar a até 6 metros de distância(gasta 1 pulo).'
    },
    {
      nome: 'Reflexo',
      descricao: 'Joga 6 dados para se defender do primeiro ataque recebido em um combate.'
    },
    {
      nome: 'Livramento',
      descricao: 'A cada final de um combate que você iniciou ou recebeu, pode teletransportar o inimigo que estava em combate com você a até 10 metros de distância.'
    },
    {
      nome: 'Oportunista',
      descricao: 'Sempre que um combate se inicia, pode se teletransportar para a posição exata e dar um ataque de oportunidade.'
    },
    {
      nome: 'Olho Absoluto',
      descricao: 'Em seu primeiro ataque no combate, cada dado de ataque seu recebe dano extra, dano extra será o dano do ataque que o inimigo está usando.'
    },
    {
      nome: 'Controlador Absoluto',
      descricao: 'Pode se teletransportar para qualquer parte do mapa exceto dentro de locais de exploração(Gasta 2 pulos) e pode ser usado em combate como (D).'
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
        <h1>Escolha 1 Habilidade Passiva:</h1>
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

export default HabilidadePassiva;