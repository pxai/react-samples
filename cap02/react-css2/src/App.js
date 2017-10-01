import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    let h1Css = {
          textAlign: 'center',
          color: 'red',
          fontWeight: 'bold'
        };

    let h2Css = { color: 'darkred' };

    let regularCss = {
          textAlign: 'justify',
          color: '#222'
        }
        
    let headerCss =  { backgroundColor: '#333' };
    
    return (
      <div>
        <header style={headerCss}>
          <h1 style={h1Css}>Styled component</h1>
        </header>
        <main>
          <h2 style={h2Css}>Main content</h2>
          <p style={regularCss}>This component is very nice</p>
          </main>
      </div>
    );
  }
}
export default App;
