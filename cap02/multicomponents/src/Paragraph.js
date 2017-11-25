import { Component } from 'react';

class Paragraph extends Component {
  render() {
    return (
        <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
            <button onClick={() => this.props.shMsg('Hello')}>Click here</button>
        </p>
    );
  }
}

export default Paragraph;

