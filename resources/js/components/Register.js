import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import ReactDOM from 'react-dom';

import $ from "jquery";
import axios from "axios";
import classnames from 'classnames';
import PropTypes from 'prop-types';


class Register extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
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
        password_confirmation: this.state.password_confirmation
      }
      //console.log(users);
      this.registerUser(user, this.props.history);
    }

    registerUser = (user, history)  => {
      
      axios.post('http://dedicatedgamingisp.com/api/register', user)
              .then(response => {
                this.setState({
                  redirect: true
                });
              })
              .catch(error => {
                console.log(error.response.data);
                  this.setState({
                    errors: JSON.parse(error.response.data)
                  });
              });
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.errors) {
          this.setState({
              errors: nextProps.errors
          });
      }
  }

    render() {
      const { errors } = this.state;
      if (this.state.redirect) {
        return <Redirect to='/login' />
      }

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
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.name
                    })}
                    name="name"
                    onChange={ this.handleInputChange }
                    value={ this.state.name }
                    />
                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                  })}
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                     {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                  })}
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Confirm Password"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password_confirmation
                  })}
                    name="password_confirmation"
                    onChange={ this.handleInputChange }
                    value={ this.state.password_confirmation }
                    />
                    {errors.password_confirmation && (<div className="invalid-feedback">{errors.password_confirmation}</div>)}
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

// Register.propTypes = {
//   registerUser: PropTypes.func.isRequired,
// };

const mapStateToProps = state => ({
  errors: state.errors
});

export default Register;