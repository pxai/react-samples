import React, { Component } from "react";

class Task extends Component {
    render () {
        return <div>
                <div>{this.props.task.id}</div>
                <div>{this.props.task.task}</div>
               </div>;
    }
}

export default Task;
