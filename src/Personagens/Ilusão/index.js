import React from 'react';
import { useNavigate } from 'react-router-dom';
import AtaquesSemLimites from './AtaquesSemLimites';
import './styles.css';

function Ilusao() {
  const navigate = useNavigate();

  return (
    <div className="personagem-container">
      <AtaquesSemLimites />
    </div>
  );
}

export default Ilusao;