import React, { useState, useEffect } from 'react';
import ConfirmButton from '../../../ConfirmButton';
import './styles.css';

function Dispositivos({ setSelecionados }) {
  const dispositivos = [
    {
      nome: '(P)Luva Laser',
      descricao: 'Pode ser usado de 0/30 de distância para tirar 2 de vida automaticamente de um inimigo(não precisa estar em linha reta ou entre pontos de conexão).'
    },
    {
      nome: '(A)mini míssil',
      descricao: 'Acrescenta +5 de dano em todos os seus dados durante um ataque.'
    },
    {
      nome: '(A)Estimulante',
      descricao: 'Enche toda a sua vida.'
    },
    {
      nome: '(P)Injeção',
      descricao: 'Acrescenta +10 de vida ao iniciar um combate na rodada em que ativou injeção, dura até o fim do combate.'
    }
  ];

  const [selectedIndices, setSelectedIndices] = useState([]);

  const handleClick = (index) => {
    setSelectedIndices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else if (prev.length < 2) {
        return [...prev, index];
      }
      return prev;
    });
  };

  useEffect(() => {
    const selecionados = dispositivos
      .filter((_, i) => selectedIndices.includes(i))
      .map(d => `${d.nome}: ${d.descricao}`);
    setSelecionados(selecionados);
  }, [selectedIndices, setSelecionados]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Escolha 2 Dispositivos:</h1>
        <div className="container">
          {dispositivos.map((dispositivo, i) => (
            <div key={i} className="description-container">
              <p className="so-text-bold">{dispositivo.nome}</p>
              <p>{dispositivo.descricao}</p>
              <ConfirmButton
                onClick={() => handleClick(i)}
                disabled={selectedIndices.length >= 2 && !selectedIndices.includes(i)}
              >
                {selectedIndices.includes(i) ? 'Selecionado' : 'Selecionar'}
              </ConfirmButton>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Dispositivos;