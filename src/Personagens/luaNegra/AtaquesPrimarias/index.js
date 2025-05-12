import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import ConfirmButton from '../../../ConfirmButton';

function LuaNegra() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const armas = [
    { nome: 'Katana foguete', descricao: 'Dano 10 | Segundos 1 | Distância 5/12 | Dados 2 | Ambiente T/A/E' },
    { nome: 'Katana', descricao: 'Dano 9 | Segundos 1 | Distância 1/5 | Dados 3 | Ambiente T' },
    { nome: 'Katana Energz', descricao: 'Dano 19 | Segundos 0 | Distância 0/1 | Dados 1 | Ambiente T' }
  ];

  const dispositivos = [
    '(D)Cortina de fumaça', '(P)Armadilha', '(D)Braços tecnológicos',
    '(P)Pernas tecnológicas', '(P)Roupa escura', '(D)Roupa protetora',
    '(A)Mini torreta', '(A)Sensor', '(A)Traje refletor',
    '(D)Absorção', '(A)Afiador'
  ];

  const poderes = [
    '(D)Super pulo', '(A)Corte fatal', '(D)Técnica'
  ];

  const especiais = [
    '(A)Corta Crânios', '(P)Ataque surpresa'
  ];

  const handleSelect = (i) => setSelected(i === selected ? null : i);

  const handleNext = () => {
    const ficha = {
      tipo: 'luaNegra',
      armaPrimaria: armas[selected],
      dispositivos,
      poderes,
      habilidadeEspecial: especiais,
      statsFixos: { PE:10, AO:10, IDE:3, defesa: '1 dado' },
      modoReivolk: 'Modo Rei Volk, Destruidora de Vidas: Pode se movimentar até 12 metros por rodada sem precisar jogar dado de movimentação e mata qualquer inimigo acertando apenas 1 dado de ataque e durante um combate pode gastar um pulo no início da sua rodada ou da rodada do inimigo e entrar em Ambiente Aéreo até a próxima rodada do combate.'
    };
    navigate('/ficha', { state: ficha });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lua Negra (Agressiva)</h1>
        <h2>Selecione 1 Arma Primária:</h2>
        <div className="container">
          {armas.map((a, i) => (
            <div key={i} className={`card ${selected===i?'selected':''}`} onClick={() => handleSelect(i)}>
              <p className="so-text-bold">{a.nome}</p>
              <p>{a.descricao}</p>
            </div>
          ))}
        </div>
        <ConfirmButton onClick={handleNext} disabled={selected===null}>
          Próximo
        </ConfirmButton>
      </header>
    </div>
  );
}

export default LuaNegra;