# Nombre del Proyecto

Pagina Web Peliculas 

## Tecnologías Usadas

- Vite
- React
- JSX
- HTML
- CSS
- Tailwind Css

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/jonathanjd7/Tailwind-React.git

2. Despliege de la APP.

 Despues de Clonar el repositorio debes entrar en la raiz del proyecto y ejecutar los siguientes documentos:

 Ejecuta npm run dev para iniciar el servidor de desarrollo.
 La URL será típicamente http://localhost:5173.
 
 -Instalar react-icons si no lo tienes. Desde la terminal en la raiz del proyecto
 -> npm install react-icons

 🚨 Problemas Comunes:

Si el puerto 5173 está ocupado, Se usará otro automáticamente
Si ves errores de dependencias, ejecuta npm install nuevamente
Asegúrate de estar en la carpeta correcta del proyecto.



#ESTRUCTURA DEL PROYECTO.

   1. EL CONTENIDO PRINCIPAL CON LA INSTALACION DE VITE, LAS CONFIGURACIONES DE PRITTER, ESLINT, ETC..

![CARPETA JPG](https://github.com/user-attachments/assets/f663f3cb-b762-416d-9fac-19e530566071)

2 . EN LA CARPETA SRC SE ENCUENTRA EL CONTENIDO DE App.jsx || App.css || Index.css y las carpetas con contenido necesario
![SRC JPG](https://github.com/user-attachments/assets/6765ca42-0e6b-4cc5-ae9d-942f01e77547)

3. CARPETA COMPONENTS : incluye HEADER, FOOTER, PRODUCTOCARD, SEARCHBAR
   ![comp jpg](https://github.com/user-attachments/assets/3f046242-dc42-4d4b-866e-838ef6059ee5)



#DESCRIPCION DEL PROYECTO
- El proyecto esta dividido en varias secciones, esta el HTML con la estructura basica, desde la cual se vincula con el el documento App.jsx
- En el documento App.jsx esta el contenido principal del proyecto, desde aqui se importan los archivos REACT que sean necesarios y declaran aqui junto con la funcion Principal
- En la carpeta componentes estan los archivos divididos para luego usarlos todos juntos en App.jsx || los archivos son Header, Footer, SearchBar, ProductCard en cada uno de ellos se realizan las funciones necesarias para poder luego juntarlas y que funcione correctamente.
- En la pagina web se puede visualizar distintas peliculas con su descripcion, cuando quieres seleccionar 1 se suma el contador de "Compra" y tiene una barra de busqueda para filtrar segun el nombre, precio, descripcion etc.
