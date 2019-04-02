import React, { Component } from "react";
import Task from "./Task";
import Form from "./Form";

class TaskList extends Component {
    constructor () {
        super();
        this.state = {showForm: false, tasks: []};
    }

    componentDidMount () {
        const tasks = this.props.api.findAll();
        this.setState({tasks})
    }

    render () {
      return <div>
        {
          this.state.tasks.map( task => <div>
                <Task key={task.id} task={task} api={this.props.api} />
            </div>
          )
        }
        <div><a href="javascript:void(0)" onClick={this.toggleForm.bind(this)}>Add Task</a></div>
        { this.state.showForm && <Form update={this.update.bind(this)}/> }
        </div>;
    }

    update (task) {
        console.log("Added task : ", task);
        this.props.api.add(task);
        const tasks = this.props.api.findAll();
        this.setState({tasks})
    }

    toggleForm () {
        this.setState({ showForm: !this.state.showForm})
    }
}

export default TaskList;
