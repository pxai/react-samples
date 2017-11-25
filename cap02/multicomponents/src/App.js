import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Paragraph from './Paragraph'

class App extends Component {
    showMsg (msg) {
        alert('This button works: ' + msg);
    }
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <Paragraph onClick={() => this.showMsg('Hello')} />
      </div>
    );
  }
}

export default App;
