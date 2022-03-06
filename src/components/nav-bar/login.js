import React from "react";
import { Navigate } from "react-router-dom";
import Auth from '../services/auth'
import { Form, Button } from "react-bootstrap";
// import jwt from "jsonwebtoken";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", isLoading: false, isLogged: false, validated: false, submitDone: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e){
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
    } else {
        console.log('Submitted!')
        console.log(this.state.email, this.state.password)
        try {
            await Auth.login(
                this.state.email,
                this.state.password
            )    
        } catch (error) {
          this.setState({error:error}); console.log(error)
        }
        this.setState({submitDone:true})
    }
}

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { isLoading, isLogged } = this.state;
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
            <h3 className="text-primary">Login</h3>
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
        {this.state.submitDone && <Navigate to={`/Movies`} replace={true} />}
      </div>
    );
  }
}

export default Login;
