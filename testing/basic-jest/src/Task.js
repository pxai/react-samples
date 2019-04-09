import React, { Component } from "react";
import Form from "./Form";

class Task extends Component {
    constructor (props) {
        super(props);
        this.state = { showForm: false };
    }
    render () {
        return <div>
                <div>{this.props.task.id}
                - {this.props.task.name}</div>
               <div>
                <a href="javascript:void(0)"
                   onClick={this.toggleForm.bind(this)}>
                   Update
                </a>
                <a href="javascript:void(0)"
                   onClick={() => this.props.remove(this.props.task.id)}>
                    Delete
                </a>
               </div>
               {this.state.showForm && <Form task={this.props.task} update={this.update.bind(this)} />}
               </div>;
    }

  toggleForm () {
    this.setState({ showForm: !this.state.showForm });
  }

  update ({name}) {
    console.log(task, "ok");
    if (task !="") {
      this.props.update({id: this.props.task.id, name });
      this.toggleForm();
    } 
  }
}

export default Task;
