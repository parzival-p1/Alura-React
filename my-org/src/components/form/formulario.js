import "./formulario.css"
import CampoTxt from "../campoTxt"

const Form = () => {
    return <section className="form">
        <form>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTxt titulo="Nombre" placeholder="Ingresar nombre"/>
            <CampoTxt titulo="Puesto" placeholder="Ingresar puesto"/>
            <CampoTxt titulo="Foto" placeholder="Ingresar enlace de foto"/>
            <CampoTxt titulo="Equipo" placeholder="Seleccionar equipo"/>
        </form>
    </section>
}

export default Form