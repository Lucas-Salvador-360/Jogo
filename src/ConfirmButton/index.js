import React, { useState } from 'react';
import './styles.css';

const ConfirmButton = ({ onClick, children, disabled }) => {
  const [confirmed, setConfirmed] = useState(false);

  const handleClick = () => {
    if (!disabled && !confirmed) {
      setConfirmed(true);  // Marca o botão como confirmado
      onClick(); // Chama a função de click do componente pai
    } else if (!disabled && confirmed) {
      setConfirmed(false); // Desmarca o botão, permitindo alternar
      onClick(); // Chama a função de click do componente pai
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`confirm-button ${confirmed ? 'confirmed' : ''}`}
      disabled={disabled} // Desabilita o botão se necessário
    >
      {confirmed ? 'Confirmado' : children} {/* Alteração do texto do botão */}
    </button>
  );
};

export default ConfirmButton;
