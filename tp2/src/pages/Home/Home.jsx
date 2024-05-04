import React from 'react'
import {Header} from '../../componentes/Header/Header';
import { Footer } from '../../componentes/Footer/Footer';
import { Button } from '../../componentes/Button/Button';



export const Home = () => {

  return (
    <div>
      <Header/>
      <div>
        <img src='../../../public/imagenes/logoPagina.jpg' alt='logoAuto'></img>
        Home Page 
      </div>
      <Button texto='Detalles'/>
      <Footer/>
    </div>
  )
}
