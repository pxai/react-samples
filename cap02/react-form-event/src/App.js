import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {name: 'Default name'};
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.name}</h1>
        </header>
        <p className="App-intro">
          <div><label>Sample text</label></div>
          <div>
            <input type="text"
              value={this.state.name}
              defaultValue='default text'
              onChange={this.handleChange} 
            />
          </div>
        </p>
      </div>
    );
  }
}

export default App;