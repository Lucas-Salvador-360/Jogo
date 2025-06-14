import React, { useState, useEffect } from 'react';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function Dispositivos({ setSelecionados }) {
  const dispositivos = [
    '(P)Orbe Alterador: Pode anular o destino que foi traçado ao último inimigo que esteve em combate contra você.',
    '(D)Pingente do destino: Pode acrescentar +1 na quantidade de dados acertados durante o combate para alterar o destino do inimigo.',
    '(A)Colar do poder: Ganha +1 dado de ataque até o fim do combate.',
    '(A)Nucleo espiritual: Ganha +1 em cada dado de defesa até o fim do combate.',
    '(A)Orbe da morte: Se durante o combate você conseguir acertar todos os dados de um ataque, o destino do inimigo vai automaticamente para o 6, ao final do combate ele jogará um d6 e se ele tirar 5 ou 6 ele consegue escapar deste destino.'
  ];

  const [selected, setSelected] = useState([]);

  const handleClick = (i) => {
    setSelected(prev => {
      if (prev.includes(i)) {
        return prev.filter(idx => idx !== i);
      } else if (prev.length < 3) {
        return [...prev, i];
      }
      return prev;
    });
  };

  useEffect(() => {
    const selectedItems = selected.map(i => dispositivos[i]);
    setSelecionados(selectedItems);
  }, [selected, setSelecionados, dispositivos]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 3 Dispositivos:</h1>
        <div className="container-grid">
          {dispositivos.map((dispositivo, i) => (
            <div key={i} className={`description-container ${selected.includes(i) ? 'selected' : ''}`}>
              <p>{dispositivo}</p>
              <ConfirmButton
                onClick={() => handleClick(i)}
                disabled={selected.length >= 3 && !selected.includes(i)}
              >
                {selected.includes(i) ? 'Selecionado' : 'Selecionar'}
              </ConfirmButton>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Dispositivos;