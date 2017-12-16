import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import detectBrowserLanguage from 'detect-browser-language'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {language: detectBrowserLanguage()};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React </h1>
          <h2>Your lang: {detectBrowserLanguage()}</h2>
        </header>
        <p className="App-intro">
          Detected language saved into state: 
          {this.state.language}
        </p>
      </div>
    );
  }
}

export default App;
