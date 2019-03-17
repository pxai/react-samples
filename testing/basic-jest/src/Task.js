import React, { Component } from "react";

class Task extends Component {
    constructor () {
        super();
        this.setState({ showForm: false });
    }
    render () {
        return <div>
                <div>{this.props.task.id}
                - {this.props.task.task}</div>
               <div>
                <a href="javascript:void(0)"
                   onClick={() => this.props.api.delete(this.props.task.id)}>
                   Update
                </a>
                <a href="javascript:void(0)"
                   onClick={() => this.props.api.delete(this.props.task.id)}>
                    Delete
                </a>
               </div>
               { this.state.showForm && <Form task={this.props.task} update={this.update.bind(this)} />}
               </div>;
    }

  toggleForm () {
    this.setState({ showForm: !this.state.showForm });
  }
}

export default Task;
