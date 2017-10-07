import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Paragraph from './Paragraph'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <Paragraph />
      </div>
    );
  }
}

export default App;
