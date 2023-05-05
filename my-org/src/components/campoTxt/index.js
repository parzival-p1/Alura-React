import { useState } from "react";
import "./campoTxt.css"

const CampoTxt = (props) => {
    const placeHolderModified = `${props.placeholder}...`

    const driveChange = (e) => {
        props.actualizarValor(e.target.value);
    }
    
    return <div className="campo-txt">
        <label>{ props.titulo }</label>
        <input 
            placeholder={ placeHolderModified } 
            required={props.required} 
            value={props.valor} 
            onChange={driveChange}
        />
    </div>
}

export default CampoTxt