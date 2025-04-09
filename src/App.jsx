import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// No olvides estas importaciones en tus componentes
 // Si tienes estilos CSS



// ProductCard.jsx
function ProductCard() {
  const [likes, setLikes] = useState(0);
   // Función para incrementar los likes
   const handleLike = () => {
    setLikes(likes + 1); // Actualiza el estado sumando 1
  };

  return (
  <div>

    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src="https://picsum.photos/id/237/600/400"
        alt="Producto"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">Perrito</h3>
        <p className="text-gray-600 text-sm mt-2">
          Descripción breve del producto. Algo llamativo y útil para el usuario.
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-blue-600 font-bold text-lg">€499.99</span>

          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            onClick={handleLike}> 
            Comprar
          </button>
        </div>
        <p className="text-green-600 text-sm mt-2">Compras: {likes}</p> {/* Muestra los likes */}
      </div>
    </div>
  </div>
  );

}


export default ProductCard;



