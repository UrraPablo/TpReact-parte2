import React from 'react';
import './Header.module.css';

export const Header = () => {
  return (
    <nav className='navbar'>
        <img className='logoPagina' src="../../../public/imagenes/lamborginiLogo.jpg" alt="Logo de la Pagina" />
        <img className='logoHome' src="../../../public/imagenes/home_circle_icon_137496.svg" alt="logo home" />
        <input className='busqueda' type="text" placeholder='busqueda'/>
    </nav>
  )
}
