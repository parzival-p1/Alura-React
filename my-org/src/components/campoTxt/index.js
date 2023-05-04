import "./campoTxt.css"

const CampoTxt = (props) => {
    console.log("Datos: ", props); //Propiedades externas de los commponentes
    const placeHolderModified = `${props.placeholder}...`
    
    return <div className="campo-txt">
        <label>{ props.titulo }</label>
        <input placeholder={ placeHolderModified } required={props.required}/>
    </div>
}

export default CampoTxt