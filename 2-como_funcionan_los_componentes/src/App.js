import { useState } from 'react';
import './App.css';
import Header from './components/header/header.js';
import Form from './components/form/formulario.js';
import MiOrg from './components/miOrg';
import Equipo from './components/equipos';

function App() {
  const [mostrarForm, actualizarMostrar] = useState(false);
  const [colaborators, updateColabs] = useState([]);

   //^ Op Ternario --> condicion ? seMuestra : noSeMuestra
  //^ condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm) 
  }

  //^ Registrar colaborador
  const registerColab = (colaborator) => {
    console.log("Nuevo colaborador", colaborator);

    //? Spread operator (hace una copia de los values prev guardados)
    updateColabs([...colaborators, colaborator]) //^recibe el nuevo valor y lo agrega

  }

  //^ Lista de equipos
  const teams =  
  [
      {
        titulo: "Programación",
        colorSec: "#D9F7E9",
        colorPrim: "#57C278 "
      },
      {
        titulo:"Front End",
        colorSec: "#E8F8FF",
        colorPrim: "#82CFFA"
      },
      {
        titulo: "Data Science",
        colorSec: "#F0F8E2",
        colorPrim: "#A6D157"
      },
      {
        titulo: "DevOps",
        colorSec: "#FDE7E8",
        colorPrim: "#E06B69"
      },
      {
        titulo: "UX y Diseño",
        colorSec: "#FAE9F5",
        colorPrim: "#DB6EBF"
      },
      {
        titulo: "Móvil",
        colorSec: "#FFF5D9",
        colorPrim: "#FFBA05"
      },
      {
        titulo: "Inovación y Gestión",
        colorSec: "#FFEEDF",
        colorPrim: "#FF8A29"
      }
  ]

  return (
    <div>
      {/*  { mostrarForm && <Form /> } 2a op de ternario */}  
      <Header />
      { 
        mostrarForm && <Form 
          teams={teams.map((team) => team.titulo)} 
          registerColab = { registerColab }
        />
      }
      
      <MiOrg cambiarMostrar = { cambiarMostrar } />

      {
        teams.map((team) => <Equipo  // al trabajar con map siempre utilizar key
          datos={ team } 
          key={team.titulo} 
          colaborators={colaborators.filter( colaborator => colaborator.team === team.titulo )}

        />  
        )
      }
    </div>
  );
}

export default App;

