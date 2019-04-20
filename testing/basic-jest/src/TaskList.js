import React, { Component } from "react";
import Task from "./Task";
import Form from "./Form";

class TaskList extends Component {
    constructor() {
        super();
        this.state = { showForm: false, tasks: [] };
    }

    componentDidMount() {
        this.getTasks();
    }

    render() {
        return <div>
            <h3>Tasks: { this.state.tasks.length}</h3>
            {
                this.state.tasks.map(task =>
                    <Task key={task.id} task={task}
                          onRemove={this.remove.bind(this)}
                          onUpdate={this.update.bind(this)} />
                )
            }
            <div><a href="javascript:void(0)" onClick={this.toggleForm.bind(this)}>Add Task</a></div>
            {this.state.showForm && <Form onUpdate={this.add.bind(this)} />}
        </div>;
    }

    getTasks() {
        const tasks = this.props.api.findAll();
        this.setState({ tasks });
    }

    add({ name }) {
        this.props.api.add({ name });
        this.toggleForm();
        this.getTasks();
    }

    update(task) {
        this.props.api.update(task);
        this.getTasks();
    }


    remove(id) {
        this.props.api.remove(id);
        this.getTasks();
    }

    toggleForm() {
        this.setState({ showForm: !this.state.showForm });
    }
}

export default TaskList;
