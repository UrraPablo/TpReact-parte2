import React from "react";
import {Link} from 'react-router-dom'
export const Card = ({ element }) => {
    return (
        <Link to={`/detalle/${element.id}`} state={{ detalle: element }}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg transform transition-transform bg-neutral-100 hover:scale-105 cursor-pointer">
            <img src={`/imagenes-autos/${element.coverImage}`} alt={element.marca + " " + element.modelo + " " + element.año} className="w-full h-48 object-cover" />
            <div className="px-1 py-1">
                <h2 className="text-xl font-bold mb-1">{element.marca} {element.modelo}</h2>
                <p className="text-gray-600">Año: {element.año}</p>
                <p className="text-gray-600">Precio: ${element.precio}</p>
            </div>
        </div>
        </Link>
    );
};

export default Card;