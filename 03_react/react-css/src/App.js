import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Styled component</h1>
        </header>
        <main>
          <h2 id="supertitle">Main content</h2>
          <p className="regular">This component is very nice</p>
          </main>
      </div>
    );
  }
}
export default App;
