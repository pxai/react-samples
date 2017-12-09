import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showName, changeName } from './actions'
import logo from './img/logo.svg';
import reduxLogo from './img/redux.svg'
import './App.css';

class App extends Component {
  change = () => {
    console.log('Changed.');
    this.props.appChangeName(this.refs.name.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={reduxLogo} className="App-logo" alt="redux logo" />
          <h1 className="App-title">{this.props.appName}</h1>
        </header>
        <p className="App-intro">
          <input type="text" ref="name" />
          <button onClick={() => this.change()}>
          Change store
          </button>
        </p>
      </div>
    );
  }
}

function mapStateToProps (state, props) {
  return {
    appName: state.name
  }
}

function mapDispatchToProps (dispatch) {
  return {
    appShowName: () => dispatch(showName()),
    appChangeName: (data) => dispatch(changeName(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
