import React from 'react';
import './Footer.module.css';

export const Footer = () => {
  return (
    <footer className='flex flex-row bg-red-600'>
      <div className='basis-1/4'>
        <h3>Ubicacion </h3>
        <p>San Martin 123, Neuquen Capital</p>
      </div>
      <div className='basis-1/4'>
          <h3>Sobre Nosotros</h3>
      </div>
      <div className='basis-1/2'>
        <h3>Contactenos</h3>
        <img src='../../../public/imagenes/Whatsapp.png' alt='Logo Whatsapp'></img>
        <img src='../../../public/imagenes/instagram.png' alt='Logo Instagram'></img>
        <img src='../../../public/imagenes/twitter.png' alt='Logo Twitter'></img>
      </div>
    </footer>
  )
}
  