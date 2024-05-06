import React from 'react';
import styles from './Header.module.css';
import { Input } from '../Input/Input';

export const Header = ({ onInputChange }) => {
  return (
    <nav className='navbar mb-5'>
      <ul className="flex justify-between items-center">
        <li>
          <img className={`${styles.logoPagina} p-2`} src="/imagenes/logo.png" alt="Logo de la Pagina" />
        </li>
        <li className='flex items-center'>
          <Input onInputChange={onInputChange} /> {/* Pasamos la función onInputChange como prop */}
        </li>
        <li></li>
      </ul>
    </nav>
  );
};