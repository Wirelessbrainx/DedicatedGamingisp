import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class About extends Component {

    render() {
        return (
          <React.Fragment>
          <header className='react-header'>
              <div className='react-header-div'>
                <h1>About</h1>
              </div>
          </header>
          <div className='react-content'>
            <p>A Dedicated Gaming Internet Service Provider that allows you to connect straight to gaming servers, the latest WISP Technology allows us to 
              give customers exactley what they want
            </p>
          </div>
          </React.Fragment>
        );
      }

}

export default About;