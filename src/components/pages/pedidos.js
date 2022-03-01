import React from "react";
import { useParams } from "react-router-dom";



const Pedidos = () => {
    const {nombre} = useParams()
    return (
        <div>
            <h2>Pedidos de {nombre}</h2>
        </div>
    )
}

export default Pedidos