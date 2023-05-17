import axios from "axios"; //* Lib para hacer peticiones

export const api = axios.create({ //* obj de peticion */
    baseURL: "http://localhost:5000"
});


//^Busca los datos
export const buscar = async (url, setData) => {
    const respuesta = await api.get(url);
    setData(respuesta.data);
}
