import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '', description: '',
                   maritalState: '',s_primary: false, s_bachelor: false, 
                   s_master: false, sex: '' }
  }

  handleChange = (event) => {
    const target = event.target;
    let value =   target.value;
    if (target.type === 'checkbox' && !target.checked ) {
        value = '';
    }
    const name = target.name;

    this.setState({ 
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Complex Login form</h1>
        </header>
        <div className="App-form">
          <form onSubmit={this.handleSubmit}>
          <div><label>Username</label></div>
          <div>
            <input type="text" 
              name="username" 
              value={this.state.username}
              onChange={this.handleChange} />
          </div>
          <div><label>Password</label></div>
          <div>
            <input type="password" 
              name="password" 
              value={this.state.password}
              onChange={this.handleChange}/>
          </div>
          <div><label>Description</label></div>
          <div>
            <textarea 
              name="description" 
              value={this.state.description}
              onChange={this.handleChange}></textarea> 
          </div>
          <div><label>Marital State</label></div>
          <div>
            <select name="maritalState" 
              value={this.state.username}
              onChange={this.handleChange}>
              <option value="1">Single</option>
              <option value="2">Multiple</option>
              <option value="3">Married</option>
            </select> 
          </div>
          <div><label>Studies</label></div>
          <div>
            <div><input type="checkbox" name="s_primary" id="s_primary"
                    value="s_primary" 
                    checked={this.state.s_primary==='s_primary'}
                    onChange={this.handleChange} />
            <label htmlFor="s_primary">Primary</label></div>
            <div><input type="checkbox" name="s_bachelor" id="s_bachelor" 
                    value="s_bachelor"
                    checked={this.state.s_bachelor==='s_bachelor'}
                    onChange={this.handleChange}/>
            <label htmlFor="s_bachelor">Bachelor</label></div>
            <div><input type="checkbox" name="s_master" id="s_master" 
                    value="s_master"
                    checked={this.state.s_master==='s_master'}
                    onChange={this.handleChange}/>
            <label htmlFor="s_master">Master</label></div>
          </div>
          <div><label>Sex</label></div>
          <div>
            <div><input type="radio" name="sex" value="male" id="male" 
                    checked={this.state.sex === 'male'}
                    onChange={this.handleChange}/>
            <label htmlFor="male">Male</label></div>
            <div><input type="radio" name="sex" value="female" id="female" 
                    checked={this.state.sex === 'female'}
                    onChange={this.handleChange}/>
            <label htmlFor="female">Female</label></div>
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
          </form>
          <div>{Object.keys(this.state).map( (key) =>
                <div key={key}><b>{key}:</b> {this.state[key]}</div>)}
          {this.state.sex} - {this.state.s_master}
          </div>
          </div>

      </div>
    );
  }
}

export default App;