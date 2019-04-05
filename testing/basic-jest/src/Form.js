import React, { Component } from 'react';

class Form extends Component {
    constructor (props) {
        super(props);
        this.state =  { task: props.task ? props.task.task : "" };
    }

    render () {
        return <div>
                <div><label>Task</label></div>
                <div><input type="text" onChange={this.updateTask.bind(this)} ref="task" value={this.state.task} /></div>
                <div>
                    <input type="button" value="Save" onClick={this.save.bind(this)} />
                </div>
               </div>;
    }

    updateTask () {
        this.setState({ task: this.refs.task.value });
    }

    save () {
        this.props.update(this.refs.task.value);
        this.refs.task.value = "";
    }
}

export default Form;