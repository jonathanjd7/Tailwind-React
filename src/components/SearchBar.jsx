import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value); // Actualiza el estado con el valor del input
    onSearch(event.target.value);  // Llama a la función para filtrar productos
  };

  return (
    <input
      type="text" placeholder="Buscar productos..." 
      value={query} onChange={handleInputChange}
      className="border rounded px-4 py-2 bg-neutral-50 text-amber-300"
    />
  );
}

export default SearchBar;
