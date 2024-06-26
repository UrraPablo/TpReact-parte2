import React from "react";
import Card from '../Card/Card';

export const Grid = ({ elements }) => {
  return (
   <div className="grid grid-cols-3 gap-4 mb-4">
      {elements.map((element, index) => (
        <Card key={index} element={element} className="card" />
      ))}
    </div>
  );
};