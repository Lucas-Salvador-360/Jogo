import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AtaquesPrimarias from './AtaquesPrimarias';
import AtaquesSemLimites from './AtaquesSemLimites';
import Poderes from './Poderes';
import './styles.css';

function MULHERtITANIUM() {
  const [selectedPrimarias, setSelectedPrimarias] = useState([]);
  const [selectedSemLimites, setSelectedSemLimites] = useState([]);
  const [selectedPoderes, setSelectedPoderes] = useState([]);
  
  const navigate = useNavigate();

  const handleCriarFicha = () => {
    const ficha = {
      tipo: 'mULHERtITANIUM',
      armasPrimarias: selectedPrimarias,
      ataquesSemLimites: selectedSemLimites,
      poderes: selectedPoderes,
      statsFixos: {
        PE: 2,
        AO: 3,
        IDE: 2,
        defesa: '3 dados'
      },
      modoReivolk: 'Modo Reivolk, Titanium 5B: Ganha +2 dados de defesa e +2 em cada dado de ataque.'
    };

    navigate('/ficha', { state: ficha });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>MULHER TITANIUM (Destruidora)</h1>
        <p>Vantagem: Pode alternar de ataque no meio do combate</p>
        <p>Técnica: Deserto d12, Cidade d10, Lixão d8, Montanha d6</p>
        
        <AtaquesPrimarias setSelecionadas={setSelectedPrimarias} />
        <AtaquesSemLimites setSelecionadas={setSelectedSemLimites} />
        <Poderes setSelecionados={setSelectedPoderes} />
        
        <footer className="footer-buttons">
          <button onClick={handleCriarFicha} className="btn-acao">Criar Ficha</button>
          <button onClick={() => navigate('/')} className="btn-acao">Home</button>
        </footer>
      </header>
    </div>
  );
}

export default MULHERtITANIUM;