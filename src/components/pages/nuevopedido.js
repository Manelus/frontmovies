import React from "react";
import { Navigate } from "react-router-dom";
import Auth from "../services/services";

class nuevoPedido extends React.Component {
  constructor(props){
      super(props)
      this.state = {idUser: '',idMovie: '', submitDone:false, error:null}
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({[event.target.idUser]: event.target.value})
    this.setState({[event.target.idMovie]: event.target.value})
  }

  async handleSubmit(e){
      e.preventDefault();

      try {
          Auth.registrar(
            this.state.idUser,
            this.state.idMovie
          )
              .then((res)=> 
                {this.setState({ submitDone:true })})
              .catch(err =>{this.setState({error:err}); console.log(err)})
      } catch (error) {
        this.setState({error:error}); console.log(error)
      }    
  }
  
    render(){ 
      return (
          <div className="h-75 pb-5 d-flex flex-column align-items-between justify-content-center">
              <div>
                <h2 className="mb-5">Alquiler</h2>
                <form onSubmit={this.handleSubmit}>
                  <div className="container d-flex flex-column align-items-between justify-content-center" >
                  <label className="row m-2">
                      <p className="col-6">Id usuario:</p>
                      <input className="col-6" name="idUser" type='text' required value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label className="row m-2">
                      <p className="col-6">Id Movie:</p>
                      <input className="col-6" name="idMovie" type='text' required value={this.state.nombre} onChange={this.handleChange} />
                    </label>
                  </div>
                  <button className="primary" type="submit">Alquilar</button>
                </form>
                {(this.state.error !== null) &&
                <div className="error">Error del sistema</div>
                }
                {this.state.submitDone &&<Navigate to="/Movies" replace={true} />}
              </div>
          </div>
      )
  }

}
  
  
  export default nuevoPedido