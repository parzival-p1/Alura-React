import { useState } from "react"
import "./formulario.css"
import CampoTxt from "../campoTxt"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"

const Form = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [team, actualizarTeam] = useState("");

    //^ Equipo
    const [titulo, updateTitle] = useState("");
    const [color, updateColor] = useState("");

    //^ Destructuring code
    const { registerColab, crearTeam } = props;

    const manejarEnvio = (e) => {
        e.preventDefault() // no recarga la pag. completa solo funciona eel btn crear
        console.log("Manejar el envío");
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            team
        }
        registerColab(datosAEnviar);
    }

    const manejarNewTeam = (e) => {
        e.preventDefault(); // prev un comportamiento por default del DOM
        crearTeam({ titulo, colorPrim: color });
    }


    return <section className="form">
        <form onSubmit={ manejarEnvio }>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTxt 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor = { nombre } 
                actualizarValor = { actualizarNombre }
            />
            <CampoTxt 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor = { puesto }
                actualizarValor = { actualizarPuesto }
            />
            <CampoTxt 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor = { foto }
                actualizarValor = { actualizarFoto }
            />
            <ListaOpciones
                valor = { team }
                actualizarTeam = { actualizarTeam }
                teams = { props.teams }
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={ manejarNewTeam }>
            <h2>Rellena el formulario para crear el equipo</h2>
            <CampoTxt 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                valor = { titulo } 
                actualizarValor = { updateTitle }
            />
            <CampoTxt 
                titulo="Color" 
                placeholder="Ingresar el color en Hexadecimal" 
                required
                valor = { color }
                actualizarValor = { updateColor }
            />
            <Boton> Registrar equipo </Boton>
        </form>    
    </section>
}

export default Form