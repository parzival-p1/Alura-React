import { useState } from 'react';
import './App.css';
import Header from './components/header/header.js';
import Form from './components/form/formulario.js';
import MiOrg from './components/miOrg';

function App() {
  const [mostrarForm, actualizarMostrar] = useState(true);

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

    </div>

  );
}

export default App;

