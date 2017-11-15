import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { login: '', password: '' }
  }

  handleSubmit=  (e) => {
    e.preventDefault();
    this.setState({
      login: this.refs.login.value,
      password: this.refs.password.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Login form</h1>
        </header>
        <div>
          <form onSubmit={this.handleSubmit}>
          <div><label>Login</label></div>
          <div>
            <input type="text" ref="login"/>
          </div>
          <div><label>Password</label></div>
          <div>
            <input type="password" ref="password"/>
          </div>
          <div><label>Description</label></div>
          <div>
            <textarea ref="description"></textarea> 
          </div>
          <div><label>Marital State</label></div>
          <div>
            <select ref="maritalState">
              <option value="1">Single</option>
              <option value="2">Multiple</option>
              <option value="3">Married</option>
            </select> 
          </div>
          <div><label>Studies</label></div>
          <div>
            <div><input type="checkbox" ref="studies[]" value="primary" id="s_primary" />
            <label id="s_primary">Primary</label></div>
            <div><input type="checkbox" ref="studies[]" value="bachelor" id="s_bachelor" />
            <label id="s_bachelor">Bachelor</label></div>
            <div><input type="checkbox" ref="studies[]" value="master" id="s_master" />
            <label id="s_master">Master</label></div>
          </div>
          <div><label>Sex</label></div>
          <div>
            <div><input type="radio" ref="sex" value="male" id="s_nothing" />
            <label id="s_nothing">Nothing</label></div>
            <div><input type="radio" ref="sex" value="female" id="s_bachelor" />
            <label id="s_bachelor">Bachelor</label></div>
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
          </form>
          </div>
          <div>Login: {this.state.login}, password: {this.state.password}
            </div>
      </div>
    );
  }
}

export default App;