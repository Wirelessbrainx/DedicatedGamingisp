import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom';
import classnames from 'classnames';
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
    this.loginUser(user, this.props.history);
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.errors) {
        this.setState({
            errors: nextProps.errors
        });
    }
  }

  loginUser = (user, history) => {
    axios.post('http://dedicatedgamingisp.com/api/login', user)
            .then(res => {
              this.setState({
                redirect: true
              });
            })
            .catch(error => {
              
              this.setState({
                errors: error.response.data
              });
            });
  }
    render() {
      const {errors} = this.state;
      
      if(this.state.redirect)
      {
        return <Redirect to='/home' />
      }
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
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.error
                  })}
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                    {errors.error && (<div className="invalid-feedback">{errors.error}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.error
                  })}
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                    {errors.error && (<div className="invalid-feedback">{errors.error}</div>)}
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