import "./campoTxt.css"

const CampoTxt = (props) => {
    console.log("Datos: ", props); //Propiedades externas de los commponentes
    return <div className="campo-txt">
        <label>Nombre</label>
        <input placeholder="Ingresar nombre" />
    </div>

}

export default CampoTxt