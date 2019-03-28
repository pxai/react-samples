import React, { Component } from 'react';

class Form extends Component {
    render () {
        return <div>
                <div><label>Task</label></div>
                <div><input type="text" /></div>
                <div>
                    <input type="button" value="Save" onClick={this.save.bind(this)} />
                </div>
               </div>;
    }

    save () {
        console.log("Saving state");
    }
}

export default Form;