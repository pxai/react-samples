import React, { Component } from "react";

class TaskList extends Component {
    constructor () {
        super();
    }

    render () {
      const list = [{id: 1, task: "Just do"}, {id: 2, task: "Just Chill"}];
      return <div>
        {
          list.map( task => <div>
                {task.id}. {task.task}
            </div>
          )
        }
        </div>;
    }
}

export default TaskList;
