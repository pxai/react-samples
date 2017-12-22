import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class Cards extends Component {

  render() {

    return (
      <div className="app">
        <div className="app-header">
            <div className="lapp-header-title">
              <h1>Default component</h1>
            </div>
            <div>
              <Link to="/">Home</Link> | 
              <Link to="/about">About</Link> |
         </div>
        </div>
      </div>
    );
  }
}

export default Cards;