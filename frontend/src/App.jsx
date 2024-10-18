import React from 'react'
import CarList from './componentes/CarList'
import './App.css'

function App() {


  return (
    <div>
      <CarList marca="nissan" />
      <CarList marca="honda" />
      <CarList marca="mazda" />
      <CarList marca="toyota" />
    </div>
  );
};

export default App
