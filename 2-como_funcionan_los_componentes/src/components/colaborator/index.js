import "./colaborator.css"
import { IoIosCloseCircle } from "react-icons/io"


const Colaborator = (props) => {
    //^ destructuring
    const { nombre, puesto, foto, team } = props.datos;
    const { colorPrim, eliminarColab } = props;
    
    return <div className="colaborator">
    <IoIosCloseCircle className="eliminar" onClick={eliminarColab} />
        <div className="header" style={{ backgroundColor: colorPrim }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{ nombre }</h4>
            <h5>{ puesto }</h5>
        </div>
    </div>
}

export default Colaborator