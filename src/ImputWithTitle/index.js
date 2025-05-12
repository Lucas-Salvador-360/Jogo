import React from 'react';
import './styles.css';

const InputWithTitle = ({ title, value, onChange }) => {
  return (
    <div className="input-with-title">
      <label className="input-title">{title}</label>
      <input
        type="text"
        className="input-field"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputWithTitle;