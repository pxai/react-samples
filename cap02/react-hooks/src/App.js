import React from 'react';
import logo from './logo.svg';
import Clock from "./Clock";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Learn React
          <Clock start={0} />
      </header>
    </div>
  );
}

export default App;
