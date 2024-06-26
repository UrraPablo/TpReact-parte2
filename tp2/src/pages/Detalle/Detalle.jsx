import React, { useState, useEffect } from 'react';
import { Header } from '../../componentes/Header/Header';
import { Footer } from '../../componentes/Footer/Footer';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'
import './Detalle.module.css';
import {Button} from '../../componentes/Button/Button';
import {jsPDF} from 'jspdf';

const Detalle = () => {

const generarPdf =async()=>{
  const pdf=new jsPDF('p','mm','a4');
  const datos = await document.querySelector('#toPdf');
  pdf.html(datos).then(()=>{
    pdf.save('detalleAuto.pdf');
  })
}

  const { id } = useParams();

  const [auto, setAuto] = useState({});

  useEffect(() => {
    fetch(`/mock/auto-${id}.json`)
      .then(response => response.json())
      .then(data => {
        setAuto(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <div id='toPdf' className='flex flex-col min-h-screen'>
      <Header></Header>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <img src={auto.coverImage} alt={`${auto.marca} ${auto.modelo}`} className="w-full rounded-lg shadow-lg mb-4" />
          </div>
          <div className="md:w-1/2">
            <table className='w-full bg-red-200  border-collapse border-spacing-2 border border-slate-500 ...'>
                <thead>
                    <tr>
                        <th >
                            Marca
                        </th>
                        <th >Modelo</th>
                        <th >Año</th>
                        <th >Precio $US</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{auto.marca}</td>
                        <td>{auto.modelo}</td>
                        <td>{auto.año}</td>
                        <td>{auto.precio}</td>
                    </tr>

                </tbody>    
            </table>

            <h2 className="text-xl font-bold mb-2 font-serif">Características:</h2>
            <ul className="list-disc pl-6 mb-4 bg-gray-100">
              <li>Motor: {auto.caracteristicas?.motor}</li>
              <li>Transmisión: {auto.caracteristicas?.transmision}</li>
              <li>Tracción: {auto.caracteristicas?.tracción}</li>
            </ul>
            <h2 className="text-xl font-bold mt-4 mb-2">Detalles:</h2>
            <ul className="list-disc pl-6 bg-gray-100">
              <li>Asientos: {auto.detalles?.asientos}</li>
              <li>Puertas: {auto.detalles?.puertas}</li>
              <li>Kilómetros: {auto.detalles?.kilometros}</li>
            </ul>
            <Button texto='generar PDF' onClick={generarPdf}/>
            <Link to={'/'}>
              <Button texto='Volver'/>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Detalle;