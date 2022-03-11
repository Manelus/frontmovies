import { useEffect } from "react"
import { Navigate } from "react-router"
import Auth from '../services/auth'

const Logout = () => {

    useEffect(() => {
        Auth.logout()
        
    })

    return <Navigate to='/'>logout</Navigate>
}

export default Logout