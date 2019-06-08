import React, { Component } from "react";
import { Route, Redirect} from "react-router-dom";
import Auth from "./Auth";
	
class Login extends Component {

  constructor (props) {
	super(props);
	this.state = { redirect : false};
	this.auth = new Auth();
  }

  login = (e) => {
	e.preventDefault();

	this.auth.authenticate(this.refs.login.value,this.refs.password.value);

	if (this.auth.isAuthenticated()) {
		this.setState({ redirect: true });
	} else {
		this.setState({redirect: false });
	}	
		console.log(this.state, this.refs)
  }

  render() {

    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      <Redirect to="/" />
    }

    return (
      <div >
			<header>Login
			</header>
 		  <form onSubmit={this.login}>
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
    );
  }
}

export default Login;
