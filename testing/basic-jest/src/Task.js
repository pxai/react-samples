import React, { Component } from "react";

class Task extends Component {
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
               </div>;
    }
}

export default Task;
