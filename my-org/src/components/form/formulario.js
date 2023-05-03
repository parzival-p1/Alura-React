import "./formulario.css"
import CampoTxt from "../campoTxt"
import ListaOpciones from "../listaOpciones"

const Form = () => {
    return <section className="form">
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTxt titulo="Nombre" placeholder="Ingresar nombre"/>
            <CampoTxt titulo="Puesto" placeholder="Ingresar puesto"/>
            <CampoTxt titulo="Foto" placeholder="Ingresar enlace de foto"/>
            <ListaOpciones />
        </form>
    </section>
}

export default Form