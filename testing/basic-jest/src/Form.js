import React, { Component } from 'react';

class Form extends Component {
    constructor (props) {
        super(props);
        this.state =  { name: props.task ? props.task.name : "" };
    }

    render () {
        return <div>
                <div><label>Task</label></div>
                <div><input type="text" onChange={this.updateTask.bind(this)} ref="name" value={this.state.name} /></div>
                <div>
                    <input type="button" value="Save" onClick={this.save.bind(this)} />
                </div>
               </div>;
    }

    updateTask () {
        this.setState({ task: this.refs.name.value });
    }

    save () {
        this.props.update(this.refs.name.value);
        this.refs.name.value = "";
    }
}

export default Form;