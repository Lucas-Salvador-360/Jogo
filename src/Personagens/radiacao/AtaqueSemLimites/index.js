import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';
import Poderes from '../Poderes';
import HabilidadePassiva from '../HabilidadePassiva';
import HabilidadeEspecial from '../HabilidadeEspecial';

function Radiacao() {
    const [confirmCount, setConfirmCount] = useState(0);
    const [confirmedButtons, setConfirmedButtons] = useState([false, false, false]);
    const [selectedPoderes, setSelectedPoderes] = useState(null);
    const [habilidadePassiva, setHabilidadePassiva] = useState(null);
    const [habilidadeEspecial, setHabilidadeEspecial] = useState(null);
    const navigate = useNavigate();
  
    const ataques = [
      { nome: 'Possessão verde', descricao: 'Dano 3 | Distância 0/1 | Segundos 1 | Dados 0\nOBS: inimigo perde 3 de vida automaticamente enquanto estiver nessa distância.' },
      { nome: 'Chuva radioativa', descricao: 'Dano 9 | Distância 1/8 | Segundos 1 | Dados 2\nAmbiente T/A' },
      { nome: 'Infectado', descricao: 'Dano 1 | Distância 0/25 | Segundos 1 | Dados 3\nAmbiente T/A\nOBS: inimigo perde 1 de vida por rodada após ser atingido.' }
    ];
  
    const handleClick = (i) => {
        const updated = [...confirmedButtons];
        if (updated[i]) {
          setConfirmCount(c => c - 1);
          updated[i] = false;
        } else if (confirmCount < 1) {
          setConfirmCount(c => c + 1);
          updated[i] = true;
        }
        setConfirmedButtons(updated);
      };
    
      const handleCriarFicha = () => {
        const ataquesSel = ataques.filter((_, idx) => confirmedButtons[idx]);
        const ficha = {
          tipo: 'radiacao',
          ataquesSemLimites: ataquesSel,
          poderes: selectedPoderes || [],
          habilidadePassiva,
          habilidadeEspecial,
          statsFixos: {
            PE: 4,
            AO: 4,
            IDE: 2,
            defesa: '2 dados'
          },
          modoReivolk: 'Dono da Terra: Faz todos os inimigos perderem 3 de vida sempre que chegar sua primeira rodada passiva.'
        };
        navigate('/ficha', { state: ficha });
      };
    
      return (
        <div className="App">
          <header className="App-header">
            <h1>Escolha 1 Ataque sem Limites:</h1>
            <div className="container">
              {ataques.map((a, idx) => (
                <div key={idx} className="description-container">
                  <p className="so-text-bold">{a.nome}</p>
                  <p>{a.descricao}</p>
                  <ConfirmButton
                    onClick={() => handleClick(idx)}
                    disabled={confirmCount >= 1 && !confirmedButtons[idx]}
                  >
                    Confirmar
                  </ConfirmButton>
                </div>
              ))}
            </div>
          </header>
    
          <Poderes setSelecionados={setSelectedPoderes} />
          <HabilidadePassiva setSelecionada={setHabilidadePassiva} />
          <HabilidadeEspecial setSelecionada={setHabilidadeEspecial} />
    
          {/* Footer ao final de todas as escolhas */}
          <footer className="footer-buttons">
            <button onClick={handleCriarFicha} className="btn-acao">Criar Ficha</button>
            <button onClick={() => navigate('/')} className="btn-acao">Home</button>
          </footer>
        </div>
      );
    }
    
    export default Radiacao;