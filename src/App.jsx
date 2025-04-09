import React from "react";
import Header from "./components/Header"; // Asegúrate de que la ruta sea correcta
import Footer from "./components/Footer"; // Asegúrate de que la ruta sea correcta
import ProductCard from "./components/ProductCard"; // Asegúrate de que la ruta sea correcta
import SearchBar from "./components/SearchBar"; // Asegúrate de que la ruta sea correcta
import { useState } from "react"; // Importa useState desde React

import "./App.css"; // Importa tu archivo CSS

function App() {
  // Lista de productos
  
  const products = [
    {
      id: 1,
      title: "Superman ",
      description: "SuperMan Movie",
      price: "10.99",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/superman-2025-67640c868e672.jpg?crop=1xw:1xh;center,top&resize=980:",
    },
    {
      id: 2,
      title: "Capitan America",
      description: "Descripción del producto 2",
      price: "29.99",
      imageUrl: "https://erikstore.com/blog/wp-content/uploads/2024/12/Captain_America_Brave_New_World.jpg",
    },
    {
      id: 3,
      title: "Nieve",
      description: "Descripción del producto 3",
      price: "1.99",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Ax7TlMdBc8KgwpP_zUUCWR3Ay51s7T2J3w&s",
    },
    {
      id: 4,
      title: "BlancaNieves",
      description: "Descripción del producto 4",
      price: "2.99",
      imageUrl: "https://www.ociostock.com/cms/site_0001/comunicados/img_381899_644fd0eddc9692ead70fae8694b9d848_1.jpg",
    },
    {
      id: 5,
      title: "Stitch",
      description: "Descripción del producto 5",
      price: "4.99",
      imageUrl: "https://imagenes.20minutos.es/files/image_640_auto/uploads/imagenes/2024/11/25/lilo-stitch.jpeg",
    },
    {
      id: 6,
      title: "Shutter Island",
      description: "Descripción del producto 6",
      price: "7.99",
      imageUrl: "https://pymstatic.com/21157/conversions/peliculas-de-suspense-small-16_9.jpg",
    },
    {
      id: 7,
      title: "Avatar 2",
      description: "Avatar 2",
      price: "5.15",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/avatar-66ca0a9027f05.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
      id: 8,
      title: "Aquaman",
      description: "Descripción del producto 8",
      price: "10.99",
      imageUrl: "https://media.revistagq.com/photos/5ca5f1b3f46488687cf49211/16:9/w_1280,c_limit/peliculas_mas_taquilleras_5260.jpg",
    },
  ];

  // Estado para guardar los productos filtrados
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Función para filtrar los productos según la búsqueda
  const handleSearch = (query) => {
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered); // Actualiza los productos filtrados
  };

  return (
    <div>
      <Header />
     
      <div className="min-h-screen flex flex-col items-center bg-gray-600 p-4">
        <SearchBar onSearch={handleSearch} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))
          ) : (
            <p className="text-white-500">No se encontraron productos</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default App;


