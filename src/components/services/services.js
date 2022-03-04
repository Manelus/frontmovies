import axios from "axios";
import authHeader from "./auth-header";

const url = 'http://localhost:4000/'

class Servicios {
    getAll() {
        return axios.get(url + 'usuarios')
    }

    getPerfil(){
        return axios.get(url + 'usuarios/id', {
            headers: authHeader()
        })
    }

    getMovies(){
        return axios.get(url + 'movies/', {
            headers: authHeader()
        })
    }

    getPedidos(){
        return axios.get(url + 'pedidos', {
            headers: authHeader()
        })
    }
}

export default new Servicios()