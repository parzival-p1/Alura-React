import { useState } from 'react';
import './App.css';
import Header from './components/header/header.js';
import Form from './components/form/formulario.js';
import MiOrg from './components/miOrg';
import Equipo from './components/equipos';
import Footer from './components/footer';

function App() {
  const [mostrarForm, actualizarMostrar] = useState(false);
  const [colaborators, updateColabs] = useState([{
    team: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
  },
  {
    team: "Front End",
    foto: "https://github.com/parzival-p1.png",
    nombre: "Paco Hdez",
    puesto: "Software Developer",
  },
  {
    team: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
  },
  {
    team: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
  },
  {
    team: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
  },
  {
    team: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
  }]);

  //^ Lista de equipos
  const [teams, updateTeams] = useState([
    {
      titulo: "Programación",
      colorSec: "#D9F7E9",
      colorPrim: "#57C278"
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
      titulo: "Innovación y Gestión",
      colorSec: "#FFEEDF",
      colorPrim: "#FF8A29"
    }
  ])

   //^ Op Ternario --> condicion ? seMuestra : noSeMuestra
  //^ condicion && seMuestra

  const cambiarMostrar = () => {[]
    actualizarMostrar(!mostrarForm) 
  }

  //^ Registrar colaborador
  const registerColab = (colaborator) => {
    console.log("Nuevo colaborador", colaborator);

    //? Spread operator (hace una copia de los values prev guardados)
    updateColabs([...colaborators, colaborator]) //^recibe el nuevo valor y lo agrega
  }

  //^Eliminar colaborador
  const eliminarColab = () => {
    console.log("Eliminar colaborador");
  }

  //^ Actualizar color de equipo
  const updateColor = (color, titulo) => {
    console.log("Actualizar: ", color, titulo);
    const updatedTeams = teams.map((team) => {
      if (team.titulo === titulo) {
        team.colorPrim = color;
      }

      return team;
    })

    updateTeams(updatedTeams);
  }

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
          eliminarColab = { eliminarColab }
          updateColor = { updateColor }
        />  
        )
      }

      <Footer />

    </div>
  );
}

export default App;

