import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';
import Dispositivos from '../Dispositivos';
import HabilidadeEspecial from '../HabilidadeEspecial';

function Kader() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [selectedArmas, setSelectedArmas] = useState([]);
  const [selectedDispositivos, setSelectedDispositivos] = useState([]);
  const [habilidadeEspecial, setHabilidadeEspecial] = useState(null);

  const armas = [
    { 
      nome: 'Lamina Espiritual', 
      descricao: 'Dano 2 | Distância 0/3 | Segundos 1 | Dados 4 | Ambiente T'
    },
    { 
      nome: 'Selo Ancestral', 
      descricao: `Dano 2 | Distância 3/7 | Segundos 1 | Dados 2 | Ambiente T
Efeito: Ganha 3 de escudo a cada numero 6 que cair no combate sendo seu ou não, o escudo se acumula e dura mesmo após o combate, o escudo funciona assim, dano do inimigo menos o numero do escudo, se o dano ultrapassar o numero do escudo, ele se quebra e você sofre o dano que sobrou do ataque.`
    },
    { 
      nome: 'Mãos Temporais', 
      descricao: `Dano 5 | Distância 6/15 | Segundos 0 | Dados 2 | Ambiente T/A
Efeito: Não precisa estar entre pontos de conexão.`
    },
    { 
      nome: 'Peso ancestral', 
      descricao: 'Dano 1 | Distância 4/10 | Segundos 1 | Dados 6 | Ambiente T/A/E'
    }
  ];
  

  const handleSelect = (i) => {
    setSelectedArmas(prev => {
      // Se já está selecionado, remove da seleção
      if (prev.includes(i)) {
        return prev.filter(index => index !== i);
      }
      // Se não está selecionado e já tem 2 selecionados, não faz nada
      else if (prev.length >= 2) {
        return prev;
      }
      // Se não está selecionado e tem menos de 2 selecionados, adiciona
      else {
        return [...prev, i];
      }
    });
  };

  const handleCriarFicha = () => {
    // Verificar se todas as seleções necessárias foram feitas
    if (selectedArmas.length !== 2 || !selectedDispositivos || selectedDispositivos.length === 0 || !habilidadeEspecial) {
      alert('Por favor, selecione 2 armas primárias, pelo menos 1 dispositivo e 1 habilidade especial.');
      return;
    }

    const armasSelecionadas = selectedArmas.map(index => armas[index]);
    
    const ficha = {
      tipo: 'kader',
      armasPrimarias: armasSelecionadas,
      dispositivos: selectedDispositivos,
      habilidadeEspecial,
      statsFixos: { 
        PE: 3, 
        AO: 8, 
        IDE: 2, 
        defesa: '2 dados' 
      },
      modoReivolk: 'Modo Reivolk, Sem escapatória: O destino de número 6 é aplicado a cada inimigo que entrar em combate com você.'
    };

    // Usar o navigate com state para passar os dados da ficha
    navigate('/ficha', { state: ficha });
  };

  const handleHomeClick = () => {
    // Navegação explícita para a rota raiz
    navigate('/');
  };

  return (
    <div className="App" style={{ backgroundColor: '#282c34', minHeight: '100vh' }}>
      <header className="App-header">
        <h1>Kader (Dona do Destino)</h1>
        <h2>Selecione 2 Armas Primárias:</h2>
        <div className="container">
          {armas.map((a, i) => (
            <div 
              key={i} 
              className={`card ${selectedArmas.includes(i) ? 'selected' : ''}`} 
              onClick={() => handleSelect(i)}
            >
              <p className="so-text-bold">{a.nome}</p>
              <p style={{ whiteSpace: 'pre-line' }}>{a.descricao}</p>
            </div>
          ))}
        </div>
        <ConfirmButton 
          onClick={() => selectedArmas.length === 2 && window.scrollTo(0, document.querySelector('.dispositivos-section').offsetTop)} 
          disabled={selectedArmas.length !== 2}
        >
          Próximo
        </ConfirmButton>
      </header>

      <div className="dispositivos-section">
        <Dispositivos setSelecionados={setSelectedDispositivos} />
      </div>
      <HabilidadeEspecial setSelecionada={setHabilidadeEspecial} />

      <footer className="footer-buttons">
        <button onClick={handleCriarFicha} className="btn-acao">Criar Ficha</button>
        <button onClick={() => navigate('/')} className="btn-acao">Home</button>
      </footer>
    </div>
  );
}

export default Kader;