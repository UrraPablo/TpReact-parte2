import React from 'react';

export const Footer = () => {
  return (
    <footer className='flex flex-row justify-between items-center bg-red-600 text-white w-full mt-auto'>
      <div className='w-1/4'>
        <h3 className="text-base font-normal">Ubicación</h3>
        <p>San Martín 123, Neuquén Capital</p>
      </div>
      <div className='w-1/4'>
        <h3 className="text-base font-normal">Sobre Nosotros</h3>
      </div>
      <div className='w-1/2 flex justify-end'>
        <h3 className="text-base font-normal mr-2">Contáctenos</h3>
        <a href="#" className="footer-icon">
          <img src='/imagenes/Whatsapp.png' alt='Logo Whatsapp' className="w-6 h-6 hover:scale-110" />
        </a>
        <a href="#" className="footer-icon">
          <img src='/imagenes/instagram.png' alt='Logo Instagram' className="w-6 h-6 hover:scale-110" />
        </a>
        <a href="#" className="footer-icon mr-1">
          <img src='/imagenes/twitter.png' alt='Logo Twitter' className="w-9 h-6 hover:scale-110" />
        </a>
      </div>
    </footer>
  )
}