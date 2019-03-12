import React, { Component } from 'react';
import  Greet  from './Greet';
import  TaskList from './TaskList';
import logo from './logo.svg';
import './App.css';
import Api from './Api';

class App extends Component {
  constructor () {
    super();
    this._api = new Api();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
			<Greet />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TaskList />
      </div>
    );
  }
}

export default App;
