import React, { Component } from "react";
import Task from "./Task";

class TaskList extends Component {
    constructor () {
        super();
    }

    render () {
      const list = [{id: 1, task: "Just do"}, {id: 2, task: "Just Chill"}];
      return <div>
        {
          list.map( task => <div>
                <Task key={task.id} task={task} />
            </div>
          )
        }
        </div>;
    }
}

export default TaskList;
