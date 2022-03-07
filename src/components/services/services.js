import axios from "axios";
import authHeader from "./auth-header";

const url = 'http://localhost:4000/'

class Servicios {
    getAll() {
        return axios.get(url + 'users')
    }

    getPerfil(){
        return axios.get(url + 'users/id', {
            headers: authHeader()
        })
    }

    getMovies(){
        return axios.get(url + 'pedidos/', {
            headers: authHeader()
        })
    }

    getPedidos(){
        return axios.get(url + 'pedidos/pedido', {
            headers: authHeader()
        })
    }
}

export default new Servicios()