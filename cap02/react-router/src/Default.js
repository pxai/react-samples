import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';


class Default extends Component {

  render() {

    return (
      <div className="app">
        <div className="app-header">
            <div className="lapp-header-title">
              <h1>Home component</h1>
            </div>
            <div>
              <Link to="/">Home</Link> | 
              <Link to="/about">About</Link> |
              <Link to="/nowhere">Faulty link</Link> |
              <Link to="/category/movies">Category: movies</Link> |
              <Link to="/category/fail">Category: fail (will redirect)</Link> |
            </div>
        </div>
      </div>
    );
  }
}
export default Default;