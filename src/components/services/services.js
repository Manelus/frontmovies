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

    async pedidos(idUser, idMovie){
        try {
            const res = await axios.post(url + 'pedidos', {
                idUser,
                idMovie
            })
            console.log(res)
            return true
            
        } catch (error) {
            console.log(error)
            throw new Error(error.message)
        }
    }
}

export default new Servicios()