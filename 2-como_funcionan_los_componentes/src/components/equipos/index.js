import "./equipo.css"
import Colaborator from "../colaborator"

const Equipo = (props) => {
    //^ Destructuring
    const { colorPrim, colorSec, titulo } = props.datos

    const obj =  {
        backgroundColor: colorSec
    }

    const titleStyle = { borderColor: colorPrim }

    return <section className="equipo" style={obj}>
        <h3 style={ titleStyle }>{ titulo }</h3>
        <div className="colaborators">
            <Colaborator />
            <Colaborator />
            <Colaborator />
            <Colaborator />
            <Colaborator />
            <Colaborator />
            <Colaborator />
        </div>
    </section>
}

export default Equipo