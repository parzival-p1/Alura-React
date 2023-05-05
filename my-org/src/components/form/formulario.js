import "./formulario.css"
import CampoTxt from "../campoTxt"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"

const Form = () => {

    const manejarEnvio = (e) => {
        e.preventDefault() // no recarga la pag. completa solo funciona eel btn crear
        console.log("Manejar el envío", e);
    }

    return <section className="form">
        <form onSubmit={ manejarEnvio }>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTxt titulo="Nombre" placeholder="Ingresar nombre" required={true}/>
            <CampoTxt titulo="Puesto" placeholder="Ingresar puesto" required/>
            <CampoTxt titulo="Foto" placeholder="Ingresar enlace de foto" required />
            <ListaOpciones />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Form