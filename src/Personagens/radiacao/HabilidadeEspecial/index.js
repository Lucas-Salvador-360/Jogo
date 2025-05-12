import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function HabilidadeEspecial({ setSelecionada }) {
    const especiais = [
      { nome: '(P)Tempestade verde', descricao: 'Tira 10 de vida de todos os inimigos na área 1 de distância.' },
      { nome: '(D)Ressurreição', descricao: 'Ressuscita com 15 de vida no seu ponto de queda.' },
      { nome: '(P)Ponto fraco', descricao: 'Se chegar no centro do mapa, impede todos os jogadores de usarem suas passivas, poderes e dispositivos por 10 rodadas.' },
      { nome: '(P)Dono da Região', descricao: 'Libera radiação na região que está fazendo com que todos os jogadores naquela região percam 2 de vida automaticamente por rodada enquanto estiverem na Região atingida (dura 5 rodadas).' }
    ];
  
    const [selectedIndex, setSelectedIndex] = useState(null);
  
    useEffect(() => {
      if (selectedIndex !== null) {
        setSelecionada(`${especiais[selectedIndex].nome}: ${especiais[selectedIndex].descricao}`);
      } else {
        setSelecionada(null);
      }
    }, [selectedIndex, setSelecionada]);
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Escolha 1 Habilidade Especial:</h1>
          <div className="container">
            {especiais.map((e, idx) => (
              <div key={idx} className="description-container">
                <p className="so-text-bold">{e.nome}</p>
                <p>{e.descricao}</p>
                <ConfirmButton
                  onClick={() => setSelectedIndex(selectedIndex === idx ? null : idx)}
                  disabled={selectedIndex !== null && selectedIndex !== idx}
                >Confirmar</ConfirmButton>
              </div>
            ))}
          </div>
        </header>
      </div>
    );
  }
  
  export default HabilidadeEspecial;