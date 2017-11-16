import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '', description: '',
                   maritalState: '',studies: [], sex: '' }
  }

  handleSubmit=  (e) => {
    e.preventDefault();

    let studies = [];
      for (let value of this.refs.form.studies) {
          if (value.checked) { studies.push(value.value);}
      }

    this.setState({
      username: this.refs.username.value,
      password: this.refs.password.value,
      description: this.refs.description.value,
      maritalState: this.refs.maritalState.value,
      studies: studies,
      sex: this.refs.form.sex.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Login form</h1>
        </header>
        <div className="App-form">
          <form onSubmit={this.handleSubmit} ref="form">
          <div><label>Username</label></div>
          <div>
            <input type="text" ref="username"/>
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
            <div><input type="checkbox" name="studies" ref="s_primary" value="primary" id="s_primary" />
            <label htmlFor="s_primary">Primary</label></div>
            <div><input type="checkbox" name="studies" ref="s_bachelor" value="bachelor" id="s_bachelor" />
            <label htmlFor="s_bachelor">Bachelor</label></div>
            <div><input type="checkbox" name="studies" ref="s_master" value="master" id="s_master" />
            <label htmlFor="s_master">Master</label></div>
          </div>
          <div><label>Sex</label></div>
          <div>
            <div><input type="radio" name="sex" value="male" id="male" />
            <label htmlFor="male">Male</label></div>
            <div><input type="radio" name="sex" value="female" id="female" />
            <label htmlFor="female">Female</label></div>
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
          </form>
          <div>{Object.keys(this.state).map( (key) => <div key={key}><b>{key}:</b> {this.state[key]}</div>)}
          </div>
          </div>

      </div>
    );
  }
}

export default App;