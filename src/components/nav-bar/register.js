import React from "react";
import { Navigate } from "react-router-dom"
import axios from "axios";
import { Button } from "react-bootstrap";

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {nombre: '', apellido: '', email: '', password: '', submitDone:false, passwordOk:false};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit(e) {
      e.preventDefault();
     
      axios.post('http://localhost:4000/usuarios/register',{
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
      this.setState({items: response.data, submitDone: true, isLoaded: true})
      })
      .catch(error => {
      this.setState({
          isLoaded: true,
          error
      })
      })
    }
  
    render(){ 
      return (
          <div className="h-75 pb-5 d-flex flex-column align-items-between justify-content-center">
              <div>
                <h2 className="mb-5">Register</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className="container d-flex flex-column align-items-between justify-content-center" >
                    <label className="row m-2">
                      <p className="col-6">Nombre:</p>
                      <input className="col-6" name="nombre" type='text' required value={this.state.nombre} onChange={this.handleChange} />
                    </label>
                    <label className="row m-2">
                      <p className="col-6">Apellido:</p>
                      <input className="col-6" name="apellido" type='text' required value={this.state.apellido} onChange={this.handleChange} />
                    </label>
                    <label className="row m-2">
                      <p className="col-6">Email:</p>
                      <input className="col-6" name="email" type='email' required value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label className="row m-2">
                      <p className="col-6">Contraseña:</p>
                      <input className="col-6" name="password" type='password' required value={this.state.password} onChange={this.handleChange} />
                    </label>
                  </div>
                  <Button className="primary" type="submit">Registrarse</Button>
                </form>
                {this.state.submitDone &&<Navigate to="/Login" replace={true} />}
              </div>
          </div>
      )
  }

}
  
  export default Register