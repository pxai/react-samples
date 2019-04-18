import * as React from "react";
import * as ReactDOM from 'react-dom';
import Task from "./Task";
import "./App.css";
import Greet  from "./Greet";
import TaskList from "./TaskList";
import Api from "./Api";
import registerServiceWorker from "./registerServiceWorker";


class App extends React.Component {
  private _api: Api;

  public constructor (props) {
      super(props);
      const list: Task[] = [{ id: 1, name: "Just do"}, {id: 2, name: "Just Chill"}] as Task[];
      this._api = new Api(list);
      console.log("Created!: ", list);
  }

  public render(): React.ReactNode {
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

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();