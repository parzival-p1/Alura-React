import { useState } from 'react';
import './App.css';
import Header from './components/header/header.js';
import Form from './components/form/formulario.js';
import MiOrg from './components/miOrg';
import Equipo from './components/equipos';

function App() {
  const [mostrarForm, actualizarMostrar] = useState(false);

   //^ Op Ternario --> condicion ? seMuestra : noSeMuestra
  //^ condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm) 
  }

  return (
    <div>
      <Header />
      { mostrarForm === true ?  <Form /> : <> </> } {/* Fragments */} 
     {/*  { mostrarForm && <Form /> } 2a op de ternario */}  
      <MiOrg cambiarMostrar = { cambiarMostrar } />
      <Equipo equipo="Programación"/>
      <Equipo equipo="Front End"/>
      <Equipo equipo="Data Science"/>
      <Equipo equipo="DevOps"/>
      <Equipo equipo="UX y Diseño"/>
      <Equipo equipo="Móvil"/>
      <Equipo equipo="Innovación y Gestión"/>
      <Equipo equipo=""/>

    </div>
  );
}

export default App;

