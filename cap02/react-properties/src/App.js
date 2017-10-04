import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  static defaultProps =  {
      title: 'Default title',
      text: 'Default text',
      version: 0,
      technologies: [],
      fun: this.dummy
  }

  dummy () {
    console.log('I do nothing');
  }

  render() {
    const text = this.props.text;
    const version = this.props.version;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.title} v{version}</h1>
        </header>
        <p className="App-intro">
          {text}
        </p>
        <button onClick={this.props.fun}>Click me</button>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  version: PropTypes.number.isRequired,
  technologies: PropTypes.array.isRequired,
  fun: PropTypes.func.isRequired
}

export default App;
