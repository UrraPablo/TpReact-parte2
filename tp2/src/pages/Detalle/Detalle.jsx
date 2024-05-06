import React, { useState, useEffect } from 'react';
import { Header } from '../../componentes/Header/Header';
import { Footer } from '../../componentes/Footer/Footer';
import { useParams } from 'react-router-dom';

const Detalle = () => {
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
    <div>
      <Header></Header>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2">
            <img src={auto.coverImage} alt={`${auto.marca} ${auto.modelo}`} className="w-full rounded-lg shadow-lg mb-4" />
            <h2 className="text-xl font-bold mb-2">Características:</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Motor: {auto.caracteristicas?.motor}</li>
              <li>Transmisión: {auto.caracteristicas?.transmision}</li>
              <li>Tracción: {auto.caracteristicas?.tracción}</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg">Marca: {auto.marca}</p>
            <p className="text-lg">Modelo: {auto.modelo}</p>
            <p className="text-lg">Año: {auto.año}</p>
            <p className="text-lg">Precio: {auto.precio}</p>
            <h2 className="text-xl font-bold mt-4 mb-2">Detalles:</h2>
            <ul className="list-disc pl-6">
              <li>Asientos: {auto.detalles?.asientos}</li>
              <li>Puertas: {auto.detalles?.puertas}</li>
              <li>Kilómetros: {auto.detalles?.kilometros}</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Detalle;