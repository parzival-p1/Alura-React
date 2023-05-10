import "./listaOpciones.css"

const ListaOpciones = (props) => {
    // Metodo map -> arreglo.map( (team, index) => { return <option></option>  } )

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value);
        props.actualizarTeam(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { props.teams.map(( team, index) => <option key={index} value={team}> {team}</option>) } 
        </select>
    </div>
}

export default ListaOpciones