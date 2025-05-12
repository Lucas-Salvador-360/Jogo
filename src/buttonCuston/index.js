import React from 'react';
import './styles.css';

const ButtonCustom = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="button-custom">
      {children}
    </button>
  );
};

export default ButtonCustom;