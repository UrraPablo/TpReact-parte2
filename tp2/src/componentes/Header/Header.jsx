import React from 'react';
import styles from './Header.module.css';
import { Input } from '../Input/Input';
import { Link } from 'react-router-dom';

export const Header = ({ onInputChange }) => {
  return (
    <nav className='navbar mb-5'>
      <ul className="flex justify-between items-center">
        <li>
          <Link to="/"> <img className={`${styles.logoPagina} p-0`} src="/imagenes/logo.png" alt="Logo de la Pagina"/> </Link>
        </li>
        {onInputChange && (
          <li className='flex items-center'>
            <Input onInputChange={onInputChange} /> {/* Pasamos la función onInputChange como prop */}
          </li>
        )}
        <li></li>
      </ul>
    </nav>
  );
};