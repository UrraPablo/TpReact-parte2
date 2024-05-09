import React from 'react'
import {Header} from '../../componentes/Header/Header';
import { Footer } from '../../componentes/Footer/Footer';
//import { Button } from '../../componentes/Button/Button';
import { Grid } from '../../componentes/Grid/Grid';
import { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
import './Home.modules.css';

export const Home = () => {
  const [allElements, setAllElements] = useState([]);
  const [filteredElements, setFilteredElements] = useState([]);

  useEffect(() => {
    fetch('/mock/autos.json')
      .then(response => response.json())
      .then(data => {
        setAllElements(data);
        setFilteredElements(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFilter = (value) => {
    const filtered = allElements.filter(element => {
      const marca = element.marca ? element.marca.toLowerCase() : '';
      const modelo = element.modelo ? element.modelo.toLowerCase() : '';
      const color = element.color ? element.color.toLowerCase() : '';
  
      return (
        marca.includes(value.toLowerCase()) ||
        modelo.includes(value.toLowerCase()) ||
        color.includes(value.toLowerCase())
      );
    });
    setFilteredElements(filtered);
  };

  return (
    <div className="bg-neutral-900 flex flex-col min-h-screen">
      <Header onInputChange={handleFilter} /> {/* Pasamos la función de filtro como prop */}
      <div className="flex flex-col items-center justify-center">
        <Grid elements={filteredElements} />
      </div>
      <Footer />
    </div>
  );
};
