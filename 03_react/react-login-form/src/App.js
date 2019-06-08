import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { login: "", password: "" }
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