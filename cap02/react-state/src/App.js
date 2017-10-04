import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static defaultState =  {
    number: 0,
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.title}</h1>
        </header>
        <p className="App-intro">
          {this.state.number}
          <button></button>
        </p>
      </div>
    );
  }
}

export default App;
