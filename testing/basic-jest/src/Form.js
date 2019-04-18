import React, { Component } from "react";

class Form extends Component {
    constructor (props) {
        super(props);
        this.state =  { name: props.task ? props.task.name : "" };
    }

    render () {
        return <div className="Form">
            <div><label>Task</label></div>
            <div>
                <input type="text" onChange={this.updateTask.bind(this)} value={this.state.name} />
            </div>
            <div>
                <input type="button" value="Save" onClick={this.save.bind(this)} />
            </div>
        </div>;
    }

    updateTask (event) {
        this.setState({ name: event.target.value });
    }

    save () {
        if (this.state.name !== "") {
            this.props.onUpdate({name: this.state.name});
            this.setState({name: ""});
        }
    }
}

export default Form;