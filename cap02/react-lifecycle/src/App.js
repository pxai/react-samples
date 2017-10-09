import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    console.log('App>constructor', this.state, this.props);
  }

  componentDidMount(){
    console.log('App> componentDidMount', this.state, this.props);
  }

  componentWillReceiveProps(){
    console.log('App> componentWillReceiveProps',this.state, this.props);
  }

  shouldComponentUpdate(){
    console.log('App> shouldComponentUpdate', this.state, this.props);
  }

  componentWillUpdate(){
    console.log('App> componentWillUpdate', this.state, this.props);
  }

  componentDidUpdate(){
    console.log('App> componentDidUpdate', this.state, this.props);
  }
  render() {
    console.log('App> render> ', this.state, this.props);
    return (
      <div className="App">
          <button onClick={() => this.setState({name:'React'})}>
          </button>
      </div>
    );
  }

  componentWillUmount(){
    console.log('App> componentWillUmount', this.state, this.props);
  }
}

export default App;
