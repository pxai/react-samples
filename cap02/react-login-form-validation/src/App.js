import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { login: "", password: "",
                   loginValid: true, passwordValid: true }
  }

  handleSubmit=  (e) => {
    e.preventDefault();
    this.setState({
      login: "",
      password: "",
      loginValid: true,
      passwordValid: true
    })
  }

    loginCheck = (event) => {
        const target = event.target;

        this.setState({
            [target.name]: target.value,
            loginValid: this.isLoginValid(target.value)
        });
    }

    passwordCheck = (event) => {
        const target = event.target;

        this.setState({
            [target.name]: target.value,
            passwordValid: this.isPasswordValid(target.value)
        });
    }

    isLoginValid = (login) => (login.length > 2);
    isPasswordValid = (password) => (password.length > 7);


    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.isLoginValid(this.state.login) ||
            !this.isPasswordValid(this.state.password))
          alert("Form fields are incorrect");
        else
          alert("Form fields correct");
    }

  render() {
    console.log(this.state.loginValid);
    let loginError = (this.state.loginValid)?"":<div className="error">Login not valid</div>;
    let passwordError = (this.state.passwordValid)?"":<div className="error">Password not valid</div>;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Login form</h1>
        </header>
        <div>
          <form onSubmit={this.handleSubmit}>
          <div><label>Login</label></div>
              {loginError}
            <div>
            <input type="text" name="login" onBlur={this.loginCheck} />
          </div>

          <div><label>Password</label></div>
              {passwordError}
            <div>
            <input type="password" name="password" onBlur={this.passwordCheck}  />
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