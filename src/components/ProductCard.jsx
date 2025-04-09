import React, { useState } from "react";


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
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-blue-600 font-bold text-lg">{price} €</span>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors hover:bg-fuchsia-600"
            onClick={handleLike}
          >
            Comprar
          </button>
        </div>
        <p className="text-green-600 rounded-2xl bg-amber-500 p-4">
          Compras: {likes}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
