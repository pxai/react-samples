import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
     title: 'Default',
     time: new Date().toLocaleTimeString(),
     number: 0,
     numbers: [] 
    }
  }

  changeState () {
    let number = Math.round(Math.random() * 4);
    let numbers = this.state.numbers;
    numbers.push(number);
    this.setState({
        time: new Date().toLocaleTimeString(),
        numbers: numbers,
        number: number,
        title: ((number % 2 === 0)?'It is even':'It is odd')
      })
    console.log('changeState> ', this.state);
  }

  render() {
    console.log('Render was called> ', this.state);
    const colors = ['red', 'yellow', 'green', 'blue','orange'];
    const color = colors[this.state.number];

    return (
      <div className="App" style={{backgroundColor: color}}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            {this.state.title} - {this.state.number}
          </h1>
        </header>
        <div className="App-intro">
          <div>{this.state.time}</div>
          Press this button to change state
          <div><button onClick={() => this.changeState()}>
            Change state
           </button>
           </div>
           <div>
             Generated numbers
             <ul>
               {this.state.numbers.map((x) => (
                 <li key={x}>{x}</li>
               ))}
               </ul>
             </div>
        </div>
      </div>
    );
  }
}

export default App;
