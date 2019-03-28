import React, { Component } from "react";
import Task from "./Task";
import Form from "./Form";

class TaskList extends Component {
    constructor () {
        super();
        this.setState({showForm: false});
    }

    render () {
      const list = this.props.api.findAll();
      console.log(list, this.state);
      return <div>
        {
          list.map( task => <div>
                <Task key={task.id} task={task} api={this.props.api} />
            </div>
          )
        }
        <div><a href="javascript:void(0)" onClick={this.toggleForm.bind(this)}>Add Task</a></div>
        <Form />
        </div>;
    }

    toggleForm () {
        this.setState({ showForm: !this.state.showForm})
    }
}

export default TaskList;
