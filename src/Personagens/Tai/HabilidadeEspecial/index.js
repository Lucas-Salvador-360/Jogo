import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function HabilidadeEspecial({ setSelecionada }) {
  const habilidades = [
    {
      nome: 'Modo Reivolk, Dona da Existência',
      descricao: 'Sua vida aumenta para 200, e após usar todos os seus poderes e dispositivos, eles serão restaurados automaticamente até o fim da partida e sempre que terminar um combate com mais vida que seu inimigo você o apagará da existência, retirando-o do jogo.'
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState(0); // Auto-seleciona a única opção

  useEffect(() => {
    // Como só há uma opção, já a selecionamos automaticamente
    const selected = `${habilidades[selectedIndex].nome}: ${habilidades[selectedIndex].descricao}`;
    setSelecionada(selected);
  }, [selectedIndex, setSelecionada]);

  return (
    <div className="App">
      <header className="App-header">
        {/* Título removido conforme solicitado */}

        <div className="container">
          {habilidades.map((habilidade, i) => (
            <div key={i} className="description-container">
              <p className="so-text-bold">{habilidade.nome}</p>
              <p>{habilidade.descricao}</p>
              <ConfirmButton
                onClick={() => {}}
                disabled={true}
              >
                Confirmado
              </ConfirmButton>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default HabilidadeEspecial;