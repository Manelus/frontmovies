import axios from "axios";
import authHeader from "./auth-header";
const url = 'http://localhost:4000/'

class AuthService {
    async login(email, password){
        const res = await axios.post(url + 'usuarios/login',{
        email,
        password
    });
    if (res.data.token) {
        localStorage.setItem('usuario', JSON.stringify(res.token))
    }
    return res.data;
    }
    logout(){
        try{
            return axios.get(url + 'usuarios/logout', { headers: authHeader() })
            .then(() => {return true}).catch(() => {return false});
            } catch (error) {
        }
    }
    registrar(nombre, apellido,email, password){
        return axios.post(url + 'usuarios/register',{
            nombre,
            apellido,
            email,
            password
        })
    }
    getCurrentUser(){
        return JSON.parse(localStorage.getItem('usuario'))
    }
}

export default new AuthService()