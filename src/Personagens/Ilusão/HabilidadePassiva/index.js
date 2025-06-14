import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function HabilidadePassiva({ setSelecionada }) {
  const habilidades = [
    {
      nome: 'Preparado',
      descricao: 'Sempre anda com um grupo de ilusões fazendo com que assim que um inimigo iniciar um ataque contra você, ele erre o primeiro ataque automaticamente.'
    },
    {
      nome: 'Dupla',
      descricao: 'Anda acompanhado de uma ilusão fazendo com que durante um combate possa pular mais de uma vez , mas a cada dado a mais que você desviar gasta um pulo.'
    },
    {
      nome: 'Isca',
      descricao: 'Após o inimigo realizar o primeiro ataque dele, pode desaparecer e reaparecer na distância exata para atacar o inimigo com o seu ataque(ao reaparecer pode alternar o ataque).'
    },
    {
      nome: 'Decisivo',
      descricao: 'A cada início de combate pode decidir se vai defender com apenas 1 dado e ganhar +1 ataque, defender com 3 dados e não revidar ou defender com o número normal de dados e revidar.'
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

export default HabilidadePassiva;