import "./colaborator.css"

const Colaborator = (props) => {
    //^ destructuring
    const { nombre, puesto, foto, team } = props.datos;
    const { colorPrim } = props;
    
    return <div className="colaborator">
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