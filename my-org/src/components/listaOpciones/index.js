import "./listaOpciones.css"

const ListaOpciones = (props) => {
    // Metodo map -> arreglo.map( (team, index) => { return <option></option>  } )
    const teams = 
    [
        "Programación",
        "Front End",
        "Data Science",
        "DevOps",
        "UX y Diseño",
        "Móvil",
        "Inovación y Gestión"
    ]

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value);
        props.actualizarTeam(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { teams.map( (teams, index) => <option key={index}> { teams } </option>)}
        </select>
    </div>
}

export default ListaOpciones