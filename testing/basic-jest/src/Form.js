import React, { Component } from 'react';

class Form extends Component {
    render () {
        return <div>
                <div><label>Task</label></div>
                <div><input type="text" ref="task" /></div>
                <div>
                    <input type="button" value="Save" onClick={this.save.bind(this)} />
                </div>
               </div>;
    }

    save () {
        this.props.update(this.refs.task.value);
        this.refs.task.value = "";
    }
}

export default Form;