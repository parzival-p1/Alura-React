import "./listaOpciones.css"

const ListaOpciones = () => {
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

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            { teams.map( (teams, index) => <option key={index}> { teams } </option>)}
        </select>
    </div>
}

export default ListaOpciones