import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const friends = [
      { name: "John Doe", age: 34}, 
      { name: "Gandalf", age: 1432},
      { name: "Aragorn", age: 442}
    ];

    const friendElements = friends.map(function (e) {
        return (
          <li key={e.name} ><b>{e.name}</b>: {e.age} years</li>
        )
    });

    let showTitle = false;

    let applyCss = true;

    return (
      <div >
        <h1>My Friends {/* Comments inside elements with braces! */}</h1>
        <ul 
          /* This
            is
            a multiline
          */
        >
          {friendElements}
        </ul>
        
         {console.log('This will appear in the console')}
        <p className={ (applyCss) ? 'App-intro':''} >
          This is a paragraph
        </p>
        <p onClick={() => alert('It works')}>
          Click on this paragraph
          </p>
      </div>
    );
  }
}

export default App;

/*   if (showTitle) {
              <h2>This is conditional title</h2>
          } else {
              <div>No other title</div>
          }*/