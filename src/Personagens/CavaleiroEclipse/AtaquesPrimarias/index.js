import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';
import Poderes from '../Poderes';
import HabilidadePassiva from '../HabilidadePassiva';
import HabilidadeEspecial from '../HabilidadeEspecial';

function CavaleiroEclipse() {
  const navigate = useNavigate();
  const [selectedArmas, setSelectedArmas] = useState([]);
  const [selectedPoderes, setSelectedPoderes] = useState([]);
  const [habilidadePassiva, setHabilidadePassiva] = useState([]);
  const [habilidadeEspecial, setHabilidadeEspecial] = useState(null);

  const observacaoPDT = "Obs: No início de cada rodada sua você jogará 2 d6 e acumulará um ponto de transformação(P.d.T) por cada 6 tirado, e caso já tenha acumulado algum P.D.T, no início da sua rodada terá que escolher entre jogar os 3 d6 ou gastar 1 ponto e deixar o mundo em eclipse lhe permitindo usar todos os poderes de seu personagem, algumas passivas e ataques no modo eclipse por 1 rodada (enquanto o mundo nao estiver em eclipse você só poderá se defender e usar as armas primárias e passivas no modo normal).";
  
  const tecnicas = "Técnica: Deserto d8, Cidade d4, Montanha d12, Lixão d6.";

  const armas = [
    { 
      nome: 'Espada do Julgamento', 
      descricao: 'Normal: Dano 8 | Distância 0/1 | Segundos 1 | Dados 2 | Ambiente T\nEclipse: Dano (infinito) | Distância (Infinita) | Segundos 0 | Dados 1 | Ambiente T/A/E\nEfeito: No modo eclipse seu dado de ataque ganha +1.'
    },
    { 
      nome: 'Arco Sagrado', 
      descricao: 'Normal: Dano 6 | Distância 9/15 | Segundos 2 | Dados 3 | Ambiente T/A\nEclipse: Dano 7 | Distância 9/15 | Segundos 1 | Dados 3 | Ambiente T/A/E\nEfeito: no modo eclipse você não precisa estar entre pontos de conexão para atacar o inimigo.'
    },
    { 
      nome: 'Manopla do Desespero', 
      descricao: 'Normal: Dano 2 | Distância 0/1 | Segundos 1 | Dados 3 | Ambiente T\nEclipse: Dano 2 | Distância 0/2 | Segundos 0 | Dados 4 | Ambiente T\nEfeito: No modo eclipse Drena 1 de vida do inimigo por cada dado que ele defender(sua vida não pode passar do limite).'
    },
    { 
      nome: 'Armadura do Eclipse', 
      descricao: 'Normal: Dano 5 | Distância 3/10 | Segundos 1 | Dados 2 | Ambiente T\nEclipse: Dano 5 | Distância 2/12 | Segundos -1 | Dados 3 | Ambiente T/A\nEfeito: No modo eclipse você ganha +1 dado para se defender'
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
    const armasSelecionadas = selectedArmas.map(index => armas[index]);
    
    // Verificar se habilidadePassiva existe e tem as propriedades necessárias
    const habilidadesPassivas = habilidadePassiva && habilidadePassiva.habilidades ? habilidadePassiva.habilidades : [];
    const observacaoPassivas = habilidadePassiva && habilidadePassiva.observacao ? habilidadePassiva.observacao : '';
    
    const ficha = {
      tipo: 'cavaleiroEclipse',
      armasPrimarias: armasSelecionadas,
      poderes: selectedPoderes,
      habilidadePassiva: habilidadesPassivas,
      observacaoPassivas: observacaoPassivas,
      habilidadeEspecial,
      statsFixos: { 
        PE: 8, 
        AO: 2, 
        IDE: 1, 
        PDT: 10,
        defesa: '1 dado' 
      },
      modoReivolk: 'Eclipse infinito: Seu modo Eclipse fica ativado sempre e suas passivas de modo normal podem ser usadas no modo Eclipse.',
      observacaoPDT: observacaoPDT,
      tecnicas: tecnicas
    };

    navigate('/ficha', { state: ficha });
  };

  return (
    <div className="App" style={{ backgroundColor: '#282c34', minHeight: '100vh' }}>
      <header className="App-header">
        <h1>Cavaleiro do Eclipse (Transformação)</h1>
        <p className="observacao">{observacaoPDT}</p>
        <p className="observacao">{tecnicas}</p>
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
          onClick={() => selectedArmas.length === 2 && window.scrollTo(0, document.querySelector('.poderes-section').offsetTop)} 
          disabled={selectedArmas.length !== 2}
        >
          Próximo
        </ConfirmButton>
      </header>

      <div className="poderes-section">
        <Poderes setSelecionados={setSelectedPoderes} />
      </div>
      <HabilidadePassiva setSelecionada={setHabilidadePassiva} />
      <HabilidadeEspecial setSelecionada={setHabilidadeEspecial} />

      <footer className="footer-buttons">
        <button onClick={handleCriarFicha} className="btn-acao" disabled={selectedArmas.length !== 2}>Criar Ficha</button>
        <button onClick={() => navigate('/')} className="btn-acao">Home</button>
      </footer>
    </div>
  );
}

export default CavaleiroEclipse;