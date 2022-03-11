import axios from "axios";
import { Navigate } from "react-router-dom";

const url = 'http://localhost:4000/'


class AuthService {
    login(email, password) {
        try {
            return axios.post(url + 'users/login', {
                email,
                password
            }).then(response=>{
                if (response.data) {
                    localStorage.setItem("token", JSON.stringify(response.data.token));
                }
                return true;

            }
            )
        } catch (error) {
            return false;
        }
    } 

    logout(){
        axios.get(url + 'users/logout')
        localStorage.removeItem('token')
        return <Navigate to='/login' />
    } 

   
    async registrar(nombre, apellido, email, password){
        try {
            const res = await axios.post(url + 'users/register', {
                nombre,
                apellido, 
                email, 
                password
            })
            console.log(res)
            return true//this.login(email, password)
            
        } catch (error) {
            console.log(error)
            throw new Error(error.message)
        }
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem('/users/id/:id'))
    }
}

export default new AuthService()