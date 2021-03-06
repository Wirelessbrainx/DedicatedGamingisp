import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import  About  from "./About";
import  Login  from "./Login";
import Register from "./Register";

const Header = () => (
    <Router>
    <nav className='react-nav navbar navbar-expand-lg navbar-light bg-light'>
        
            <Link className='navbar-brand' to="/">DGISP</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
                    <Link className='nav-link' to="./About">About <span className="sr-only">(current)</span></Link>                    
                </li>
                <li className="nav-item ">
                    <Link className='nav-link' to="./Login">Login <span className="sr-only">(current)</span></Link>                    
                </li>
                <li className="nav-item">
                    <Link className='nav-link'  to="./Register">Register</Link>
                </li>
      
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>        
    </nav>
    
        <Switch>
            <Route path="/About" exact component={About} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Register" exact component={Register} />
        </Switch>
    </Router>
          
            
                
               
                
            
        
);

export default Header;


