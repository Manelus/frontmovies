const authHeader = () => {
    const usuario = JSON.parse(localStorage.getItem('usuario'))
    if (usuario && usuario.token){
        return {Authorization: usuario.token}
    } else {
        return {}
    }
}
export default authHeader;