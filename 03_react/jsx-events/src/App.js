import React, { Component } from "react";
import "./App.css";

class App extends Component {
  arrowHandleClick = (e) => {
    e.preventDefault();
    alert("The first link was clicked.");
  }

  handleClick(e) {
    e.preventDefault();
    alert("The second link was clicked.");
  }

  render() {

    return (
      <div >

      <button onClick={() => alert("It works")}>
          Click on this button
      </button><br />

      <a href="#" onClick={this.arrowHandleClick}>
        Click first link
      </a><br />

      <a href="#" onClick={(e) => this.handleClick(e)}>
        Click second link
      </a><br />
      </div>
    );
  }
}

export default App;
