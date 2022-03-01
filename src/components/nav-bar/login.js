import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
// import jwt from "jsonwebtoken";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", isLoading: false, isLogged: false, validated: false, submitDone: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({validated: true});
      
      axios.post('http://localhost:4000/usuarios/login',{
        email: this.state.email,
        password: this.state.password
      })
    .then(response => {
      this.setState({ isLoaded: true, submitDone: true, isLogged: true})
      localStorage.setItem('token', response.data)
    })
    .catch(error => {
    this.setState({
        isLoaded: true,
        error
    })
    })
  
    } else {
      this.setState({ isLoading: true });
    }
  }

  render() {
    const { isLoading, isLogged, items } = this.state;
    const onChange = (field) => (e) => {
      e.preventDefault();
      this.setState({ [field]: e?.target?.value })
    }
    return (
      <div>
        {isLogged && (
          <Navigate to="/" replace={true} />
        )}
        {isLoading && <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        }
        <div className="text-center">
            <h3 className="text-primary">Sign In</h3>
        </div>
        <Form noValidate onSubmit={this.handleSubmit} validated={this.state.validated}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email" required onChange={onChange('email')} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control   type="password" placeholder="Password" required onChange={onChange('password')} />
            <Form.Control.Feedback type="invalid">
              Please provide a password.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit">Aceptar</Button>
        </Form>
        {this.state.submitDone && <Navigate to={`/perfil`} replace={true} />}
      </div>
    );
  }
}

export default Login;
