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

    const manejarEnvio = (e) => {
        e.preventDefault() // no recarga la pag. completa solo funciona eel btn crear
        console.log("Manejar el envío");
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            team
        }
        console.log(datosAEnviar);
    }

    return <section className="form">
        <form onSubmit={ manejarEnvio }>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTxt 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
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
    </section>
}

export default Form