import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import $ from "jquery";
import axios from "axios";

class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    console.log(user);
    this.props.loginUser(user);
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.errors) {
        this.setState({
            errors: nextProps.errors
        });
    }
  }

  loginUser = (user) => dispatch => {
    axios.post('/api/users/login', user)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
  }
    render() {
        return (
          <React.Fragment>
            <header className='react-header'>
              <div className='react-header-div'>
                <h1>Login</h1>
              </div>
            </header>
            <div className='react-content'>
              <div className="react-login-content">
              <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Login User
                    </button>
                </div>
            </form>
              </div>
            </div>
          </React.Fragment>
        );
    }

}

export default Login;