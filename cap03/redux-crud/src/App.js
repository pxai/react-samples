import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link, Switch } from 'react-router-dom'
import { getNotes, getNote, addNote, updateNote, deleteNote } from './actions'
import logo from './img/logo.svg'
import reduxLogo from './img/redux.svg'
import './App.css'
import  Notes  from './components/Notes'
import  NotFound  from './components/NotFound'
import  About  from './components/About'

class App extends Component {
  change = () => {
    console.log('Changed.');
    this.props.appChangeName(this.refs.name.value);
  }

  render() {
    return (
      <div className="app">
        <div className="app-header">
            <div className="lapp-header-title">
              <h1>React Redux CRUD sample</h1>
            </div>
            <div>
              <Link to="/">Home</Link> | 
              <Link to="/about">About</Link> | 
            </div>
            <Switch>
              <Route exact path='/' component={Notes}/>  
              <Route exact path='/404' component={NotFound}/> 
              <Route path='/notes/:id' component={Notes} />
              <Route exact path='/about' component={About} />
              <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}


export default App