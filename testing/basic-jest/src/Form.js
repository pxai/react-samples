gmport React, { Component } from 'react';

class Form extends Component {
    constructor () {
      super()
    }

    render () {
        return <div>
                <div><label>Task</label>
                <div><input type="text" /></div>
                <div>
                    <input type="button" value="Save" onClick={this.save.bind(this)} />
                </div>
               </div>;
    }
}
