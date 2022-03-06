import { useEffect } from "react"
import Auth from '../services/auth'

const Logout = () => {

    useEffect(() => {
        Auth.logOut()
            .then(res => console.log('Logout completado'))
    })

    return <h2>logout</h2>
}

export default Logout