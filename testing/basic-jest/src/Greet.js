import React, { Component } from 'react';
import './Greet.css';

class Greet extends Component {
  constructor(props) {
    super(props);
    this.state = {
    message: 'This is a greet'
    };
  }
  doSomething(){
    console.log('Greet was clicked');
    this.setState({message: 'I was clicked'});
  }

  render() {
    return (
      <div className="Greet" onClick={() => this.doSomething()}>
		  {this.state.message}
      </div>
    );
  }
}

export default Greet;
