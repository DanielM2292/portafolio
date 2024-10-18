import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CarList = ({ marca }) => {
   const [cars, setCars] = useState([]);

   useEffect(() => {
      const fetchCars = async () => {
         try {
            const response = await axios.get(`http://localhost:5000/api/${marca}`);
            setCars(response.data);
         } catch (error) {
            console.error(`Error al obtener los carros de ${marca}:`, error);
         }
      };

      fetchCars();
   }, [marca]);

   return (
      <div>
         <h1>Lista de Carros {marca.charAt(0).toUpperCase() + marca.slice(1)}</h1>
         <ul>
            {cars.map(car => (
               <li key={car.id}>
                  {car.nombre_carro} - {car.modelo_carro} ({car.año_de_lanzamiento})
               </li>
            ))}
         </ul>
      </div>
   );
};

export default CarList;