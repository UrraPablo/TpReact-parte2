import React from 'react';
import './Button.module.css';

export const Button = ({texto,onCkick}) => {
  return (
    <button onClick={onCkick} >{texto}</button>
  )
}
