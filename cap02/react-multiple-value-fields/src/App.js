import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { possessions: [],
                   studies: []}
  }

  handleChangeSelect = (event) => {
        const target = event.target;
        let possessions = this.state.possessions;

        console.log(target, possessions);
        if (target.selected) {
            possessions.push(target.value);
        } else {
            possessions.splice(possessions.indexOf(target.value),1);
        }

        this.setState({
            [target.name]: possessions
        });
    }

  handleChangeCheckbox = (event) => {
    const target = event.target;
    let studies = this.state.studies;

      if (target.checked) {
        studies.push(target.value);
      } else {
        studies.splice(studies.indexOf(target.value),1);
      }

      this.setState({
          [target.name]: studies
      });
  }

  inArray = (element) => {
    return this.state.studies.indexOf(element) !== -1;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Multiple value fileds</h1>
        </header>
        <div className="App-form">
          <form onSubmit={this.handleSubmit}>
          <div><label>Possessions</label></div>
          <div>
            <select multiple onChange={this.handleChangeSelect}>
              <option value="101"
                      onChange={this.handleChangeSelect} >Smart Phone</option>
              <option value="102"
                      onSelect={this.handleChangeSelect} >Tablet</option>
              <option value="103"
                      onSelect={this.handleChangeSelect} >PC</option>
              <option value="104"
                      onSelect={this.handleChangeSelect} >Laptop</option>
            </select> 
          </div>
          <div><label>Studies</label></div>
          <div>
            <div><input type="checkbox" id="s_primary"
                    value="s_primary" 
                    checked={this.inArray('s_primary')}
                    onChange={this.handleChangeCheckbox} />
            <label htmlFor="s_primary">Primary</label></div>
            <div><input type="checkbox" id="s_bachelor"
                    value="s_bachelor"
                    checked={this.inArray('s_bachelor')}
                    onChange={this.handleChangeCheckbox}/>
            <label htmlFor="s_bachelor">Bachelor</label></div>
            <div><input type="checkbox" id="s_master"
                    value="s_master"
                    checked={this.inArray('s_master')}
                    onChange={this.handleChangeCheckbox}/>
            <label htmlFor="s_master">Master</label></div>
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
          </form>
          <div>{Object.keys(this.state.studies).map( (key) =>
                <div key={key}><b>{key}:</b> {this.state.studies[key]}</div>)}
          {this.state.sex} - {this.state.s_master}
          </div>
          </div>

      </div>
    );
  }
}

export default App;