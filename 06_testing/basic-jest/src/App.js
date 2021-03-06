import React, { Component } from "react";
import  Greet  from "./Greet";
import  TaskList from "./TaskList";
import "./App.css";
import Api from "./Api";

class App extends Component {
    constructor () {
        super();
        const list = [{ id: 1, name: "Just do"}, {id: 2, name: "Just Chill"}];
        this._api = new Api(list);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Task List</h1>
                </header>
                <Greet />
                <p className="App-intro">
          Here is your list
                </p>
                <TaskList api={this._api} />
            </div>
        );
    }
}

export default App;
