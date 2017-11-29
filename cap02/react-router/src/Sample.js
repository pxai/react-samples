import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './App.css';



class Sample extends Component {

  render() {

    return (
      <div className="app">
        <div className="app-header">
            <div className="lapp-header-title">
              <h1>Sample component</h1>
            </div>
            <div>
                <Redirect to="/404" />
            </div>
        </div>
      </div>
    );
  }
}
export default Sample;