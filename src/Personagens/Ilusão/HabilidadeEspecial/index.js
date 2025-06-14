import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function HabilidadeEspecial({ setSelecionada }) {
  const habilidades = [
    {
      nome: 'Ilusão 2.0 (P)',
      descricao: 'Faz 2 ilusões, quando um jogador atacar uma ilusão ela só irá desaparecer quando o jogador a matar, a ilusão falsa pode batalhar normalmente(ilusão falsa não utiliza nada a nao ser os ataques, vida e defesa do original), quando jogar o dado para se movimentar, movimentará você e as ilusões, A partir do momento que estiver sendo atacado e utilizar poderes ou qualquer outra coisa sem ser ataque, vida e defesa padrão, aquele será o verdadeiro ilusão.'
    },
    {
      nome: 'Morte forjada (D)',
      descricao: 'Ao entrar em um combate e morrer, aparecerá no seu ponto de queda com a quantidade de vida que estava antes do combate em que "morreu" e o inimigo retorna ao numero de vida que estava antes do combate.'
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
            <div 
              key={i} 
              className={`description-container ${selectedIndex === i ? 'selected' : ''}`}
              onClick={() => handleClick(i)}
            >
              <p className="so-text-bold">{habilidade.nome}</p>
              <p>{habilidade.descricao}</p>
              <ConfirmButton onClick={() => handleClick(i)}>
                {selectedIndex === i ? 'Selecionado' : 'Selecionar'}
              </ConfirmButton>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default HabilidadeEspecial;