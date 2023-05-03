import "./formulario.css"
import CampoTxt from "../campoTxt"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"

const Form = () => {

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envío", e);
    }

    return <section className="form">
        <form onSubmit={ manejarEnvio }>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTxt titulo="Nombre" placeholder="Ingresar nombre"/>
            <CampoTxt titulo="Puesto" placeholder="Ingresar puesto"/>
            <CampoTxt titulo="Foto" placeholder="Ingresar enlace de foto"/>
            <ListaOpciones />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Form