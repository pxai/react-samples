import React, { Component } from "react";
import Task from "./Task";
import Form from "./Form";

class TaskList extends Component {
    constructor () {
        super();
        this.state = {showForm: false, tasks: []};
    }

    componentDidMount () {
        this.getTasks();
    }

    render () {
      return <div>
        {
          this.state.tasks.map( task => <div>
                <Task key={task.id} task={task} remove={this.remove.bind(this)} update={this.update.bind(this)} />
            </div>
          )
        }
        <div><a href="javascript:void(0)" onClick={this.toggleForm.bind(this)}>Add Task</a></div>
        { this.state.showForm && <Form update={this.add.bind(this)}/> }
        </div>;
    }

    getTasks () {
        const tasks = this.props.api.findAll();
        this.setState({tasks})
    } 

    add (task) {
        console.log("Added task : ", task);
        this.props.api.add(task);
        this.toggleForm();
        this.getTasks();
    }

    update (task) {
        console.log("Updated task : ", task);
        this.props.api.update(task);
        this.getTasks();
    }


    remove (id) {
        console.log("Deleted task : ", id);
        this.props.api.remove(id);
        this.getTasks();
    }

    toggleForm () {
        this.setState({ showForm: !this.state.showForm})
    }
}

export default TaskList;
