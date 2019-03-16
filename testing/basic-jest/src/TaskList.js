import React, { Component } from "react";
import Task from "./Task";

class TaskList extends Component {
    constructor () {
        super();
    }

    render () {
      const list = this.props.api.findAll();
      console.log(list);
      return <div>
        {
          list.map( task => <div>
                <Task key={task.id} task={task} api={this.props.api} />
            </div>
          )
        }
        </div>;
    }
}

export default TaskList;
