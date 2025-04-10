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
      description: "Superman enfrenta el desafío de reconciliar su herencia kryptoniana con los valores humanos que lo definen, mientras protege un mundo que cuestiona sus ideales. A través de su ejemplo, demuestra que la bondad y la esperanza son eternas.",
      price: "10.99",
      imageUrl: "https://globalplay.ar/wp-content/uploads/2024/12/Superman-2025-1-scaled-1.webp",
    },
    {
      id: 2,
      title: "Capitan America: Brave New World",
      description: "Cuarta entrega de la franquicia del Capitán América, la primera con Sam Wilson (Anthony Mackie), ex paracaidista del ejército reconvertido en Vengador como Falcon, llevando el uniforme y el escudo en lugar del retirado Steve Rogers (Chris Evans).",
      price: "29.99",
      imageUrl: "https://erikstore.com/blog/wp-content/uploads/2024/12/Captain_America_Brave_New_World.jpg",
    },
    {
      id: 3,
      title: "Los Pecadores",
      description: "Ambientada en los años 30 (durante la Ley Seca), dos hermanos gemelos (interpretados ambos por el actor Michael B. Jordan) regresan a su ciudad natal para empezar de cero. Pero se dan cuenta de que un poder maligno mucho más temible aguarda ansioso su regreso a casa:  y es que los vampiros han tomado el control del lugar.",
      price: "1.99",
      imageUrl: "https://es.web.img3.acsta.net/img/4e/56/4e56af2ac8498963ab5f1e2003f26743.jpg",
    },
    {
      id: 4,
      title: "BlancaNieves",
      description: "Blanca Nieves está dirigida por Marc Webb, quien saltó a la fama después de dirigir las películas de Spiderman con Andrew Garfield como protagonista. El guion está co-escrito por Greta Gerwig, la misma tras el éxito de Barbie.",
      price: "2.99",
      imageUrl: "https://www.ociostock.com/cms/site_0001/comunicados/img_381899_644fd0eddc9692ead70fae8694b9d848_1.jpg",
    },
    {
      id: 5,
      title: "Lilo & Stitch",
      description: "Lilo es una niña solitaria que vive únicamente con su hermana Nani, quien lucha por mantener y que los servicios sociales las separen, que un día su camino se cruza con Stitch, un proyecto alienígena creado con la única intención de destruir. Desde ese momento Lilo y Stitch se vuelven inseparables y se ayudan mutuamente.",
      price: "4.99",
      imageUrl: "https://images.justwatch.com/poster/322495639/s718/lilo-y-stitch-2024.jpg",
    },
    {
      id: 6,
      title: "Shutter Island",
      description: "En 1954 el agente Teddy Daniels (Leonardo DiCaprio) y su compañero Check Aule (Mark Ruffalo) son enviados a la isla de Shutter Island a investigar en un hospital psiquiátrico donde están internados peligrosos criminales. Una de las pacientes, Rachel Solando (Emily Mortimer / Patricia Clarkson).",
      price: "7.99",
      imageUrl: "https://pymstatic.com/21157/conversions/peliculas-de-suspense-small-16_9.jpg",
    },
    {
      id: 7,
      title: "Avatar 2",
      description: "Varios años después de los sucesos ocurridos en Avatar (2009), volvemos a Pandora donde Jake Sully (Sam Worthington) y Neytiri (Zoe Saldana) han formado una familia. La pareja formada por el ex-humano amigo de los Na'vi y la hija del anterior jefe del clan, además de sus hijos, viajarán más allá de los bosques de Pandora a entornos subacuáticos y volcánicos.",
      price: "5.15",
      imageUrl: "https://hips.hearstapps.com/hmg-prod/images/avatar-66ca0a9027f05.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
      id: 8,
      title: "Aquaman",
      description: "Arthur Curry, también conocido como Aquaman (Jason Momoa), es un habitante de un poderoso reino subacuático que recibe el nombre de la Atlántida. En esta película repleta de acción y aventura conoceremos sus orígenes, desde que era un niño criado por un hombre humano y considerado un paria por los suyos",
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
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.price.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered); // Actualiza los productos filtrados
  };

  return (
    <div>
      <Header />
     
      <div className="min-h-screen flex flex-col items-center bg-blue-600 p-4">
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


