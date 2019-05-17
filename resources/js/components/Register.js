import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import $ from "jquery";
import axios from "axios";

class Register extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
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
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirm
      }
      //console.log(users);
      this.registerUser(user);
    }

    registerUser = (user)  => {
      
      axios.post('http://dedicatedgamingisp.com/api/register', user)
              .then(response => {
                console.log(response)
              })
              .catch(err => {
                console.log(err);
                  // dispatch({
                  //     type: GET_ERRORS,
                  //     payload: err.response.data
                  // });
              });
    }

    render() {
        return (
          <React.Fragment>
          <header className='react-header'>
              <div className='react-header-div'>
                <h1>Register</h1>
              </div>
          </header>
          
          <div className='react-content'>
              <div className="react-register-content">
              <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    onChange={ this.handleInputChange }
                    value={ this.state.name }
                    />
                </div>
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
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    name="password_confirm"
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirm }
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Register User
                    </button>
                </div>
            </form>
              </div>
          </div>      

          </React.Fragment>

        );
    }
}

export default Register;