import React, { useState } from 'react';
import './styles.css';

function Dispositivos({ setSelecionado }) {
  const [selectedDevice, setSelectedDevice] = useState('');

  const dispositivos = [
    {
      nome: 'Controle (D)',
      descricao: 'Encerra o combate.'
    },
    {
      nome: 'Precursor (A)',
      descricao: 'Ao ser atacado por um inimigo o combate se iniciará como se fosse você que tivesse o atacando.'
    },
    {
      nome: 'Explosão temporal (D)',
      descricao: 'Faz todos os jogadores retornarem ao ponto de queda inicial.'
    }
  ];

  const handleSelect = (dispositivo) => {
    const novaSelecao = selectedDevice === dispositivo.nome ? '' : dispositivo.nome;
    setSelectedDevice(novaSelecao);
    setSelecionado(novaSelecao);
  };

  return (
    <div className="dispositivos-container">
      <h2>Dispositivos (Escolha 1)</h2>
      <div className="dispositivos-grid">
        {dispositivos.map((dispositivo, index) => (
          <div
            key={index}
            className={`dispositivo-card ${selectedDevice === dispositivo.nome ? 'selected' : ''}`}
            onClick={() => handleSelect(dispositivo)}
          >
            <h3>{dispositivo.nome}</h3>
            <p>{dispositivo.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dispositivos;