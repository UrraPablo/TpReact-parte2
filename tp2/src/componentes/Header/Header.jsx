import React from 'react';
import './Header.module.css';
import { Input } from '../Input/Input';


export const Header = () => {
  return (
    <nav className='navbar'>
        <ul>
          <li>
            <img className='logoPagina' src="../../../public/imagenes/lamborginiLogo.jpg" alt="Logo de la Pagina" />

          </li>
          <li>
             <img className='logoHome' src="../../../public/imagenes/home_circle_icon_137496.svg" alt="logo home" />

          </li>
          <li className='input'>
            <Input/>

          </li>

        </ul>
    </nav>
    

  )
}
