import React, { useState } from 'react';
import './Input.module.css';

export const Input = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);

    onInputChange(value); // Llama a la función de filtro con el nuevo valor del input
    console.log(onInputChange);
  };

  return (
    <input type='text' placeholder="Buscar..." value={inputValue} onChange={handleChange} />
  );
};