import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
//import { BrowserRouter, Router, Switch } from 'react-router-dom'
import Header from './Header.js';
import Footer from './Footer.js';



class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isLoggedIn: false,
          user: {}
        };
      }
    
      componentDidMount() {
        let state = localStorage["appState"];
        if (state) {
          let AppState = JSON.parse(state);
          console.log(AppState);
          this.setState({ isLoggedIn: AppState.isLoggedIn, user: AppState });
        }
      }
    render() {
        
        return (
        <React.Fragment>            
            <Header />
            <Footer />            
        </React.Fragment>
        )
    }
}

export default Main;

ReactDOM.render(<Main /> , document.getElementById('app'))