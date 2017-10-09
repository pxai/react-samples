import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App>constructor', props);
  }

  componentDidMount(){
    console.log('App> componentDidMount', this.state, this.props);
  }

  componentWillReceiveProps(nextProps){
    console.log('App> componentWillReceiveProps',this.state, this.props);
    console.log('App> componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('App> shouldComponentUpdate', this.state, this.props);
    console.log('App> shouldComponentUpdate', nextState, nextProps);
    return true;
  }

  componentWillUpdate(nextProps, nextState){
    console.log('App> componentWillUpdate', this.state, this.props);
    console.log('App> componentWillUpdate', nextState, nextProps);
  }

  componentDidUpdate(nextProps, nextState){
    console.log('App> componentDidUpdate', this.state, this.props);
    console.log('App> componentDidUpdate', nextState, nextProps);
  }
  render() {
    console.log('App> render> ', this.state, this.props);
    return (
      <div className="App">
          <button onClick={() => this.setState({name:'React'})}>
            Update
          </button>
      </div>
    );
  }

  componentWillUmount(){
    console.log('App> componentWillUmount', this.state, this.props);
  }
}

export default App;
