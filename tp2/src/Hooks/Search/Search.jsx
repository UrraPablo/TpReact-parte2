import { useState } from 'react';

export const Search = (elements) => {
  const [filtered, setFilteredCars] = useState([]);
  const handleInputChange = (value) => {
    const filtered = elements.filter(element => element.marca.toLowerCase().includes(value.toLowerCase()));
    setFilteredCars(filtered);
  };

  return { handleInputChange }; // Devolver la función handleInputChange
};