import "./equipo.css"
import Colaborator from "../colaborator"

const Equipo = (props) => {
    //^ Destructuring
    const { colorPrim, colorSec, titulo } = props.datos
    const { colaborators, eliminarColab } = props;

    const obj = { backgroundColor: colorSec }
    console.log(colaborators.length > 0);

    const titleStyle = { borderColor: colorPrim }

    return <> {/** fragment **/}
        { 
            colaborators.length > 0 && 
            <section className="equipo" style={obj}>
                <h3 style={ titleStyle }>{ titulo }</h3>
                <div className="colaborators">
                    {
                        colaborators.map( (colaborator, index) =>  
                        <Colaborator
                            datos={colaborator}
                            key={ index }
                            colorPrim = { colorPrim }
                            eliminarColab = { eliminarColab }
                        /> )
                    }

                </div>
            </section>
        } 
    </>
    
}

export default Equipo