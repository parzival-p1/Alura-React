import "./formulario.css"
import CampoTxt from "../campoTxt"

const Form = () => {
    return <section className="form">
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTxt titulo="Nombre"/>
            <CampoTxt titulo="Puesto"/>
            <CampoTxt titulo="Foto"/>
            <CampoTxt titulo="Equipo"/>
        </form>
    </section>
}

export default Form