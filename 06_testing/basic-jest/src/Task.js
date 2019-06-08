import React, { Component } from "react";
import Form from "./Form";

class Task extends Component {
    constructor (props) {
        super(props);
        this.state = { showForm: false };
    }
    render () {
        return <div className="Task">
            <div className="Task-data">
                {this.props.task.id} - {this.props.task.name}
            </div>
            <div className="Task-controls">
                <a href="javascript:void(0)"
                    onClick={this.toggleForm.bind(this)}>
                    Update
                </a> | 
                <a href="javascript:void(0)"
                    onClick={() => this.props.onRemove(this.props.task.id)}>
                      Delete
                </a>
            </div>
            {this.state.showForm && <Form task={this.props.task} onUpdate={this.update.bind(this)} />}
        </div>;
    }

    toggleForm () {
        this.setState({ showForm: !this.state.showForm });
    }

    update ({name}) {
        if (name !=="") {
            this.props.onUpdate({id: this.props.task.id, name });
            this.toggleForm();
        } 
    }
}

export default Task;
