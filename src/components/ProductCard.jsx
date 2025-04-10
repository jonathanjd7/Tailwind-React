import React, { useState } from "react";
import { FaShoppingCart, FaDollarSign } from 'react-icons/fa';
import PropTypes from 'prop-types';


function ProductCard({ title, description, price, imageUrl }) {
  const [likes, setLikes] = useState(0);

  // Función para incrementar los likes
  const handleLike = () => {
    setLikes(likes + 1); // Actualiza el estado sumando 1
  };

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={imageUrl}
        alt={title}
        className="w-48 h-48 object-cover rounded-mb mb-4 mx-auto mt-6 rounded 2x1 transition duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-blue-600 font-bold text-lg">{price} €</span>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors hover:bg-fuchsia-600 flex items-center justify-center m-4 tracking-tight"
            onClick={handleLike}
          >
            <div className="px-2"><FaShoppingCart/> </div>
           
            Comprar
          </button>
        </div>
        <p className="flex items-center justify-center gap-2 text-white-800 rounded-2xl bg-amber-500 p-2 transition-colors hover:bg-red-700"> 
          <FaDollarSign/>  Compras: {likes} 
        </p>
        
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProductCard;
